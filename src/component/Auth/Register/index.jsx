import React from "react";
import "./style.scss";
import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};
  return (
    <div className="d-flex register-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          type="email"
          name="email"
          variant="standard"
          placeholder="Enter Email/Mobile number"
          className="input-mobile-email"
          register={register}
          errors={errors}
        />
        <label className="label-privacy-policy ">
          By continuing, you agree to Paperwall Terms of use and Privacy policy
        </label>
        <div className="d-flex flex-column">
          <CustomButton
            style={{ backgroundColor: "#A26220", color: " #FFFFFF" }}
            className="py-2 mb-3"
          >
            Continue
          </CustomButton>
          <CustomButton
            style={{
              color: "#2A71F9",
              borderRadius: "5px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
            }}
            className="py-2 mt-3"
          >
            Existing User? Log in
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
