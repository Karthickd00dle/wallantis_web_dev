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
  type = "submit",
}) => {
  const customStyle = {
    ...style,
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
        type={type}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};
