import { useCodeSpace } from "@/hooks/use-code-space";
import { ContextManager } from "@/lib/context-manager";
import type { ICode, ImageData, Message, MessageContent } from "@/lib/interfaces";
import { updateSearchReplace } from "@/lib/shared";
import type { AIHandler } from "@src/AIHandler";
import { claudeRecovery } from "@src/config/aiConfig";
import { md5 } from "@src/modules";
import { Mutex } from "async-mutex";
import { throttle } from "es-toolkit";

const mutex = new Mutex();

/**
 * Creates a new message, optionally including images.
 */
export async function createNewMessage(
  images: ImageData[],
  claudeContent: string,
): Promise<Message> {
  const imagesContent: MessageContent = [];

  if (images && images.length > 0) {
    images.forEach((image) => {
      imagesContent.push({
        type: "image_url",
        image_url: {
          url: image.url,
        },
      });
    });
    imagesContent.push({ type: "text", text: claudeContent.trim() || "" });
  }

  return {
    id: Date.now().toString(),
    role: "user",
    content: imagesContent.length > 0 ? imagesContent : claudeContent,
  };
}

/**
 * Processes messages with retries, handling assistant responses and updating code accordingly.
 */
export async function processMessage(
  { aiHandler, cSess, codeNow, messages, setMessages, newUserMessage }: {
    aiHandler: AIHandler;
    cSess: ICode;
    codeNow: string;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    newUserMessage: Message;
  },
): Promise<boolean> {
  const contextManager = new ContextManager(useCodeSpace());

  const maxRetries = 3;
  let retries = 0;
  const mod = { controller: new AbortController(), lastCode: codeNow, actions: [] };

  // Add the user message to the messages array
  messages.push(newUserMessage);
  setMessages((prevMessages) => [...prevMessages, newUserMessage]);

  const onUpdate = createOnUpdateFunction(
    { setMessages, cSess, contextManager, startCode: codeNow, mod },
  );

  // Create a copy of the messages array to work with
  const workingMessages = [...messages];

  while (retries < maxRetries) {
    try {
      console.log(`Processing message (attempt ${retries + 1})`);

      const assistantMessage = await sendAssistantMessage(
        aiHandler,
        workingMessages,
        onUpdate,
      );

      mod.controller.abort();

      // Add the assistant message to the working messages array
      workingMessages.push(assistantMessage);

      // Update the state with all messages, including the new assistant message
      setMessages([...workingMessages]);

      const success = await processAssistantMessage(
        assistantMessage,
        codeNow,
        cSess,
      );

      if (success) return true;

      const errorMessage = contextManager.getContext("errorLog");
      if (errorMessage) {
        const errorHandled = await handleErrorMessage(
          { errorMessage, codeNow, messages: workingMessages, aiHandler, setMessages, cSess, contextManager, mod },
        );
        if (errorHandled) return true;
      }

      retries++;
    } catch (error) {
      console.error(`Error processing message (attempt ${retries + 1}): ${error}`);
      retries++;
    }
  }

  console.error("Max retries reached. Failed to process message.");
  return false;
}
/**
 * Attempts to set the code in the code session.
 */
async function trySetCode(cSess: ICode, code: string): Promise<boolean> {
  try {
    const success = await cSess.setCode(code);
    return !!success;
  } catch (error) {
    console.error(`Failed to set code: ${error}`);
    return false;
  }
}

/**
 * Creates an onUpdate function to handle assistant updates.
 */
function createOnUpdateFunction({
  setMessages,
  cSess,
  contextManager,
  startCode,
  mod,
}: {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  cSess: ICode;
  contextManager: ContextManager;
  startCode: string;
  mod: { controller: AbortController };
}) {
  let instructions = "";
  let lastUpdateTime = 0;
  const updateInterval = 100; // Update UI every 100ms

  const updateState = () => {
    const now = Date.now();
    if (now - lastUpdateTime >= updateInterval) {
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.role === "assistant") {
          // Update the last assistant message
          return [
            ...prevMessages.slice(0, -1),
            { ...lastMessage, content: instructions },
          ];
        } else {
          // Add a new assistant message
          return [
            ...prevMessages,
            {
              id: now.toString(),
              role: "assistant",
              content: instructions,
            },
          ];
        }
      });
      lastUpdateTime = now;
    }
  };

  const throttledMutexOperation = throttle(async (signal: AbortSignal, mod) => {
    if (signal.aborted) {
      console.log("Aborted onUpdate before updating");
      return;
    }
    try {
      const lastSuccessCut = mod.actions[mod.actions.length - 1]?.startPos || 0;

      const lastCode = mod.lastCode;
      const chunk = instructions.slice(lastSuccessCut);
      mod.lastCode = await updateSearchReplace({ instructions: chunk, code: lastCode });

      if (md5(mod.lastCode) === md5(lastCode)) {
        mod.actions.push({
          type: "skip",
          chars: instructions.length,
          startPos: lastSuccessCut,
          lastSuccessCut,
          chunk,
          chunLength: chunk.length,
          hash: md5(lastCode),
        });
        console.table(mod.actions[mod.actions.length - 1]);
      } else {
        mod.actions.push({
          type: "updated",
          lastCode: mod.lastCode,
          chars: instructions.length,
          lastSuccessCut: instructions.length,
          startPos: lastSuccessCut,
          chunk,
          chunLength: chunk.length,
          hash: md5(mod.lastCode),
        });
        console.table(mod.actions[mod.actions.length - 1]);

        const success = await trySetCode(cSess, lastCode);
        mod.actions.push({
          type: success ? "success" : "error",
          chars: instructions.length,
          startPos: lastSuccessCut,
          hash: md5(mod.lastCode),
        });
        console.table(mod.actions[mod.actions.length - 1]);
        contextManager.updateContext("currentDraft", success ? "" : lastCode);
      }
    } catch (error) {
      console.error("Error in throttledMutexOperation:", error);
      contextManager.updateContext("errorLog", (error as Error).message);
    }
  }, 100);

  return async (code: string) => {
    if (mod.controller.signal.aborted) {
      console.log("Aborted onUpdate before starting");
      return;
    }

    instructions = code;
    updateState();

    try {
      mod.controller.abort();
      mod.controller = new AbortController();
      const { signal } = mod.controller;

      await mutex.runExclusive(() => throttledMutexOperation(signal, mod));
    } catch (error) {
      console.error("Error in mutex operation:", error);
      contextManager.updateContext("errorLog", (error as Error).message);
    }
  };
}

