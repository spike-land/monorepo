import { importMap, importMapReplace } from "@/lib/importmap-utils.ts";
export type {
  ImageData,
  IRenderApp,
  LanguageMap,
  Message,
  MessageContent,
  MessagePart,
  RenderedApp,
} from "@/lib/interfaces.ts";
import HTML from "./index.html";

export { HTML };
export { serveWithCache } from "@/lib/serve-with-cache.ts";

export { md5 } from "@/lib/md5.ts";
export { routes } from "@/lib/routes.ts";

import type { Delta } from "./textDiff";
export { importMapReplace };

export { serverFetchUrl } from "@/lib/enhanced-fetch";

import type { ICodeSession } from "@/lib/interfaces";
import type { CodePatch } from "@/lib/make-sess.ts";
import {
  applySessionPatch,
  computeSessionHash,
  generateSessionPatch,
  sanitizeSession,
  sessionToJSON,
} from "@/lib/make-sess.ts";

export { importMap };

export { computeSessionHash, generateSessionPatch, sessionToJSON };
export type { CodePatch, Delta, ICodeSession };
export { applySessionPatch, sanitizeSession };
