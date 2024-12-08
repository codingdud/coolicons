// components/Icon/essential/ArrowIcon/__test__/ArrowIcon.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ArrowIcon from "../ArrowIcon";

describe("ArrowIcon component", () => {
  it("Icon should render correctly", () => {
    render(<ArrowIcon />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toBeInTheDocument();
  });

  it("should render with small size", () => {
    render(<ArrowIcon size="small" />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toHaveStyle("transform: scale(0.8)");
  });

  it("should render with large size", () => {
    render(<ArrowIcon size="large" />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toHaveStyle("transform: scale(1.2)");
  });

  it("should render with custom color", () => {
    const testColor = "#FF5655";
    render(<ArrowIcon color={testColor} />);
    const path = screen.getByTestId("icon-temp").querySelector("path");
    expect(path).toHaveAttribute("stroke", testColor);
  });

  it("should render with numeric size", () => {
    const numericSize = 24;
    render(<ArrowIcon size={numericSize} />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toHaveAttribute("width", numericSize.toString());
  });

  it("should render with default props", () => {
    render(<ArrowIcon />);
    const icon = screen.getByTestId("icon-temp");
    expect(icon).toHaveStyle("transform: scale(1)");
    const path = icon.querySelector("path");
    expect(path).toHaveAttribute("stroke", "black");
  });
});
