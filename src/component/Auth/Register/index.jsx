import React, { useState } from "react";
import "./style.scss";
import { CustomButton } from "component/common";
import jwt_decode from "jwt-decode";
import { CustomInput } from "component/common/NormalInput";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginApi, registationApi, verifyOTPApi } from "action/AuthAct";
import PostRegister from "../PostRegister";
import { GoogleLogin } from "@react-oauth/google";

const RegisterComponentMain = ({ loginApiCall, registationApiCall }) => {
  const history = useHistory();
  const [showPostRegister, setShowPostRegister] = useState();
  const [currentEmail, setCurrentEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePostRegister = (data) => {
    let payload = {
      emailId: data.email,
      loginType: 3,
    };

    registationApiCall(payload)
      .then((res) => {
        setShowPostRegister(true);
        setCurrentEmail(data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const googleSignUp = (OAuthRes) => {
    const decoded = jwt_decode(OAuthRes.credential);
    const name = decoded.given_name.split(" ");
    let payload = {
      firstName: name[0],
      lastName: name[1],
      emailId: decoded.email,
      image: decoded.picture,
      roleType: "home_owner",
      socialId: decoded.sub,
      loginType: 2,
    };

    registationApiCall(payload)
      .then(() =>
        loginApiCall({
          username: decoded.sub,
          loginType: 2,
        }).then(({ response }) => {
          let token = response.access_token;
          sessionStorage.setItem("authToken", token);
          history.push("/home/");
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {!showPostRegister ? (
        <div className="d-flex register-container">
          <form onSubmit={handleSubmit(handlePostRegister)}>
            <CustomInput
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
                type="submit"
              >
                Continue
              </CustomButton>
              <div className="my-2 ">
                <GoogleLogin
                  text="signup_with"
                  onSuccess={(res) => {
                    googleSignUp(res);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
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
      ) : (
        <PostRegister currentEmail={currentEmail} />
      )}
    </>
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
      registationApiCall: registationApi,
      verifyOTPApiCall: verifyOTPApi,
      loginApiCall: loginApi,
    },
    dispatch
  );
};

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponentMain);

export default Register;
