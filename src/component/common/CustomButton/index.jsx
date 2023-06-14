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
    fontSize: "18px",
    textTransform: "none",
    cursor: "pointer",
  };
  return (
    <>
      <Button
        style={customStyle}
        id="cursor-pointer"
        className={`${className}`}
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
