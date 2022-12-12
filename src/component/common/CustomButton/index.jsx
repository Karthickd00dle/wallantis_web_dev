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
    backgroundColor: "#A26220",
    fontFamily: "Nunito",
    textTransform: "none",
  };
  return (
    <div>
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
    </div>
  );
};
