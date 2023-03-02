import React, { useState } from "react";
import "./index.scss";
import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";

import { history } from "service/helpers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { verifyOTPApi } from "action/AuthAct";

function PostRegisterComponentMain({ verifyOTPApiCall, currentEmail }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const verifyOTP = (data) => {
    let payload = {
      emailId: currentEmail,
      otp: data.otp,
      password: data.password,
    };
    verifyOTPApiCall(payload).then(() => {
      history.push("/auth/login");
    });
  };
  return (
    <form onSubmit={handleSubmit(verifyOTP)}>
      <div className="post-register-container">
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
            Verify OTP
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

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      verifyOTPApiCall: verifyOTPApi,
    },
    dispatch
  );
};

const PostRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostRegisterComponentMain);

export default PostRegister;
