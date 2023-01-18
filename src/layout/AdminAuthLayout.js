import React from "react";
import "assets/scss/layouts/AdminAuthLayout.scss";
import { ReactComponent as BrandLogo } from "assets/svg/Brand-Logo.svg";
import { useLocation } from "react-router-dom";
import { ternaryCondition } from "service/helperFunctions";

const FetchParams = () => {
  let location = useLocation();
  let param = location.pathname.split("/").slice(-1)[0];
  return ternaryCondition(param === "login", "Login", "Create an Account");
};

export function AuthLayout({ children }) {
  return (
    <div className="d-flex ">
      <div className="admin-auth-layout">
        <BrandLogo height="95px" width="110px" />
        <div>
          <label>
            <FetchParams />
          </label>
          <p>Get access to your orders, wishlist and recommendations</p>
        </div>
      </div>
      {children}
    </div>
  );
}
