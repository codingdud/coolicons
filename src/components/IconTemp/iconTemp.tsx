// components/IconTemp/iconTemp.tsx
import React from "react";
import styled from "styled-components";

export type IconTempProps = {
  size?: "small" | "medium" | "large" | number;
  color?: string;
  "data-testid"?: string;
};

const StyledSvg = styled.svg<IconTempProps>`
  transform: ${(props) => {
    if (typeof props.size === "number") {
      return `scale(${props.size / 55})`;
    }
    return `scale(${
      props.size === "small"
        ? "0.8"
        : props.size === "medium"
        ? "1"
        : "1.2"
    })`;
  }};
`;

const IconTemp: React.FC<IconTempProps> = ({
  size = "medium",
  color = "black",
  "data-testid": dataTestId = "icon-temp",
  ...props
}) => {
  const getDimensions = () => {
    if (typeof size === "number") {
      return {
        width: size,
        height: Math.floor(size * (52/55))
      };
    }
    const baseWidth = 55;
    const baseHeight = 52;
    const scale = size === "small" ? 0.8 : size === "large" ? 1.2 : 1;
    
    return {
      width: baseWidth * scale,
      height: baseHeight * scale
    };
  };

  const { width, height } = getDimensions();

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 55 52"
      fill="none"
      size={size}
      data-testid={dataTestId}
      {...props}
    >
      <path
        d="M3 26L25.2222 2M3 26L25.2222 50M3 26H53"
        strokeWidth="6"
        strokeLinecap="round"
        stroke={color}
      />
    </StyledSvg>
  );
};

export default IconTemp;
