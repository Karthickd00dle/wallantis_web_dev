import React, { useState } from "react";
import "./style.scss";
import { history } from "service/helpers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginApi } from "action/AuthAct";
import useValidator from "service/useValidator";
import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import { InputAdornment } from "@mui/material";

export const LoginComponentMain = ({ loginApiCall, ownProps }) => {
  const [validator, showValidationMessage] = useValidator();
  const [error, setErrors] = useState({});

  const [loginFormValue, setLoginFormValue] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = () => {
    if (validator.allValid()) {
      loginApiCall(loginFormValue).then((res) => {
        localStorage.setItem("authToken", res);
        history.push("/");
      });
    } else {
      showValidationMessage(true);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    const tempErrors = { ...error };
    tempErrors[name] = undefined;
    setErrors({ ...error, ...tempErrors });
    setLoginFormValue({
      ...loginFormValue,
      [name]: value,
    });
  };

  return (
    <div className={`login-entries ${ownProps.className}`}>
      <div className="d-flex flex-column">
        <CustomInput
          placeholder="Enter Email/Mobile number"
          variant="standard"
          className="email-mobile-input-field mt-4"
        />
        <CustomInput
          placeholder="Enter Password"
          variant="standard"
          className="password-input-field mt-4"
          type="password"
          endAdornment={
            ownProps.postlogin && (
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
        {!ownProps.postlogin && (
          <div className="d-flex justify-content-end">
            <label
              onClick={() => {
                history.push("/auth/forgotpassword");
              }}
              className="forget-text-inputfield cursor-pointer pt-3"
            >
              Forget?
            </label>
          </div>
        )}
      </div>
      <div className="login-terms">
        <label>
          By continuing, you agree to Paperwall <a href="">Terms of use</a> and{" "}
          <a href="">Privacy policy</a>
        </label>
      </div>
      <CustomButton className="login-button">Login</CustomButton>

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
      {!ownProps.postlogin && (
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
  );
};

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
