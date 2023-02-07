import React, { Suspense } from "react";
import "assets/scss/layouts/AuthLayout.scss";
import { useLocation } from "react-router-dom";
import { ternaryCondition } from "service/helperFunctions";

const BrandLogo = React.lazy(() => import("assets/svg/BrandLogo"));

const FetchParams = () => {
  let location = useLocation();
  let param = location.pathname.split("/").slice(-1)[0];
  return ternaryCondition(param === "login", "Login", "Create an Account");
};

export function AuthLayout({ children }) {
  return (
    <Suspense fallback={<h1>Loading..Please Wait</h1>}>
      <div className="d-flex">
        <div className="auth-layout">
          <div className="brand-logo">
            <BrandLogo />
          </div>
          <div>
            <label>{/* <FetchParams /> */}</label>
            <p>Get access to your orders, wishlist and recommendations</p>
          </div>
        </div>
        {children}
      </div>
    </Suspense>
  );
}
