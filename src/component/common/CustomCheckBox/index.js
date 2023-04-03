import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export const CustomCheckBox = ({
  name,
  value,
  className,
  onChange,
  checked,
  icon,
  checkedIcon,
  color,
}) => {
  return (
    <Checkbox
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={className}
      color={color}
      checkedIcon={checkedIcon}
      icon={icon}
    />
  );
};
