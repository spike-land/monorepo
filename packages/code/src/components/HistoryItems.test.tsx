import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CodeHistoryCarousel from "./HistoryItems";

// Mock fetch
globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        { code: "test code 1", timestamp: 1628000000000 },
        { code: "test code 2", timestamp: 1628000100000 },
      ]),
  })
) as unknown as typeof fetch;

describe("CodeHistoryCarousel", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<CodeHistoryCarousel codeSpace="test" />);
  });

  it("displays loading state", () => {
    render(<CodeHistoryCarousel codeSpace="test" />);
    expect(screen.getByText("Loading history...")).toBeInTheDocument();
  });

  // Add more tests as needed
});
