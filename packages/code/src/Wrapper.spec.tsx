import { Wrapper } from "@/components/app/wrapper";
import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./shared", () => ({
  transpile: vi.fn().mockResolvedValue("mocked transpiled code"),
}));

vi.mock("@external/responsive", () => ({
  ParentSize: ({ children }: { children: (props: any) => React.ReactNode }) => children({ width: 100, height: 100 }),
}));

// Mock the useTranspile hook
vi.mock("./Wrapper", async () => {
  const actualModule = await vi.importActual<typeof import("@/components/app/wrapper")>("@/components/app/wrapper");
  return {
    ...actualModule,
    useTranspile: vi.fn().mockImplementation((code: string | undefined) => {
      if (code === undefined) return null;
      return Promise.resolve("mocked transpiled code");
    }),
  };
});

describe("Wrapper", () => {
  let container: HTMLElement;
  URL.createObjectURL = vi.fn();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    vi.clearAllMocks();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it("renders without crashing", async () => {
    await act(async () => {
      render(<Wrapper code="test code" />, { container });
    });

    await waitFor(() => {
      expect(screen.getByTestId("wrapper-container")).toBeInTheDocument();
    }, { timeout: 10000 });
  }, 15000);

  it("renders iframe when codeSpace is provided", async () => {
    await act(async () => {
      render(<Wrapper codeSpace="test-space" />, { container });
    });

    await waitFor(() => {
      const iframe = screen.getByTitle("Code Space Iframe");
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute("src", "/live/test-space/embed");
    }, { timeout: 10000 });
  }, 15000);

  it("applies correct scale to iframe", async () => {
    const scale = 2;
    await act(async () => {
      render(<Wrapper codeSpace="test-space" scale={scale} />, { container });
    });

    await waitFor(() => {
      const iframe = screen.getByTitle("Code Space Iframe");
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveStyle(`transform: scale(${1 / scale})`);
      expect(iframe).toHaveStyle(`transform-origin: 0 0`);
    }, { timeout: 10000 });
  }, 15000);
});
