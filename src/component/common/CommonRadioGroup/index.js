import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./style.scss";

export const CommonRadioGroup = ({
  titleLabel,
  labelSize,
  name,
  radioOptions = [],
  value,
  onChange: handleChange,
}) => {
  return (
    <div className="common_radio_container">
      {titleLabel !== "" ? (
        <div className="d-flex justify-content-start mb-1">
          <label className={`mb-1 ${labelSize}`}>{titleLabel}</label>
        </div>
      ) : null}

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {radioOptions.map(({ labelText, value: valueData, id }) => {
          return (
            <FormControlLabel
              id={id}
              value={valueData.toString()}
              control={<Radio />}
              label={labelText}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};
