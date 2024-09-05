import { useSyncedStorage } from "@/hooks/use-synced-storage";
import { act, renderHook } from "@testing-library/react-hooks";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

// Mock IndexedDB
const indexedDBMock = (() => {
  let db: { [key: string]: any } = {};
  return {
    open: vi.fn(() => ({
      result: {
        transaction: vi.fn(() => ({
          objectStore: vi.fn(() => ({
            get: vi.fn((key: string) => ({
              result: db[key],
              onsuccess: null,
            })),
            put: vi.fn((value: any) => {
              db[value.key] = value.value;
              return { onsuccess: null };
            }),
          })),
        })),
      },
      onsuccess: null,
      onupgradeneeded: null,
    })),
  };
})();

// Mock BroadcastChannel
class BroadcastChannelMock {
  static channels: { [name: string]: BroadcastChannelMock } = {};
  listeners: ((event: MessageEvent) => void)[] = [];

  constructor(public name: string) {
    BroadcastChannelMock.channels[name] = this;
  }

  postMessage(message: any) {
    Object.values(BroadcastChannelMock.channels).forEach((channel) => {
      if (channel !== this) {
        channel.listeners.forEach((listener) => {
          listener({ data: message } as MessageEvent);
        });
      }
    });
  }

  addEventListener(_type: string, listener: (event: MessageEvent) => void) {
    this.listeners.push(listener);
  }

  removeEventListener(_type: string, listener: (event: MessageEvent) => void) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  close() {
    delete BroadcastChannelMock.channels[this.name];
  }
}

describe("useSyncedStorage", () => {
  const originalLocalStorage = window.localStorage;
  const originalIndexedDB = window.indexedDB;
  const originalBroadcastChannel = globalThis.BroadcastChannel;
  const originalConsoleError = console.error;

  beforeEach(() => {
    vi.resetAllMocks();
    Object.defineProperty(window, "localStorage", { value: localStorageMock, writable: true });
    (globalThis as any).indexedDB = indexedDBMock;
    (globalThis as any).BroadcastChannel = BroadcastChannelMock;
    localStorageMock.clear();
    BroadcastChannelMock.channels = {};
    // Suppress React 18 warning
    console.error = vi.fn((...args) => {
      if (typeof args[0] === "string" && args[0].includes("ReactDOM.render is no longer supported")) {
        return;
      }
      originalConsoleError.call(console, ...args);
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "localStorage", { value: originalLocalStorage, writable: true });
    (globalThis as any).indexedDB = originalIndexedDB;
    (globalThis as any).BroadcastChannel = originalBroadcastChannel;
    console.error = originalConsoleError;
  });

  it("should use the initial value when storage is empty", async () => {
    const { result } = renderHook(() => useSyncedStorage("testKey", "initialValue"));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current[0]).toBe("initialValue");
  });

  it("should update the value and localStorage when setValue is called", async () => {
    const { result } = renderHook(() => useSyncedStorage("testKey", "initialValue"));

    await act(async () => {
      await result.current[1]("newValue");
    });

    expect(result.current[0]).toBe("newValue");
    expect(localStorageMock.setItem).toHaveBeenCalledWith("testKey", JSON.stringify("newValue"));
  });

  it("should retrieve the value from localStorage if it exists", async () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify("storedValue"));

    const { result, waitForNextUpdate } = renderHook(() => useSyncedStorage("testKey", "initialValue"));

    await waitForNextUpdate();

    expect(result.current[0]).toBe("storedValue");
  });

  it("should handle function-based state updates correctly", async () => {
    const { result } = renderHook(() => useSyncedStorage("testKey", 1));

    await act(async () => {
      await result.current[1]((prevValue) => (prevValue !== null ? prevValue + 1 : 1));
    });

    expect(result.current[0]).toBe(2);

    await act(async () => {
      await result.current[1]((prevValue) => (prevValue !== null ? prevValue + 1 : 1));
    });

    expect(result.current[0]).toBe(3);
  });

  it("should handle errors when reading from storage", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error("Storage error");
    });

    const { result } = renderHook(() => useSyncedStorage("testKey", "initialValue"));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current[0]).toBe("initialValue");
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error reading from storage for key 'testKey':", expect.any(Error));

    consoleErrorSpy.mockRestore();
  });

  it("should handle errors when setting a value in storage", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    localStorageMock.setItem.mockImplementation(() => {
      throw new Error("Storage error");
    });

    const { result } = renderHook(() => useSyncedStorage("testKey", "initialValue"));

    await act(async () => {
      await result.current[1]("newValue");
    });

    expect(result.current[0]).toBe("newValue"); // The local state should still update
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error writing to storage for key 'testKey':", expect.any(Error));

    consoleErrorSpy.mockRestore();
  });
});
