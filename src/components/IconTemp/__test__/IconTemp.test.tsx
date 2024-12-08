// components/Icon/essential/IconTemp/__test__/IconTemp.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import IconTemp from "../iconTemp";

describe("IconTemp component", () => {
  it("Icon should render correctly", () => {
    render(<IconTemp />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toBeInTheDocument();
  });

  it("should render with small size", () => {
    render(<IconTemp size="small" />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toHaveStyle("transform: scale(0.8)");
  });

  it("should render with large size", () => {
    render(<IconTemp size="large" />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toHaveStyle("transform: scale(1.2)");
  });

  it("should render with custom color", () => {
    const testColor = "#FF5655";
    render(<IconTemp color={testColor} />);
    const path = screen.getByTestId("icon-temp").querySelector("path");
    expect(path).toHaveAttribute("stroke", testColor);
  });

  it("should render with numeric size", () => {
    const numericSize = 24;
    render(<IconTemp size={numericSize} />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toHaveAttribute("width", numericSize.toString());
  });

  it("should render with default props", () => {
    render(<IconTemp />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toHaveStyle("transform: scale(1)");
    const path = icon.querySelector("path");
    expect(path).toHaveAttribute("stroke", "black");
  });
});
