import { Input, TextField } from "@mui/material";
import React from "react";
import { CustomButton } from "..";
import "./NormalInput.scss";

export const NormalInput = React.forwardRef(
  (
    {
      className = "",
      placeholder = "",
      titleLabel = "",
      onChange,
      onKeyUp,
      value,
      name,
      type,
      icon,
      buttonOnClick,
      isSubmitButton,
      submitButtonLabel = "",
      labelSize = "fs-18",
      isSearchBox = false,
    },
    ref
  ) => (
    <div className={`normal-input ${isSearchBox && "searchbox"}`}>
      {titleLabel !== "" ? (
        <div className="d-flex justify-content-start mb-1">
          <label className={`mb-1 ${labelSize}`}>{titleLabel}</label>
        </div>
      ) : null}
      <div className="d-flex w-100 align-items-center">
        <input
          ref={ref}
          className={`form-control ${className}`}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onKeyUp={onKeyUp}
          onChange={onChange}
        />

        {isSubmitButton && (
          <CustomButton
            style={{
              width: "155px",
              height: "55px",
              borderRadius: "0px 2px 2px 0px",
              color: "#FFFFFF",
              backgroundColor: "#A26220",
            }}
            onClick={buttonOnClick}
          >
            {submitButtonLabel}
          </CustomButton>
        )}
        <span className="icon">{icon}</span>
      </div>
    </div>
  )
);

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
  disabled,
  register,
  errors,
  ...otherProps
}) => {
  return (
    <div>
      <Input
        label={label}
        name={name}
        value={value}
        {...register(name, { required: true })}
        variant={variant}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        type={type}
        {...otherProps}
      />

      <div className="error-message">
        {errors[name]?.type && (
          <span className="error-text">This field is required</span>
        )}
      </div>
    </div>
  );
};

export const CustomTextField = ({
  name,
  placeholder,
  className,
  onChange,
  type,
  value,
  props,
  InputProps,
  disabled,
}) => {
  return (
    <TextField
      name={name}
      placeholder={placeholder}
      className={`custom-text-field ${className}`}
      onChange={onChange}
      value={value}
      type={type}
      disabled={disabled}
      InputProps={InputProps}
      {...props}
    />
  );
};
