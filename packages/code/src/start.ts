import { useCodeSpace } from "./hooks/useCodeSpace";

if (location.pathname.endsWith("iframe") === false) {
  setTimeout(() => {
    import("./hydrate");
  }, 0);
}

const codeSpace = useCodeSpace();

if (location.pathname !== `/live/${codeSpace}` && location.pathname.endsWith("dehydrated") === false) {
  setTimeout(() => {
    (async () => {
      const rootElement = document.getElementById("root")! as HTMLDivElement;
      const { renderApp } = await import("./Wrapper");
      renderApp({ codeSpace, rootElement });
    })();
  }, 0);
}
