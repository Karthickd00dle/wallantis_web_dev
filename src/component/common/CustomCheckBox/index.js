import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export const CustomCheckBox = React.forwardRef(
  (
    { name, value, className, onChange, checked, icon, checkedIcon, color },
    ref
  ) => (
    <Checkbox
      name={name}
      value={value}
      ref={ref}
      checked={checked}
      onChange={onChange}
      className={className}
      color={color}
      checkedIcon={checkedIcon}
      icon={icon}
    />
  )
);
