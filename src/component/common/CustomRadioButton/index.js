import * as React from "react";
import Radio from "@mui/material/Radio";
import { ReactComponent as EmptyRadio } from "assets/svg/RadioButton/RadioEmpty.svg";
import { ReactComponent as CheckedIcon } from "assets/svg/RadioButton/Checked.svg";
import "./style.scss";

function CheckedRadio() {
  return (
    <div className="check-icon-container">
      <CheckedIcon />
    </div>
  );
}

export const CustomRadioButton = (props) => {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<CheckedRadio />}
      icon={<EmptyRadio />}
      {...props}
    />
  );
};
