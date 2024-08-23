import { CodeBlock } from "@/external/CodeBlock";
import Markdown from "@/external/Markdown";
import { css } from "@emotion/react";
import { md5 } from "@src/md5";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { DiffEditor } from "../components/DiffEditor";
import { extractDiffContent, isDiffContent } from "./diffUtils";

// Types
export interface LanguageMap {
  [key: string]: string | undefined;
}

// Constants
export const programmingLanguages: LanguageMap = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css",
};

// Utility Functions
export const cleanMessageText = (text: string, isUser: boolean): string => {
  if (isUser) {
    return text
      .split("The user's first message follows:")
      .pop()!
      .trim()
      .split("Reminder from the system:")[0]
      .trim();
  }
  return text
    .replace(/<antArtifact.*?>/g, "**```")
    .replace(/<\/antArtifact>/g, "```**");
};

export const getLanguage = (lang?: string): string => {
  if (!lang) return "plaintext";
  const lowercaseLang = lang.toLowerCase();

  // Special handling for specific languages
  if (lowercaseLang === "typescript" || lowercaseLang === "ts") return "typescript";
  if (lowercaseLang === "javascript" || lowercaseLang === "js") return "javascript";
  if (lowercaseLang === "python" || lowercaseLang === "py") return "python";

  return programmingLanguages[lowercaseLang] || lowercaseLang;
};

export const parseMessageParts = (text: string) => {
  const codeBlockRegex = /```(\w+)?\s*([\s\S]*?)```/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        content: text.slice(lastIndex, match.index),
      });
    }

    const language = getLanguage(match[1]);
    const code = match[2].trim();

    parts.push({
      type: "code",
      language,
      content: code,
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    const lastPart = text.slice(lastIndex);
    const lastOpenBlockMatch = lastPart.match(/```(\w+)?\s*([\s\S]*)/);
    if (lastOpenBlockMatch && lastOpenBlockMatch.index) {
      if (lastOpenBlockMatch.index > 0) {
        parts.push({
          type: "text",
          content: lastPart.slice(0, lastOpenBlockMatch.index),
        });
      }
      parts.push({
        type: "code",
        language: getLanguage(lastOpenBlockMatch[1]),
        content: lastOpenBlockMatch[2].trim(),
        isStreaming: true,
      });
    } else {
      parts.push({
        type: "text",
        content: lastPart,
      });
    }
  }

  // Merge adjacent text parts
  const mergedParts = [];
  for (const part of parts) {
    if (mergedParts.length > 0 && mergedParts[mergedParts.length - 1].type === "text" && part.type === "text") {
      mergedParts[mergedParts.length - 1].content += part.content;
    } else {
      mergedParts.push(part);
    }
  }

  return mergedParts;
};

export const getParts = (text: string, isUser: boolean) => {
  const countSearch = (text.match(/<<<<<<< SEARCH/g) || []).length;
  const countEqual = (text.match(/=======/g) || []).length;
  const countReplace = (text.match(/>>>>>>> REPLACE/g) || []).length;

  if (countSearch > 0 || countEqual > 0 || countReplace > 0) {
    let extendedText = text;
    if (countSearch !== countEqual) {
      extendedText += "=======\n";
    }
    if (countEqual !== countReplace) {
      extendedText += ">>>>>>> REPLACE\n";
    }
    extendedText = extendedText.split("<<<<<<< SEARCH").join("```diff\n<<<<<<< SEARCH");
    extendedText = extendedText.split(">>>>>>> REPLACE").join(">>>>>>> REPLACE\n```");
    text = extendedText;
  }

  const cleanedText = cleanMessageText(text, isUser);
  const parts = parseMessageParts(cleanedText);
  return parts;
};

// Components
interface TypingIndicatorProps {
  isDarkMode: boolean;
}

const AnimatedDot: React.FC<{ delay: number; isDarkMode: boolean }> = ({ delay, isDarkMode }) => (
  <motion.div
    className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-gray-400" : "bg-gray-800"}`}
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

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isDarkMode }) => (
  <div className="flex space-x-2 items-center p-2">
    <span className="text-sm text-gray-500">AI is typing</span>
    <TypingDots isDarkMode={isDarkMode} />
  </div>
);

interface ColorModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ColorModeToggle: React.FC<ColorModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className={`p-2 rounded-full backdrop-blur-sm ${
      isDarkMode
        ? "bg-gray-800/30 text-yellow-400"
        : "bg-yellow-100/30 text-gray-800"
    } hover:bg-opacity-50 transition-all duration-300`}
  >
    {isDarkMode ? "🌙" : "☀️"}
  </button>
);

interface CodeRendererProps {
  value: string;
  language: string;
  type: string;
}

export const CodeRenderer: React.FC<CodeRendererProps> = ({ value, language, type }) => {
  const key = md5(value + language);

  if (type === "text") {
    return (
      <Suspense fallback={<pre>{value}</pre>}>
        <Markdown
          css={css`
            margin-top: 12px;
            margin-bottom: 12px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 0.01em;
          `}
        >
          {value}
        </Markdown>
      </Suspense>
    );
  }

  if (isDiffContent(value)) {
    const { original, modified } = extractDiffContent(value);
    return (
      <Suspense fallback={<pre>{value}</pre>}>
        <DiffEditor key={key} original={original} modified={modified} language={language} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<pre>{value}</pre>}>
      <CodeBlock key={key} value={value} language={language} />
    </Suspense>
  );
};

interface MessageRendererProps {
  text: string;
  isUser: boolean;
}

export const MessageRenderer: React.FC<MessageRendererProps> = ({ text, isUser }) => (
  <>
    {getParts(text, isUser).map((part, index) => (
      <CodeRenderer key={index} value={part.content} language={part.language || "typescript"} type={part.type} />
    ))}
  </>
);

// Mock Data
export const mockResponses: string[] = [
  "Here's an example code block:\n```tsx\nconst greeting = 'Hello, World!';\nconsole.log(greeting);\n```",
  "Let me explain this function:\n```tsx\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n```",
  "Here's how you can create a React component:\n```tsx\nconst MyComponent: React.FC = () => {\n  return <div>Hello, React!</div>;\n};\n```",
];

export const renderMessage = (text: string, isUser: boolean): JSX.Element =>
  getParts(text, isUser).map((part) => renderCode(part.content, part.language || "typescript", part.type));
