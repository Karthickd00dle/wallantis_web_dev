import React from "react";
import "assets/scss/layouts/AdminLayout.scss";
import AdminSidebar from "component/common/AdminSidebar";
export function AdminLayout({ children }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <div>{children}</div>
    </div>
  );
}
