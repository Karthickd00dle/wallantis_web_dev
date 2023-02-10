import React, { useState } from "react";
import "./style.scss";
import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();
  const [showPostRegister, setShowPostRegister] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePostRegister = () => {
    setShowPostRegister(true);
  };

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
            onClick={() => handlePostRegister()}
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
            onClick={() => history.push("/auth/login")}
          >
            Existing User? Log in
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
