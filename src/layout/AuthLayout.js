import React from "react";
import "assets/scss/layouts/AuthLayout.scss";
import { useLocation } from "react-router-dom";
import { BrandLogoIcon } from "assets/icons/FooterIcons/FooterIcons";

const FetchParams = () => {
  let location = useLocation();
  let param = location.pathname.split("/").slice(-1)[0];
  switch (param) {
    case "login":
      return "Login";
    case "register":
      return "Create an Account";
    case "forgot-password":
      return "Login";
    default:
      return null;
  }
};

export function AuthLayout({ children }) {
  return (
    <div className="d-flex ">
      <div className="auth-layout">
        <BrandLogoIcon height="95px" width="500px" />
        <div className="d-flex">
          <div>
            <label>
              <FetchParams />
            </label>
            <p>Get access to your orders, wishlist and recommendations</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
