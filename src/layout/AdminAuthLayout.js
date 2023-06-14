import React from "react";
import "assets/scss/layouts/AdminAuthLayout.scss";

export function AdminAuthLayout({ children }) {
  return (
    <div className="d-flex ">
      <div className="admin-auth-layout" />
      {children}
    </div>
  );
}
