import React from "react";
import "./style.scss";

export const RegisterAgain = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-7  RegisterAgain_entries">
          <form>
            <div className="RegisterAgain_number">
              <input
                type="email"
                id="email"
                placeholder="Enter Email/Mobile number "
              />
              <label> Change? </label>
            </div>
            <div className="RegisterAgain_OTP_sent">
              <span> OTP sent to Mobile</span>
              <label>Resend? </label>
            </div>
            <div className="RegisterAgain_enterotp">
              <input type="number" id="number" placeholder="Enter OTP " />
            </div>

            <div className="RegisterAgain_setpassword">
              <input type="number" id="number" placeholder="Set Password" />
            </div>
            <button className="Login_Registeragain_button">Register</button>
            <button className="Existing_button_again">
              Existing User? Log in{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
