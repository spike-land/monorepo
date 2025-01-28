import { Wrapper } from "@/components/app/wrapper";
import { ICode, ICodeSession } from "@/lib/interfaces";
import { routes } from "@/lib/routes";
import { ClerkProvider } from "@clerk/clerk-react";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  type RegisteredRouter,
  RouterProvider,
} from "@tanstack/react-router";
import * as React from "react";
import { AppToRender } from "../AppToRender";
import { getCodeSpace } from "../hooks/use-code-space";
import { Code } from "../services/CodeSession";
import { CodeSessionBC } from "../services/CodeSessionBc";
// Define route types
interface RouteParams {
  codeSpace: string;
}

type SearchParams = Record<string, string>;

// Root layout component
const RootLayout: React.FC = () => {
  return <Outlet />;
};

// Define root route
export const rootRoute = createRootRoute({
  component: RootLayout,
});

const dynamicRoutes = [];

Object.keys(routes).forEach((path) => {
  // Landing page route
  const landingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: () => <Wrapper codeSpace={routes[path as keyof typeof routes]} />,
  });

  dynamicRoutes.push(landingRoute);
});

const App: React.FC = () => {
  const [cSess, setState] = React.useState<ICode | null>(null);
  const codeSpace = getCodeSpace(location.pathname);

  React.useEffect(() => {
    if (codeSpace) {
      const cSess = new Code(codeSpace);
      fetch(`/live/${codeSpace}/session.json`).then((res) => res.json<ICodeSession>()).then((
        session,
      ) => cSess.init(session)).then(() => setState(cSess));
      import("@/lib/hydrate").then(({ initializeApp }) => initializeApp());
    }
  }, []);

  React.useEffect(() => {
    let unSub: () => void = () => {};

    if (cSess) {
      (async () => {
        Object.assign(globalThis, { cSess });
        const cSessBr = new CodeSessionBC(codeSpace);
        cSessBr.init(cSess.session);

        unSub = cSessBr.sub((sess) => setState({ ...cSess, session: sess }));

        const { initializeApp } = await import("@/lib/hydrate");
        await initializeApp();
      })();
    }
    return () => unSub();
  }, [cSess]);

  return cSess
    ? (
      <ClerkProvider
        publishableKey="pk_live_Y2xlcmsuc3Bpa2UubGFuZCQ"
        afterSignOutUrl="/"
      >
        <AppToRender codeSpace={codeSpace} cSess={cSess} />
      </ClerkProvider>
    )
    : <Wrapper codeSpace={codeSpace} />;
};

// Live page route with code space parameter
const liveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/live/$codeSpace",
  parseParams: (params): RouteParams => ({
    codeSpace: params.codeSpace || "",
  }),
  stringifyParams: (params: RouteParams) => ({
    codeSpace: params.codeSpace,
  }),
  loader: async ({ params: { codeSpace } }) => ({
    codeSpace: getCodeSpace(`/live/${codeSpace}`),
  }),
  component: () => <App />,
});
dynamicRoutes.push(liveRoute);

const routeTree = rootRoute.addChildren([...dynamicRoutes]);

// Create and configure the router instance
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: React.createContext<
    {
      params: RouteParams;
      search: SearchParams;
    } | null
  >(null),
});

// Export types
export interface RouterState {
  resolvedLocation: {
    pathname: string;
    params: RouteParams;
  };
}

export type AppRouter = typeof router;

// Re-export RouterProvider
export { RouterProvider };

// Export RouterComponent with proper types
interface RouterComponentProps {
  router: RegisteredRouter;
}

export const RouterComponent: React.FC<RouterComponentProps> = ({ router }) => {
  return <RouterProvider router={router} />;
};

// Export wrapped App Router component
export const AppRouter: React.FC = () => {
  return <RouterComponent router={router} />;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: AppRouter;
  }
}
