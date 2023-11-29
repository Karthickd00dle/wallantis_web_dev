import React, { useEffect } from "react";
import AdminSidebar from "component/common/AdminSidebar";
import CustomHeader from "component/Admin/common/CustomHeader";
import { history } from "service/helpers";

export function AdminLayout({ children }) {
  useEffect(() => {
    if (!sessionStorage.getItem("authToken")) {
      history.push("/admin-auth/login");
    }
  }, []);

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
