import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import jwt_decode from "jwt-decode";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginApi } from "action/AuthAct";
import { CustomButton } from "component/common";
import { CustomInput } from "component/common/NormalInput";
import { InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { ternaryCondition } from "service/helperFunctions";
import { GoogleLogin } from "@react-oauth/google";
import { useHistory } from "react-router-dom";

function LoginComponentMain({ loginApiCall, ownProps }) {
  const location = useLocation().pathname.split("/").slice(-1)[0];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const [currentEmail, setCurrentEmail] = useState();

  function postLogin(isGoogle, response) {
    if (isGoogle) {
      sessionStorage.setItem("authToken", response?.access_token);
    } else {
      localStorage.setItem("authToken", response?.access_token);
    }
    ternaryCondition(
      location === "payment-page"
        ? ownProps.setActiveStep(1)
        : history.push("/home/")
    );
  }

  const onSubmit = (data) => {
    loginApiCall({
      username: data.mailId,
      password: data.password,
      loginType: 3,
    }).then(({ response }) => postLogin(false, response));
  };

  const googleSignIn = (OAuthRes) => {
    const decoded = jwt_decode(OAuthRes.credential);
    loginApiCall({
      username: decoded.sub,
      loginType: 2,
    }).then(({ response }) => postLogin(true, response));
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
            onChange={(e) => setCurrentEmail(e.target.value)}
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
                      history.push("/auth/forgotpassword", 1);
                    }}
                    className="forget-text-inputfield cursor-pointer"
                  >
                    Forget Password?
                  </label>
                </InputAdornment>
              )
            }
          />

          {!ownProps?.postlogin && (
            <div className="d-flex justify-content-end">
              <label
                onClick={() => {
                  history.push("/auth/forgot-password", currentEmail);
                }}
                className="forget-text-inputfield cursor-pointer pt-3"
              >
                Forgot Password?
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
        >
          Login
        </CustomButton>
        <div className="mt-4">
          <GoogleLogin
            onSuccess={(res) => {
              googleSignIn(res);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
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

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponentMain);

export default Login;
