import React from "react";
import "assets/scss/layouts/AdminAuthLayout.scss";
// import { useLocation } from "react-router-dom";
// import { ternaryCondition } from "service/helperFunctions";

// const FetchParams = () => {
//   let location = useLocation();
//   let param = location.pathname.split("/").slice(-1)[0];
//   return ternaryCondition(param === "login", "Login", "Create an Account");
// };

export function AdminAuthLayout({ children }) {
  return (
    <div className="d-flex ">
      <div className="admin-auth-layout" />
      {children}
    </div>
  );
}
