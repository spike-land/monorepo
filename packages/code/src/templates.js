/**
 * @param {{html: string, css: string}} code
 */

export const getHtml = ({ html, css }) => {
  //
  // For some reason, pre-rendering doesn't care about global styles, the site flickers without this patch
  //
  // let bodyStylesFix = "";

  // const start = js.indexOf("body{");
  // if (start !== -1) {
  //   const firstBit = js.slice(start);
  //   const last = firstBit.indexOf("}");
  //   bodyStylesFix = firstBit.slice(0, last + 1);
  // }

  const titleStart = html.indexOf("<title>");
  const titleEnd = html.indexOf("</title>");
  const hasTitle = titleStart < titleEnd && titleStart >= -1;
  const title = hasTitle
    ? html.slice(titleStart, titleEnd)
    : "(code).zed.vision :)";

  return `<!DOCTYPE html>
<html lang="en">
<head profile="http://www.w3.org/2005/10/profile">
<title>${title}</title>
<link rel="preload" href="./app.js" type="application/javascript" as="script" crossorigin>
<link rel="icon" type="image/png" href="https://zed.vision/zed-icon-big.png" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="Description" content="Generated with zed.vision">
<style>
    ${css}
</style>
</head>
<body>
<div id="zbody">
  ${html}
</div>
<script type="module">
import App from "./app.js"
import {render} from "./app.js"



render(App(), document.body.children[0]);
</script>
</body>
</html>
`;
};

export const getEditorHTML = () =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <link rel="icon" type="image/png" href="https://blog.zed.vision/zed-icon-big.png" />
<title>Instant React Editor</title>
</head>
<body>
  <script type="module">
    import {edit} from "${location.href}src/data.js"
    try{
      edit("${location.pathname.slice(42, 52)}");
    }catch(error){
      fetch("https://zed.vision/error", {method: "POST",  body: JSON.stringify({error})})
    }
  </script>
</body>
</html>`;