/**
 * Sends a message to the assistant and handles fallback if necessary.
 */
async function sendAssistantMessage(
  aiHandler: AIHandler,
  messages: Message[],
  onUpdate: (code: string) => Promise<void>,
): Promise<Message> {
  try {
    let assistantMessage = await aiHandler.sendToAnthropic(messages, onUpdate);

    if (typeof assistantMessage.content !== "string" && !Array.isArray(assistantMessage.content)) {
      throw new Error("Invalid assistant message content type");
    }

    const contentToProcess = extractTextContent(assistantMessage.content);

    if (contentToProcess.includes("An error occurred while processing")) {
      console.log("Falling back to GPT-4");
      assistantMessage = await aiHandler.sendToGpt4o(messages, onUpdate);
    }

    return assistantMessage;
  } catch (error) {
    console.error("Error in sendAssistantMessage:", error);
    throw error;
  }
}

/**
 * Processes the assistant's message to update the code.
 */
async function processAssistantMessage(
  assistantMessage: Message,
  codeNow: string,
  cSess: ICode,
): Promise<boolean> {
  const contentToProcess = extractTextContent(assistantMessage.content);

  const starterCode1 = await updateSearchReplace({ instructions: contentToProcess, code: codeNow });
  const starterCode2 = await updateSearchReplace({ instructions: contentToProcess + `\n foo \n`, code: codeNow });

  const starterCode = starterCode1 !== starterCode2 ? codeNow : starterCode1;

  if (starterCode !== codeNow) {
    const success = await trySetCode(cSess, starterCode);
    if (success) return true;
  }

  return false;
}

/**
 * Handles error messages by sending a recovery message and processing the response.
 */
async function handleErrorMessage(
  {
    errorMessage,
    codeNow,
    messages,
    aiHandler,
    setMessages,
    cSess,
    contextManager,
    mod,
  }: {
    errorMessage: string;
    codeNow: string;
    messages: Message[];
    aiHandler: AIHandler;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    cSess: ICode;
    contextManager: ContextManager;
    mod: { controller: AbortController };
  },
): Promise<boolean> {
  const userMessage: Message = {
    id: Date.now().toString(),
    role: "user",
    content: claudeRecovery(codeNow, errorMessage),
  };

  // Create a new array with all existing messages plus the new user message
  const updatedMessages = [...messages, userMessage];

  // Update the state with all messages, including the new user message
  setMessages(updatedMessages);

  const newOnUpdate = createOnUpdateFunction(
    { setMessages, cSess, contextManager, startCode: codeNow, mod },
  );

  const assistantMessage = await sendAssistantMessage(
    aiHandler,
    updatedMessages,
    newOnUpdate,
  );

  mod.controller.abort();

  // Add the assistant message to the updated messages array
  updatedMessages.push(assistantMessage);

  // Update the state with all messages, including the new assistant message
  setMessages([...updatedMessages]);

  const assistantFullMessage: string = assistantMessage.content as string;
  await newOnUpdate(assistantFullMessage);

  //  const contentToProcess = extractTextContent(assistantMessage.content);

  //  const starterCode = await updateSearchReplace({ instructions: contentToProcess, code: codeNow });
  /// const success = await trySetCode(cSess, starterCode);
  const success = cSess.session.code !== codeNow;

  return success;
}
/**
 * Extracts text content from a message.
 */
function extractTextContent(
  content: string | Array<{ type: string; text?: string }>,
): string {
  if (typeof content === "string") {
    return content;
  }
  const textItem = content.find((item) => item.type === "text");
  return textItem?.text || "";
}
