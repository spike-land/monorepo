/** @jsx jsx */
import { CacheProvider, jsx } from "@emotion/react";
//@ts-ignore
import { createCache } from "@emotion/react";

//@ts-ignore
import { renderToString } from "react";

export const getHtmlAndCss = (MyComponent: () => JSX.Element) => {
  const key = "css";
  const cache = createCache({ key });
  let cssText = "";
  cache.sheet.insert = (rule) => {
    cssText += rule;
  };

  const markup = renderToString(
    <div>
      <CacheProvider value={cache}>
        <div>
          <MyComponent />
        </div>
      </CacheProvider>
    </div>,
  );

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="UTF-8">
        <style>${cssText}</style>
    </head>
    <body>
        <div>${markup}</div>
    </body>
  </html>
`;

  return {
    html: markup,
    css: cssText,
  };
};
