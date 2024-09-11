import { cn } from "@/lib/utils";
import { CodeBlock } from "@/external/CodeBlock";
import Markdown from "@/external/Markdown";
import { md5 } from "@/lib/md5";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { DiffEditor } from "@/components/app/diff-editor";
import { extractDiffContent, isDiffContent } from "@/lib/diff-utils";
import { getParts } from "@/lib/get-parts";

// Components
interface TypingIndicatorProps {
  isDarkMode: boolean;
}

const AnimatedDot: React.FC<{ delay: number; isDarkMode: boolean }> = ({ delay, isDarkMode }) => (
  <motion.div
    className={cn(
      "w-2 h-2 rounded-full",
      isDarkMode ? "bg-gray-400" : "bg-gray-800"
    )}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      delay,
    }}
  />
);

const TypingDots: React.FC<TypingIndicatorProps> = ({ isDarkMode }) => (
  <div className="flex space-x-1">
    {[0, 1, 2].map((dot) => <AnimatedDot key={dot} delay={dot * 0.2} isDarkMode={isDarkMode} />)}
  </div>
);

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isDarkMode }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("typing");
      document.getElementById("typing-indicator")?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="typing-indicator" className="flex space-x-2 items-center p-2">
      <span className="text-sm text-gray-500">AI is typing</span>
      <TypingDots isDarkMode={isDarkMode} />
    </div>
  );
};

interface ColorModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ColorModeToggle: React.FC<ColorModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className={cn(
      "p-2 rounded-full backdrop-blur-sm hover:bg-opacity-50 transition-all duration-300",
      isDarkMode
        ? "bg-gray-800/30 text-yellow-400"
        : "bg-yellow-100/30 text-gray-800"
    )}
  >
    {isDarkMode ? "🌙" : "☀️"}
  </button>
);

interface CodeRendererProps {
  value: string;
  language: string;
  type: string;
  codeSpace: string;
}

export const CodeRenderer: React.FC<CodeRendererProps> = ({ value, codeSpace, language, type }) => {
  const key = md5(value + language);

  if (value.trim().length < 20) {
    return <pre>{value.trim()}</pre>;
  }

  if (type === "text") {
    return (
      <Markdown
        className="mt-3 mb-3 font-sans text-sm leading-normal tracking-wide"
      >
        {value}
      </Markdown>
    );
  }

  if (isDiffContent(value)) {
    const { original, modified } = extractDiffContent(value);
    return <DiffEditor key={key} original={original} modified={modified} language={language} />;
  }

  return <CodeBlock key={key} value={value} language={language} />;
};

interface MessageRendererProps {
  text: string;
  isUser: boolean;
  codeSpace: string;
}

// Mock Data
export const mockResponses: string[] = [
  "Here's an example code block:\n```tsx\nconst greeting = 'Hello, World!';\nconsole.log(greeting);\n```",
  "Let me explain this function:\n```tsx\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n```",
  "Here's how you can create a React component:\n```tsx\nconst MyComponent: React.FC = () => {\n  return <div>Hello, React!</div>;\n};\n```",
];

export const MessageRenderer: React.FC<MessageRendererProps> = ({ text, codeSpace, isUser }) => (
  <>
    {getParts(text, isUser).map((part, index) => (
      <CodeRenderer codeSpace={codeSpace} key={index} value={part.content} language={part.language || "typescript"} type={part.type} />
    ))}
  </>
);