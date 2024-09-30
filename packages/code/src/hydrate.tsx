const setupServiceWorker = async () => {
  console.log("Setting up service worker...");
  
  // if (!navigator.serviceWorker || navigator.serviceWorker.controller===null || (navigator.serviceWorker.controller?.state  === "redundant")) {
    const { Workbox } = await import( "workbox-window");
    console.log("Workbox imported");

    const wb = new Workbox("/sw.js");
    console.log("Workbox instance created");

    const sw = await wb.active;
    console.log("Active service worker:", sw);

    if (!sw) {
      console.log("No active service worker, registering new one");
      return wb.register();
    }

    if (sw.state === "redundant") {
      console.log("Service worker is redundant, updating");
      return wb.update();
    }

    if (sw.state === "activated") {
      console.log("Service worker is already activated");
      return;
    }
  
    console.log("Service worker setup completed");
  }
// };

Object.assign(globalThis, { setupServiceWorker });

const createLangChainWorkflow = async (prompt: string) => {
  console.log("Creating LangChain workflow with prompt:", prompt);
  try {
    const { createWorkflow } = await import("@/lib/shared");
    const workflow = await createWorkflow(prompt);
    console.log("LangChain workflow created successfully");
    return workflow;
  } catch (error) {
    console.error("Error creating LangChain workflow:", error);
    throw error;
  }
};

export const initializeApp = async () => {
  console.log("Initializing app...");
  try {
    const [
      { enhancedFetch },
      { useArchive, useSpeedy },
    ] = await Promise.all([
      import("./enhancedFetch"),
      import("./hooks/useArchive"),
    ]);
    console.log("Modules imported successfully");

    Object.assign(globalThis, { createWorkflow: createLangChainWorkflow });
    Object.assign(globalThis, {
      enhancedFetch,
      useArchive,
      useSpeedy,
    });
    console.log("Global objects assigned");

    await setupServiceWorker();
    console.log("App initialization completed");

  } catch (error) {
    console.error("Error initializing app:", error);
  }
};
