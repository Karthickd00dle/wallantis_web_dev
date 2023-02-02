import React, { useState } from "react";
import "./style.scss";
import { history } from "service/helpers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginApi } from "action/AuthAct";
import useValidator from "service/useValidator";
import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import { Alert, AlertTitle, InputAdornment } from "@mui/material";
import { errorMessageToDisplay } from "service/helperFunctions";
import { Toast } from "service/toast";

export const LoginComponentMain = ({ loginApiCall, ownProps }) => {
  const [validator, showValidationMessage] = useValidator();
  const [error, setErrors] = useState({});

  const [loginFormValue, setLoginFormValue] = useState({
    mailId: "",
    password: "",
  });
  const { mailId, password } = loginFormValue;

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
          name="mailId"
          value={mailId}
          onChange={handleChange}
          className="email-mobile-input-field mt-4"
        />
        {errorMessageToDisplay(
          validator,
          "Mail Id",
          mailId,
          "required|alpha_num_space"
        )}
        <CustomInput
          placeholder="Enter Password"
          variant="standard"
          className="password-input-field mt-4"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
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
        {errorMessageToDisplay(
          validator,
          "Password",
          password,
          "required|alpha_num_space"
        )}
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
      <CustomButton
        style={{ backgroundColor: "#A26220", color: "#FFFFFF" }}
        className="login-button"
        onClick={handleSubmit}
      >
        Login
      </CustomButton>
      {ownProps.postlogin && (
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
