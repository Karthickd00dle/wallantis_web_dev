import { InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import "./NormalSearch.scss";
import { ReactComponent as SearchIcon } from "assets/svg/HeaderTop/Search-Icon.svg";

export const NormalSearch = ({
  placeholder = "",
  onChange,
  value = "",
  name,
}) => {
  return (
    <OutlinedInput
      className="search-box"
      id="outlined-adornment-password"
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        let body = {};
        let tempVal = e.target.value;

        body = {
          target: {
            name: e.target.name,
            value: tempVal,
          },
        };

        onChange(body);
      }}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon className="m-2" />
        </InputAdornment>
      }
    />
  );
};
