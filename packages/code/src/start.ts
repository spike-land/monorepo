import { routes } from "./routes";

if (location.pathname.endsWith("iframe") === false) import("./hydrate");

const paths = location.pathname.split("/").slice(1);

const redirect = Object.hasOwn(routes, location.pathname)
  ? routes[location.pathname as unknown as keyof typeof routes]
  : null;
const codeSpace = redirect || paths[1];

if (redirect || paths.length > 2 && paths[0] == "live" && !paths.includes("dehydrated")) {
  const rootElement = document.getElementById("root")! as HTMLDivElement;
  const { renderApp } = await import("./Wrapper");
  renderApp({ codeSpace, rootElement });
}
