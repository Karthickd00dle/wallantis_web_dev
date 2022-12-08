import React from "react";
import "./NormalInput.scss";

export const NormalInput = ({
  className = "",
  placeholder = "",
  titleLabel = "",
  onChange,
  onKeyUp,
  value = "",
  name,
  disabled = false,
  type = "text",
  max = "",
  min = "",
  icon,
  labelSize = "fs-18",
  isSearchBox = false,
}) => {
  return (
    <div className={`normal-input ${isSearchBox && "searchbox"}`}>
      {titleLabel !== "" ? (
        <div className="d-flex justify-content-start mb-1">
          <label className={`mb-1 ${labelSize}`}>{titleLabel}</label>
        </div>
      ) : null}

      <input
        className={"form-control w-100" + className}
        name={name}
        type={type}
        disabled={disabled}
        value={value}
        min={0}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        onKeyUp={onKeyUp}
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
      />
      <span className="icon">{icon}</span>
    </div>
  );
};
