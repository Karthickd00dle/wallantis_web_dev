import * as React from "react";
import Button from "@mui/material/Button";

export const CustomButton = ({
  style,
  className,
  variant,
  children,
  startIcon,
  onClick,
  endIcon,
}) => {
  const customStyle = {
    ...style,
    color: "#FFFFFF",
    backgroundColor: "#A26220",
    fontFamily: "Lato, sans-serif",
    textTransform: "none",
  };
  return (
    <>
      <Button
        style={customStyle}
        className={className}
        variant={variant}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};
