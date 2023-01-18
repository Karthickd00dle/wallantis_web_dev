import React from "react";
import Dashboard from "component/Admin/DashboardPages/Dashboard/Dashboard";
import SettingsComponent from "component/Admin/DashboardPages/Settings";
import Customer from "component/Admin/DashboardPages/Customer";
import OrderManagement from "component/Admin/DashboardPages/OrderManagement";
import ProductManagement from "component/Admin/DashboardPages/ProductManagement"
import { history } from "service/helpers";


export default function AdminComponent() {
  const Routing = () => {
    if (history.location.pathname.includes("dashboard")) {
      return <Dashboard /> ;
    } else if (history.location.pathname.includes("settings")) {
      return <SettingsComponent />;
    }
    else if (history.location.pathname.includes("customer")) {
      return <Customer/>;
    }
    else if (history.location.pathname.includes("order-management")) {
      return <OrderManagement/>;
    }
    else if (history.location.pathname.includes("order-management")) {
      return <ProductManagement/>;
    }



  };
  return (
    <div>
      <Routing />
    </div>
  );
}
