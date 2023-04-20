import { RemoveIcon } from "assets/svg/Admin/Common";
import { MuiChipsInput } from "mui-chips-input";
import React from "react";
import "./style.scss";

const CustomChipInput = ({
  placeholder,
  helperText,
  clearInputOnBlur,
  value,
  onChange,
}) => {
  return (
    <MuiChipsInput
      placeholder={placeholder}
      helperText={helperText}
      clearInputOnBlur={clearInputOnBlur}
      value={value}
      onChange={onChange}
      renderChip={(Component, key, props) => {
        return (
          <Component
            className="color-chip-input"
            {...props}
            key={key}
            deleteIcon={<RemoveIcon />}
          />
        );
      }}
    />
  );
};

export default CustomChipInput;
