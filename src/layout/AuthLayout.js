import React from "react";
import "assets/scss/layouts/AuthLayout.scss";
import { useLocation } from "react-router-dom";
import { ternaryCondition } from "service/helperFunctions";
import { BrandLogoIcon } from "assets/icons/FooterIcons/FooterIcons";

// const BrandLogo = React.lazy(() => import("assets/svg/BrandLogo"));

const FetchParams = () => {
  let location = useLocation();
  let param = location.pathname.split("/").slice(-1)[0];
  return ternaryCondition(param === "login", "Login", "Create an Account");
};

export function AuthLayout({ children }) {
  return (
    <div className="d-flex ">
      <div className="auth-layout">
        <BrandLogoIcon height="95px" width="500px" />
        <div className="login-page">
          <div>
            <label>
              <FetchParams />
            </label>
            <p>Get access to your orders, wishlist and recommendations</p>
          </div>
          <div className="login-child">{children}</div>
        </div>
      </div>
    </div>
  );
}
