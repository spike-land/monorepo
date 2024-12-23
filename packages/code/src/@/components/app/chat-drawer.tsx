import React, { useCallback, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MessageInput } from "@/components/app/message-input";
import { Bot } from "@/external/lucideReact";
import type { ChatDrawerProps } from "@/lib/interfaces";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatContainer from "@/components/app/chat-container";
import { ChatHeader } from "@/components/app/chat-header";
import { cn } from "@/lib/utils";
import { Drawer } from "vaul";

const MemoizedChatHeader = React.memo(ChatHeader);
const MemoizedChatContainer = React.memo(ChatContainer);
const MemoizedMessageInput = React.memo(MessageInput);

export const ChatDrawer: React.FC<ChatDrawerProps & { codeSpace: string }> =
  React.memo(({
    isOpen,
    onClose,
    isDarkMode,
    toggleDarkMode,
    handleResetChat,
    messages,
    isStreaming,
    code,
    input,
    setInput,
    handleSendMessage,
    inputRef,
    isScreenshotLoading,
    screenshotImage,
    handleScreenshotClick,
    handleCancelScreenshot,
    editingMessageId,
    editInput,
    setEditInput,
    handleEditMessage,
    handleCancelEdit,
    handleSaveEdit,
    codeSpace,
    screenShot,
  }) => {
    const handleButtonClick = useCallback(() => {
      onClose();
    }, [onClose]);

    const buttonClassName = useMemo(() =>
      cn(
        "fixed bottom-4 right-4 rounded-full w-12 h-12 p-0 z-[1001]",
        isOpen ? "hidden" : "flex",
      ), [isOpen]);

    const lastMessage = messages[messages.length - 1];

    useEffect(() => {
      if (lastMessage) {
        const lastMessageElement = document.getElementById(
          "after-last-message",
        );
        if (lastMessageElement) {
          lastMessageElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [lastMessage && lastMessage.content]);

    return (
      <Drawer.Root direction="right" open={isOpen} modal={false}>
        <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
          <Button
            onClick={handleButtonClick}
            className={buttonClassName}
          >
            <Bot className="h-6 w-6" />
          </Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content
            className={cn(
              "fixed inset-y-0 right-0 z-10 outline-none flex",
              "w-full sm:w-[400px] md:w-[512px]",
              isDarkMode
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-800",
            )}
            style={{
              "--initial-transform": "translateX(100%)",
            } as React.CSSProperties}
          >
            <div className="flex flex-col h-full w-full">
              <MemoizedChatHeader
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                handleResetChat={handleResetChat}
                onClose={onClose}
              />
              <ScrollArea className="flex-grow">
                <MemoizedChatContainer
                  messages={messages}
                  editingMessageId={editingMessageId}
                  editInput={editInput}
                  setEditInput={setEditInput}
                  handleCancelEdit={handleCancelEdit}
                  handleSaveEdit={handleSaveEdit}
                  handleEditMessage={handleEditMessage}
                  isStreaming={isStreaming}
                  onNewPrompt={(prompt: string)=>handleSendMessage({
                    messages,
                    codeSpace,
                    prompt,
                    images: [],
                    code
                  })}
                  isDarkMode={isDarkMode}
                  codeSpace={codeSpace}
                />
                <div id="after-last-message" />
              </ScrollArea>
              <MemoizedMessageInput
                input={input}
                code={code}
                messages={messages}
                setInput={setInput}
                screenShot={screenShot}
                handleSendMessage={handleSendMessage}
                isStreaming={isStreaming}
                inputRef={inputRef}
                isScreenshotLoading={isScreenshotLoading}
                screenshotImage={screenshotImage}
                handleScreenshotClick={handleScreenshotClick}
                handleCancelScreenshot={handleCancelScreenshot}
                isDarkMode={isDarkMode}
              />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  });

ChatDrawer.displayName = "ChatDrawer";

export default ChatDrawer;
