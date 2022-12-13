import React, { useEffect, useState } from "react";
import './style.scss'
import LoginLayout from "layout/LoginLayout";
import { CustomButton } from "component/common/CustomButton";
import { history } from "service/helpers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginApi } from "action/AuthAct";
import { NormalInput } from "component/common";
import useValidator from "service/useValidator";
import { errorMessageToDisplay } from "service/helperFunctions";
import { locationSwitchList } from "config";
import { NavLink } from "react-router-dom"

export const LoginComponentMain = ({ loginApiCall }) => {
  const buttonstyles = {
    height: 55,
    color: "#FFFFFF",
    textTransform: "none",
    fontSize: "22px",
    backgroundColor: "#003975",
    "&:hover": {
      backgroundColor: "#003975",
    },
  };

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
        localStorage.setItem("location", locationSwitchList[0]?.value);
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

  const { userName } = loginFormValue;

  useEffect(() => {
    if (window.innerWidth <= 475) {
      document.body.style.setProperty("position", "relative", "important");
      return () => {
        document.body.style.removeProperty("position");
      };
    }
  }, []);

  return (
    // <>
    //   <div className="container-main">
    //     <div className="d-none d-lg-block ">
    //       <img className="loginpage-background-image" alt="Banner" />
    //     </div>
    //     <div>
    //       <div className="logon-container w-100">
    //         <div className="brand-logo-container "></div>
    //       </div>
    //       <div className=" logon-container-sub">
    //         <div className="w-100 ">
    //           <div className="d-flex justify-content-between align-items-center">
    //             <label className="font-title">Sign In</label>
    //           </div>
    //           <p className="font-paragraph my-2">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //             eiusmod tempor incididunt ut labore aliqua.
    //           </p>
    //         </div>
    //         <div className="w-100">
    //           <div className="d-flex flex-column my-4">
    //             <NormalInput
    //               titleLabel="Username"
    //               placeholder="Username"
    //               name="userName"
    //               value={userName}
    //               onChange={handleChange}
    //             />
    //             {errorMessageToDisplay(
    //               validator,
    //               "User Id",
    //               userName,
    //               "required|alpha_num_space"
    //             )}
    //           </div>
    //           <div className="d-flex flex-column my-4">
    //             <NormalInput
    //               titleLabel="Password"
    //               placeholder="Password"
    //               name="userName"
    //               type="password"
    //               value=""
    //               disabled={true}
    //             />
    //           </div>
    //           <div className="d-flex flex-column  my-5">
    //             <CustomButton
    //               style={buttonstyles}
    //               className="w-100 sign-in-btn"
    //               variant="contained"
    //               onClick={handleSubmit}
    //             >
    //               Sign In
    //             </CustomButton>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
    <div className="d-flex">
      <div className="col-md-4">
        <h1>
          Login Image
        </h1>
        <LoginLayout name="Login" content="Get access to your orders, wishlist and recommendations"/>
      </div>
      <div className="col-md-8 Login_Entries">
         <form>
          <div className="Login_EnterEmail">
          <input type="email" id="email" placeholder="Enter Email/Mobile number "/>
          </div>

          <div className="Login_EnterPassword">
          <input type="password" id="password" placeholder="Enter Password"/>
          </div>
            <NavLink to="/Auth/ForgotPassword">
          <div className="Login_Forgot">
          Forgot? 
          </div></NavLink>

          <div className="Login_Terms">
            <label>By continuing, you agree to Paperwall<a href=""> Terms of use</a> and <a href="">Privacy policy</a> </label>
          </div>

          <button className="Login_button">Login</button>

          <div className="Login_register">
          Don’t have an account?   <label>Register Now</label>
          </div>
         </form>
      </div>
      
    </div>
    </>
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

export const LoginComponent = connect(
  null,
  mapDispatchToProps
)(LoginComponentMain);
