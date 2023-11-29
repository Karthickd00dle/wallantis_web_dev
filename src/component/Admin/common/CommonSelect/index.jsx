import React from "react";
import "./index.scss";
import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { DropDownIcon } from "assets/svg/Admin/Common";

export default function CommonSelect({
  options = [
    { name: "Current week", value: 1 },
    { name: "Current month", value: 2 },
    { name: "Current year", value: 3 },
  ],
  className,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${!className && "common-select"} ${className}`}
      >
        {options.map(({ name, value }) => {
          return (
            <option key={value} name={name} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export const CustomSelect = ({
  width,
  className,
  label,
  value,
  onChange,
  menuItems,
}) => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 0,
      position: "relative",
      width: width,
      border: "0.25px solid #C0C0C0",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: "none",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Lato",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": { borderRadius: 0 },
    },
  }));

  return (
    <div className="custom-select-container">
      <Select
        className={className}
        value={value}
        label={label}
        inputProps={{ "aria-label": "Without label" }}
        input={<BootstrapInput />}
        IconComponent={(props) => <DropDownIcon {...props} />}
        onChange={onChange}
      >
        {menuItems?.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
