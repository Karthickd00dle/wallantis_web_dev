import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8 ForgotPassword_entries">
          <form>
            <div className="ForgotPassword_number">
              <input type="number" id="number" placeholder="+91 56846 84686 " />
              <label> Change? </label>
            </div>
            <div className="ForgotPassword_OTP_sent">
              <span> OTP sent to Mobile</span>
              <label>Resend? </label>
            </div>
            <div className="ForgotPassword_enterotp">
              <input type="number" id="number" placeholder="Enter OTP " />
            </div>

            <div className="ForgotPassword_setpassword">
              <input type="number" id="number" placeholder="Set Password" />
            </div>
            <NavLink to="/auth/registermobile">
              <button className="Login_forgot_button">Login</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};
