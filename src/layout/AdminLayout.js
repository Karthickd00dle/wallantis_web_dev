import React from "react";
import "assets/scss/layouts/AdminLayout.scss";
import AdminSidebar from "component/common/AdminSidebar";
import CustomHeader from "component/Admin/common/CustomHeader";
import CustomNavBar from "component/Admin/common/CustomNavBar";
export function AdminLayout({ children }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="d-flex flex-column w-100">
        <CustomHeader />
        {children}
      </div>
    </div>
  );
}
