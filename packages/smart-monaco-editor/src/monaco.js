import { version } from "monaco-editor/package.json";

const exp = {
  monaco: null,
};

export const getMonaco = async () => {
  if (exp.monaco) return exp.monaco;
  const importScript = (src, res = []) => {
    if (typeof window === "undefined") return {};
    return (document.head.querySelector(`script[src="${src}"]`) &&
      window) ||
      new Promise(function (resolve, reject) {
        const s = document.createElement("script");
        s.src = src;
        s.async = "async";
        s.type = "application/javascript";
        s.onload = () => {
          if (res.length === 0) {
            resolve(window);
          }
          const ret = {};
          res.forEach((x) => Object.assign(ret, window[x]));
          resolve(ret);
        };

        s.onerror = reject;
        document.head.appendChild(s);
      });
  };

  const vsPath = `https://unpkg.com/monaco-editor@${version}/min/vs`;

  const { require } = await importScript(
    `${vsPath}/loader.js`,
  );

  require.config({ paths: { "vs": vsPath }, "vs/css": { disabled: true } });

  exp.monaco = await new Promise((resolve) =>
    require(["vs/editor/editor.main"], (_m) => resolve(_m))
  );

  return exp.monaco;
};
