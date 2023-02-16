import { Input, TextField } from "@mui/material";
import React from "react";
import { CustomButton } from "..";
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
  isSubmitButton,
  submitButtonLabel = "",
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
      <div className="d-flex w-100 align-items-center">
        <input
          className={`form-control ${className}`}
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

        {isSubmitButton && (
          <CustomButton
            style={{
              width: "105px",
              height: "55px",
              borderRadius: "0px 2px 2px 0px",
              color: "#FFFFFF",
              backgroundColor: "#A26220",
            }}
          >
            {submitButtonLabel}
          </CustomButton>
        )}
        <span className="icon">{icon}</span>
      </div>
    </div>
  );
};

export const CustomInput = ({
  variant,
  label,
  className,
  placeholder,
  type,
  startAdornment,
  endAdornment,
  name,
  value,
  onChange,
  register,
  errors,
}) => {
  return (
    <>
      <Input
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...register(name, { required: true })}
        variant={variant}
        placeholder={placeholder}
        className={className}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        type={type}
      />

      <div className="error-message">
        {errors[name]?.type && <span>This field is required</span>}
      </div>
    </>
  );
};
