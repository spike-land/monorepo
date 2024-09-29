import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

Object.assign(globalThis, {
  __dirname: "/",

  process: {
    cwd: () => "/",
    emitWarning: () => {},
    env: { NODE_ENV: "development" },
    platform: "browser",
  },
});

async function generateCSS(classNames: string[]) {
  const cssString = classNames.map((cls) => `.${cls} { @apply ${cls}; }`).join("\n");

  const result = postcss([
    tailwindcss(),
    autoprefixer(),
  ]);

  return await result.process(cssString).then((result) => result.css);
}

Object.assign(globalThis, { generateCSS });
