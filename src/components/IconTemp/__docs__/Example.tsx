import React, { FC } from "react";
import IconTemp, { IconTempProps } from "../iconTemp";

const Example: FC<IconTempProps> = ({
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
      <IconTemp
        size={size}
        color={color}
      />
    </div>
  );
};

export default Example;
