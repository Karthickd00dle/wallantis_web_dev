import React from "react";
import AdminSidebar from "component/common/AdminSidebar";
import CustomHeader from "component/Admin/common/CustomHeader";

export function AdminLayout({ children }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-100">
        <CustomHeader />
        {children}
      </div>
    </div>
  );
}
