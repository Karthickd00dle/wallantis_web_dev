import React, { useEffect, useState } from "react";
import "./style.scss";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";
import { CustomButton } from "component/common";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resendOTPApi, verifyOTPApi } from "action/AuthAct";
import { useLocation } from "react-router-dom";
import { useTimer } from "hooks/useTimer";
import { Toast } from "service/toast";
import { history } from "service/helpers";

function ForgotPasswordFC({ verifyOTPApiCall, resendOTPApi }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let location = useLocation();

  const [changeMob, setChangeMob] = useState("disabled");
  const [username, setUsername] = useState();
  const [resendTime, setResendTime] = useTimer({
    multiplier: 1,
    startTime: 60,
  });
  const handleChangeMob = () => {
    setChangeMob(!changeMob);
  };

  const resendOTPApiCall = () => {
    setResendTime(60);
    let body = { emailId: username ? username : location.state };
    resendOTPApi(body);
  };

  const verifyOTPAPICall = (data) => {
    let body = {
      emailId: data.emailId,
      otp: data.otp,
      forgotPassword: data.password,
    };
    verifyOTPApiCall(body).then(() => {
      history.push("/home/login");
    });
  };

  useEffect(() => {
    if (location.state != "") {
      resendOTPApiCall(location.state);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(verifyOTPAPICall)}>
      <div className="forgot-password-container">
        <CustomInput
          variant="standard"
          className="input-phonenumber mb-3"
          disabled={changeMob}
          name="mailId"
          onChange={(e) => setUsername(e.target.value)}
          register={register}
          errors={errors}
          defaultValue={location.state}
          placeholder="Enter Your Mobile Number"
          endAdornment={
            <label
              onClick={handleChangeMob}
              className="label-change cursor-pointer"
            >
              Change ?
            </label>
          }
        />

        <div className="otp-resend-container d-flex justify-content-between my-4">
          {resendTime !== "00:00" && <label>{resendTime}</label>}
          <label
            className={`label-resend pe-1 cursor-pointer ${
              resendTime !== "00:00" ? "resend-hidden" : ""
            }`}
            onClick={() => resendOTPApiCall()}
            disabled={resendTime !== "00:00"}
          >
            Resend?
          </label>
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
      resendOTPApi: resendOTPApi,
    },
    dispatch
  );
};

const Login = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordFC);

export default Login;
