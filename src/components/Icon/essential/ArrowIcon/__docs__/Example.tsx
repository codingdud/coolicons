import React, { FC } from "react";
import ArrowIcon, { ArrowIconProps } from "../ArrowIcon";

const Example: FC<ArrowIconProps> = ({
  size = "medium",
  color = "black",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "20px", // Adds space between icons if you want to show multiple
      }}
    >
      <ArrowIcon
        size={size}
        color={color}
      />
    </div>
  );
};

export default Example;
