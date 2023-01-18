import React from "react";
import Dashboard from "component/Admin/DashboardPages/Dashboard/Dashboard";
import SettingsComponent from "component/Admin/DashboardPages/Settings";
import Customer from "component/Admin/DashboardPages/Customer";
import OrderManagement from "component/Admin/DashboardPages/OrderManagement";
import ProductManagement from "component/Admin/DashboardPages/ProductManagement";
import CouponManagement from "component/Admin/DashboardPages/CouponManagement";
import InventoryManagement from "component/Admin/DashboardPages/InventoryManagement";
import LeadManagement from "component/Admin/DashboardPages/LeadManagement";
import BlogManagement from "component/Admin/DashboardPages/BlogManagement";
import StaffManagement from "component/Admin/DashboardPages/StaffManagement";
import ContentManagement from "component/Admin/DashboardPages/ContentManagement";
import CareerManagement from "component/Admin/DashboardPages/CareerManagement";
import CatalogueManagement from "component/Admin/DashboardPages/CatalogueManagement"
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
    else if (history.location.pathname.includes("product-management")) {
      return <ProductManagement/>;
    }
    else if (history.location.pathname.includes("coupon-management")) {
      return <CouponManagement/>;
    }
    else if (history.location.pathname.includes("inventory-management")) {
      return <InventoryManagement/>;
    }
    else if (history.location.pathname.includes("lead-management")) {
      return <LeadManagement/>;
    }
    else if (history.location.pathname.includes("blog-management")) {
      return <BlogManagement/>;
    }
    else if (history.location.pathname.includes("staff-management")) {
      return <StaffManagement/>;
    }
    else if (history.location.pathname.includes("content-management")) {
      return <ContentManagement/>;
    }
    else if (history.location.pathname.includes("career-management")) {
      return <CareerManagement/>;
    }
    else if (history.location.pathname.includes("catalogue-management")) {
      return <CatalogueManagement/>;
    }


  };
  return (
    <div>
      <Routing />
    </div>
  );
}
