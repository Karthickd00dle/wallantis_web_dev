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
    className,
    inputStyle,
    menuItemStyle,
    name,
    value: selectedValue,
    onChange: handleChange,
    menuItemList,
    placeholder = "Select",
  } = props;

  const [showPlaceholder, setShowPlaceholder] = React.useState(true);

  return (
    <div className={`custom_select_container ${className}`}>
      <BootstrapInput
        className={`w-100 d-flex align-items-center ${inputStyle}`}
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
            className={`d-flex ${menuItemStyle}`}
            name="placeholder"
            value="placeholder"
          >
            {placeholder}
          </MenuItem>
        )}
        {menuItemList &&
          menuItemList.map(({ label, value, icon }, index) => {
            return (
              <MenuItem
                className={`${menuItemStyle}`}
                name={label}
                value={value}
                key={index}
              >
                <div className="d-flex">
                {icon && (
                <img src={icon} height="25px" width="25px" alt={label} />
                )}
                <label className="ps-1 mt-1">{label}</label>
                </div>
              </MenuItem>
            );
          })}
      </BootstrapInput>
    </div>
  );
};
