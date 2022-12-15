import React, { useState } from "react";
import "./style.scss";
import { history } from "service/helpers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginApi } from "action/AuthAct";
import useValidator from "service/useValidator";
import { NavLink } from "react-router-dom";

export const LoginComponentMain = ({ loginApiCall }) => {
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
    <div className="d-flex">
      <div className="col-md-5" />
      <div className="col-md-7 login-entries">
        <form>
          <div className="login-enter-email">
            <input
              type="email"
              id="email"
              placeholder="Enter Email/Mobile number "
            />
          </div>

          <div className="login-enter-password">
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <NavLink to="/Auth/ForgotPassword">
            <div className="login-forgot">Forgot?</div>
          </NavLink>

          <div className="login-terms">
            <label>
              By continuing, you agree to Paperwall
              <a href=""> Terms of use</a> and <a href="">Privacy policy</a>{" "}
            </label>
          </div>

          <button className="login-button">Login</button>

          <div className="login-register">
            Don’t have an account?{" "}
            <label
              className="cursor-pointer"
              onClick={() => {
                history.push("/auth/register");
              }}
            >
              Register Now
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginApiCall: loginApi,
    },
    dispatch
  );
};

export const Login = connect(null, mapDispatchToProps)(LoginComponentMain);
