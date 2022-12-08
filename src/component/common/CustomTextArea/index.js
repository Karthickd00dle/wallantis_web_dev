import React from "react";
import { conditionalLoad, ternaryCondition } from "service/helperFunctions";
import "./style.scss";

export const CustomTextArea = ({
  labelText = "",
  isLabelCenter = false,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  isGrey,
}) => {
  return (
    <>
      {labelText && (
        <div className={"input_label"}>
          <label
            className={`${ternaryCondition(
              isLabelCenter,
              "text-center",
              "text-start"
            )} ${conditionalLoad(isGrey, "gray_label")}`}
          >
            {labelText}
          </label>
        </div>
      )}
      <div className={"text_area_container"}>
        <textarea
          type={type}
          value={value}
          onChange={(e) => {
            let body = {};
            let tempVal = e.target.value;
            body = {
              target: {
                name: name,
                value: tempVal,
              },
            };
            onChange(body);
          }}
        />
        {value === "" && placeholder && <label>{placeholder}</label>}
      </div>
    </>
  );
};
