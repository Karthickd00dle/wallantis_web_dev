import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

export function RegisterMobile() {
  return (
    <div>
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-7  RegisterMobile_entries">
          <form>
            <div className="RegisterMobile_number">
              <input
                type="email"
                id="email"
                placeholder="Enter Email/Mobile number "
              />
            </div>
            <div className="RegisterMobile_policy">
              By continuing, you agree to Paperwall Terms of use and Privacy
              policy
            </div>
            <button className="Login_continue_button">Continue</button>
            <NavLink to="/auth/login">
              <button className="Existing_button">Existing User? Log in</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
