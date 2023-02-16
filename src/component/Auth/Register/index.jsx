import React, { useState } from "react";
import "./style.scss";
import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { conditionalLoad } from "service/helperFunctions";

export default function PostRegister() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit()}>
      <div className="post-register-container">
        <CustomInput
          type="number"
          placeholder="Enter Email/Mobile number"
          className="input-phonenumber mb-3"
          name="phonenumber"
          register={register}
          errors={errors}
          endAdornment={
            <label className="label-change cursor-pointer">Change ?</label>
          }
        />
        <div className="otp-resend-container d-flex justify-content-between my-4">
          <label className="label-otp-sent"> OTP sent to Mobile</label>
          <label className="label-resend pe-1">Resend? </label>
        </div>
        <CustomInput
          type="number"
          placeholder="Enter OTP"
          name="otp"
          className="input-otp my-3"
          register={register}
          errors={errors}
        />
        <CustomInput
          type="password"
          placeholder="Set Password"
          className="input-password my-3"
          name="password"
          register={register}
          errors={errors}
        />
        <div className="d-flex flex-column">
          <CustomButton
            style={{ backgroundColor: "#A26220", color: " #FFFFFF" }}
            className="py-2 mb-3"
          >
            Register
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
      </div>
    </form>
  );
}

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

  return (
    <>
      {conditionalLoad(
        !showPostRegister,
        <div className="d-flex register-container">
          <form onSubmit={handleSubmit()}>
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
              By continuing, you agree to Paperwall Terms of use and Privacy
              policy
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
      )}
      {conditionalLoad(showPostRegister, <PostRegister />)}
    </>
  );
};
