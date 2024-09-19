import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { cSessMock } from "@src/config/cSessMock";
import type * as Monaco from "monaco-editor";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CodeHistoryCarousel } from "./AutoSaveHistory";

// Mock the useVirtualizer hook
vi.mock("@tanstack/react-virtual", () => ({
  useVirtualizer: vi.fn().mockReturnValue({
    getVirtualItems: () => [
      { index: 0, key: "0", size: 150, start: 0 },
      { index: 1, key: "1", size: 150, start: 150 },
    ],
    getTotalSize: () => 300,
  }),
}));

// Mock the useCodeSpace hook
vi.mock("@src/hooks/useCodeSpace", () => ({
  useCodeSpace: () => "test-code-space",
}));

describe("CodeHistoryCarousel", () => {
  (globalThis as unknown as { monaco: typeof Monaco }).monaco = {
    editor: {
      createDiffEditor: vi.fn().mockReturnValue({
        setModel: vi.fn(),
        dispose: vi.fn(),
      }),
      createModel: vi.fn(),
    },
  } as unknown as typeof Monaco;

  // Mock the fetch function
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { timestamp: 1625097600000, code: "console.log(\"Version 1\");" },
          { timestamp: 1625184000000, code: "console.log(\"Version 2\");" },
        ]),
    })
  ) as unknown as typeof fetch;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockOnRestore = vi.fn();
  const mockOnClose = vi.fn();

  it("renders history items and handles restore", async () => {
    render(
      <CodeHistoryCarousel
        codeSpace="test"
        cSess={cSessMock}
        onRestore={mockOnRestore}
        onClose={mockOnClose}
      />,
    );

    // Wait for the history items to be rendered
    await waitFor(() => {
      expect(screen.getByText("Version 2")).toBeInTheDocument();
      expect(screen.getByText("Version 1")).toBeInTheDocument();
    }, { timeout: 5000 });

    // Find and click the first "Restore" button
    const restoreButtons = screen.getAllByText("Restore");
    fireEvent.click(restoreButtons[0]);

    // Check if onRestore was called with the correct item
    await waitFor(() => {
      expect(mockOnRestore).toHaveBeenCalledWith(expect.objectContaining({
        code: "console.log(\"Version 2\");",
        timestamp: 1625184000000,
      }));
    }, { timeout: 5000 });
  });

  it("handles close button click", async () => {
    render(
      <CodeHistoryCarousel
        codeSpace="test"
        cSess={cSessMock}
        onRestore={mockOnRestore}
        onClose={mockOnClose}
      />,
    );

    // Wait for the component to render
    await waitFor(() => {
      expect(screen.getByText("Code History")).toBeInTheDocument();
    }, { timeout: 5000 });

    // Find and click the "Close" button
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    // Check if onClose was called
    expect(mockOnClose).toHaveBeenCalled();
  });
});
