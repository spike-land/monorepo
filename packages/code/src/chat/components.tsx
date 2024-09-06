import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Send, X } from "@/external/lucideReact";
import React from "react";
import { MessageInputProps } from "./types";
import { ImageData } from "@/lib/interfaces";

export const MessageInput: React.FC<MessageInputProps> = ({
  input,
  setInput,
  handleSendMessage,
  isStreaming,
  inputRef,
  isScreenshotLoading,
  screenshotImage,
  handleScreenshotClick,
  handleCancelScreenshot,
  isDarkMode,
}) => {
  const handleSend = () => {
    const images: ImageData[] = screenshotImage
      ? [
          {
            imageName: "screenshot.png",
            url: screenshotImage,
            src: screenshotImage,
            mediaType: "image/png",
            data: screenshotImage,
            type: "image/png",
          },
        ]
      : [];
    handleSendMessage(input, images);
    setInput(""); // Clear input after sending
    handleCancelScreenshot(); // Clear screenshot after sending
  };

  if (isStreaming) {
    return null; // Hide input when AI is typing
  }

  return (
    <div className={`p-2 mt-auto ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="flex flex-col space-y-2">
        {screenshotImage && (
          <div className="relative">
            <img src={screenshotImage} alt="Screenshot Preview" className="max-w-full h-auto rounded-lg" />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-2 right-2"
              onClick={handleCancelScreenshot}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="flex items-end space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type a message..."
            className={`flex-1 min-h-[40px] max-h-[120px] resize-none ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
            }`}
            ref={inputRef}
          />
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleScreenshotClick}
              variant={screenshotImage ? "secondary" : "outline"}
              size="icon"
              title={screenshotImage ? "Remove screenshot" : "Attach screenshot"}
              disabled={isScreenshotLoading}
              className={`transition-all duration-300 ${
                isScreenshotLoading ? "animate-pulse" : ""
              } bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600`}
            >
              {isScreenshotLoading
                ? <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary"></div>
                : <Camera className="h-4 w-4" />}
            </Button>
            <Button
              onClick={handleSend}
              disabled={input.trim() === "" && !screenshotImage}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export other components (ChatHeader, ChatContainer, ChatWindow) here if they are used in other files
