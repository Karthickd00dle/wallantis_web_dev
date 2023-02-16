import React, { useState } from "react";
import "./style.scss";
import { history } from "service/helpers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginApi } from "action/AuthAct";
import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import { InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";

export default function LoginComponentMain({ loginApiCall, ownProps }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // if (data.mailId === "test@gmail.com" && data.password === "test1234@#") {
    //   localStorage.setItem("authToken", register.mailId);
    //   history.push("/home/home");
    // }
    loginApiCall({ username: data.mailId, password: data.password })
      .then(() => {
        localStorage.setItem("authToken", register.mailId);
        history.push("/home/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`login-entries `}>
        <div className="d-flex flex-column">
          <CustomInput
            placeholder="Enter Email/Mobile number"
            variant="standard"
            name="mailId"
            className="email-mobile-input-field mt-4"
            register={register}
            errors={errors}
          />
          <CustomInput
            placeholder="Enter Password"
            variant="standard"
            className="password-input-field mt-4"
            type="password"
            min={8}
            max={20}
            name="password"
            register={register}
            errors={errors}
            endAdornment={
              ownProps?.postlogin && (
                <InputAdornment position="end">
                  <label
                    onClick={() => {
                      history.push("/auth/forgotpassword");
                    }}
                    className="forget-text-inputfield cursor-pointer"
                  >
                    Forget?
                  </label>
                </InputAdornment>
              )
            }
          />

          {!ownProps?.postlogin && (
            <div className="d-flex justify-content-end">
              <label
                onClick={() => {
                  history.push("/auth/forgot-password");
                }}
                className="forget-text-inputfield cursor-pointer pt-3"
              >
                Forgot?
              </label>
            </div>
          )}
        </div>
        <div className="login-terms">
          <label>
            By continuing, you agree to Paperwall <a href="">Terms of use</a>{" "}
            and <a href="">Privacy policy</a>
          </label>
        </div>
        <CustomButton
          style={{ backgroundColor: "#A26220", color: "#FFFFFF" }}
          className="login-button"
          type="submit"
          // onClick={handleSubmit}
        >
          Login
        </CustomButton>
        {ownProps?.postlogin && (
          <div className="login-register-post">
            Don’t have an account
            <a
              className="ps-2 cursor-pointer"
              onClick={() => {
                history.push("/auth/register");
              }}
            >
              Create a account
            </a>
          </div>
        )}
        {!ownProps?.postlogin && (
          <div className="login-register">
            <label className="dont-have-account-text">
              Don’t have an account?
            </label>
            <label
              className="register-now-text ps-2 cursor-pointer"
              onClick={() => {
                history.push("/auth/register");
              }}
            >
              Register Now
            </label>
          </div>
        )}
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
      loginApiCall: loginApi,
    },
    dispatch
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponentMain);
