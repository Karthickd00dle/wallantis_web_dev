import React from "react";
import "./style.scss";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";
import { CustomButton } from "component/common";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="forgot-password-container">
        <CustomInput
          type="number"
          placeholder="+91 56846 84686"
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
        <CustomButton
          style={{ backgroundColor: "#A26220", color: "#FFFFFF" }}
          className="mt-5 py-2"
        >
          Login
        </CustomButton>
      </div>
    </form>
  );
};
