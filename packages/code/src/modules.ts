import { importMap } from "./importMap";
import { importMapReplace } from "./importMapReplace";
import { md5 } from "./md5";

import { Delta } from "./textDiff";
import MyHTML from "./index.html";
import { resetCSS} from "./getResetCss";

import { applyCodePatch, CodePatch, ICodeSession, makeSession, makeHash, string_ } from "./makeSess";

export { resetCSS };

export { makeHash, string_ };
export type { ICodeSession , Delta, CodePatch }
export { applyCodePatch,  makeSession  }
const HTML:string = MyHTML as unknown as string;
export { HTML };

export { importMapReplace };
export { md5 };
export { importMap };
