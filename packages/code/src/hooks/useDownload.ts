import { stat, readFile } from "../memfs";

export const useDownload = (codeSpace: string) => {
  return async () => {
    const indexMjs = await stat(`/live/${codeSpace}/index.mjs`)
      ? btoa(await readFile(`/live/${codeSpace}/index.mjs`))
      : btoa(await (await fetch(`${location.origin}/live/${codeSpace}/index.mjs`)).text());

    const content = `
      <!DOCTYPE html>
      <html lang="en">
      <head profile="http://www.w3.org/2005/10/profile">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="manifest" href="/manifest.json" crossorigin="use-credentials">
        <meta name="sharedArrayBuffer" description="using cross-origin-isolation in the web browser">
        <base href="/">
        <link rel="shortcut icon" type="image/png" href="/assets/favicons/chunk-chunk-fe2f7da4f9ccc2.png">
        <title>Instant React Editor</title>
       
        <style>
          html,
          body {
            overflow: hidden;
            margin: 0;
            height: 100%;
            --webkit-overflow-scrolling: touch;
            overscroll-behavior-x: none;
          }
      
          q {
            display: none;
          }
      
      
          @media screen and (prefers-color-scheme: dark) {
            body {
              background-color: #121212;
              ;
              color: hsl(210, 10%, 62%);
              --text-color-normal: hsl(210, 10%, 62%);
              --text-color-light: hsl(210, 15%, 35%);
              --text-color-richer: hsl(210, 50%, 72%);
              --text-color-highlight: hsl(25, 70%, 45%);
            }
          }
      
      
          @media screen and (prefers-color-scheme: light) {
            body {
              background-color: white;
              color: black;
              --text-color-normal: #0a244d;
              --text-color-light: #8cabd9;
            }
          }
      
          /**reset*/
        </style>
          <!-- <script async src="/workerScripts/superFetch.js"></script> -->
      </head>
      <body>
        <div id="root"></div>
        <script type="module">
      
        const mod = atob('${indexMjs}');
      
          const blobUrl = createJsBlob(mod);
          const {renderApp} = (await import(blobUrl));
          renderApp();
      
        function createJsBlob(code){
        return URL.createObjectURL(
          new Blob([code], {
            type: "application/javascript",
          }),
        );
      }
        </script>
      
        <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "cc7e2ceaa75d4111b26b0ec989795375"}'></script><!-- End Cloudflare Web Analytics -->
      </body>
      </html>
    `;

    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hello_world.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
};
