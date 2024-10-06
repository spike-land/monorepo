import { useDarkMode } from "@/hooks/use-dark-mode";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChatDrawer } from "@/components/app/chat-drawer";
import type { ICode } from "@/lib/interfaces";
import { useCodeSpace } from "@/hooks/use-code-space";

import { useScreenshot } from "./hooks/useScreenshot";
import type { ImageData, Message } from "@/lib/interfaces";
import { md5 } from "@/lib/md5";
import { useLocalStorage } from "react-use";
import { handleSendMessage } from "@/lib/shared";
import { messagesPush } from "@/lib/chat-utils";

const MemoizedChatDrawer = React.memo(ChatDrawer);

export const ChatInterface: React.FC<{
  isOpen: boolean;
  cSess: ICode;
  onClose: () => void;
}> = React.memo(({ onClose, isOpen, cSess }): React.ReactElement | null => {
  const codeSpace = useCodeSpace();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const [mess, setMess] = useLocalStorage<Message[]>(`chatMessages-${codeSpace}`, [])
  const [messages, setMessages] = useState<Message[]>(mess || []);  
  const [isStreaming, setIsStreaming] = useLocalStorage<boolean>(`streaming-${codeSpace}`, false);
  const [input, setInput] = useState("");
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editInput, setEditInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const resetChat = useCallback((): void => {
    setMessages([]);
    setInput("");
    setEditingMessageId(null);
    setEditInput("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [setMessages]);

  useEffect(() => {
    // if hast changed in the last 3 seconds, save it
    const messagesHash = md5(messages.map((msg) => md5(msg)).join(""));
    const interval = setInterval(() => {
      const messagesHashNow = md5(messages.map((msg) => md5(msg)).join(""));
      if (messagesHash !== messagesHashNow) return;
      setMess(messages);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages, setMess]);

  const handleCancelEdit = useCallback(() => {
    setEditingMessageId(null);
    setEditInput("");
  }, [setEditingMessageId, setEditInput]);

  const handleSaveEdit = (messageId: string) => {
    const mess = messages!.map((msg) =>
      msg.id === messageId
        ? {
          ...msg,
          content: typeof msg.content === "string" ? msg.content : Array.isArray(msg.content)
            ? msg.content.map(item => item.type === "text" ? { ...item, text: editInput } : item)
            : editInput,
        }
        : msg
    );

    setMessages([...mess]);
    setEditingMessageId(null);
    setEditInput("");
  };
  

  useEffect(() => {
    const BC= new BroadcastChannel(`${codeSpace}-chat`);
    BC.onmessage = async (event: {data: 
      { messages?: Message[]; isStreaming?: boolean; message?: Message; chunk?: string, code?: string }}) => {
      const e= event.data;
      if (e.messages) {
        setMessages(messages);
      }
      if (e.isStreaming!==undefined) {
        setIsStreaming(e.isStreaming);
      }
      if (e.message) {
        const msgs = messagesPush(messages,e.message);
        setMessages(msgs);  
      }
      if (e.code){
       await cSess.setCode(e.code);
      }
      if (e.chunk) {
        setMessages((prev: Message[])=>{
          const lastMessage = prev[prev.length - 1];
          lastMessage.content += e.chunk!
 
          return prev;

        });
      }

    };
    if (isStreaming && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const interval = setTimeout(() => {
        const newMessage = messages[messages.length - 1];
        if (md5(lastMessage) === md5(newMessage)) {
          console.log("No new messages setIsStreaming = false");
          setIsStreaming(false);
        } else {
          console.log("New messages setIsStreaming = true");
          console.log("lastMessage", md5(lastMessage));
          console.log("newMessage", md5(newMessage));
        }
      }, 1000);
      return () => clearTimeout(interval);
    } else {
      return undefined;
    }
  }, []);

  const handleResetChat = useCallback((): void => {
    resetChat();
    setIsStreaming(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [resetChat, setIsStreaming]);

  const {
    isScreenshotLoading,
    screenshotImage,
    handleScreenshotClick,
    handleCancelScreenshot,
  } = useScreenshot(codeSpace);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.getElementById("after-last-message")?.scrollIntoView({ behavior: "instant", block: "end" });
      });
    }
    if (codeSpace.includes("-")) {
      const maybeKey = codeSpace.split("-")[1];
      const storedData = sessionStorage.getItem(maybeKey);
      if (storedData) {
        const {prompt, images} = JSON.parse(storedData) as {prompt: string; images: ImageData[]};
        sessionStorage.removeItem(maybeKey);
        const messages = [{ id: Date.now().toString(), role: "user", content: prompt } as Message ];
        setInput('');
        handleSendMessage({messages, codeSpace, prompt, images});
      }
    }
  }, [isOpen, codeSpace, handleSendMessage]);



  const memoizedSetInput = useCallback((value: string): void => {
    setInput(value);
  }, []);

  const memoizedHandleEditMessage = useCallback((messageId: string): void => {
    setEditingMessageId(messageId);

      const messageToEdit = messages.find((msg) => msg.id === messageId);
      if (!messageToEdit) {
        console.error("Invalid message for editing");
        return;
      }
      const contentToEdit = Array.isArray(messageToEdit.content)
        ? messageToEdit.content.find(item => item.type === "text")?.text || ""
        : messageToEdit.content;
  
      setEditInput(contentToEdit);
  }, [handleSendMessage]);

  const memoizedSetEditInput = useCallback((value: string): void => {
    setEditInput(value);
  }, []);

  const memoizedScreenShot = useCallback((): Promise<ImageData> => cSess.screenShot(), [cSess]);

  if (!isOpen) return null;

  return (
    <MemoizedChatDrawer
      isOpen={isOpen}
      onClose={onClose}
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
      handleResetChat={handleResetChat}
      messages={messages}
      isStreaming={!!isStreaming}
      input={input}
      setInput={memoizedSetInput}
      handleSendMessage={({messages, codeSpace, prompt, images}: {messages: Message[], codeSpace: string, prompt: string, images: ImageData[]}) => handleSendMessage({ messages,  codeSpace, prompt, images })}
      inputRef={inputRef}
      isScreenshotLoading={isScreenshotLoading}
      screenshotImage={screenshotImage}
      handleScreenshotClick={handleScreenshotClick}
      handleCancelScreenshot={handleCancelScreenshot}
      editingMessageId={editingMessageId}
      editInput={editInput}
      setEditInput={memoizedSetEditInput}
      handleEditMessage={memoizedHandleEditMessage}
      handleCancelEdit={handleCancelEdit}
      handleSaveEdit={handleSaveEdit}
      codeSpace={codeSpace}
      screenShot={memoizedScreenShot}
    />
  );
});