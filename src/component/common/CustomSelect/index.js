import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.scss";

const BootstrapInput = styled(Select)(() => ({
  "& .MuiInputBase-input": {
    padding: "15px 27px 14px 27px",
  },
  "& .MuiSelect-icon": {
    color: "#545454",
    fontSize: "35px",
  },
}));

export const CustomSelect = (props) => {
  const {
    titleLabel = "",
    labelSize = "",
    name,
    value: selectedValue,
    onChange: handleChange,
    menuItemList,
    placeholder = "Select",
  } = props;

  const [showPlaceholder, setShowPlaceholder] = React.useState(true);

  return (
    <div className={`custom_select_container ${props.className}`}>
      {titleLabel !== "" ? (
        <div className="d-flex justify-content-start mb-1">
          <label className={`font-weight-normal mb-1 ${labelSize}`}>
            {titleLabel}
          </label>
        </div>
      ) : null}
      <BootstrapInput
        className="w-100"
        id="demo-customized-textbox"
        IconComponent={ExpandMoreRoundedIcon}
        defaultValue={"placeholder"}
        value={selectedValue}
        onFocus={() => setShowPlaceholder(false)}
        onClose={(e) => setShowPlaceholder(e.target.value === undefined)}
        onChange={handleChange}
        name={name}
      >
        {showPlaceholder && (
          <MenuItem
            key="0"
            className="text-grey_39"
            name="placeholder"
            value="placeholder"
          >
            {placeholder}
          </MenuItem>
        )}
        {menuItemList.map(({ label, value }, index) => {
          return (
            <MenuItem name={label} value={value} key={index}>
              {label}
            </MenuItem>
          );
        })}
      </BootstrapInput>
    </div>
  );
};
