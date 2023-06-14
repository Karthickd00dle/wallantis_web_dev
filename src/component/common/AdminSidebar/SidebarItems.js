import React from "react";
import DashboardIconSVGComponent from "assets/svg/Admin/Dashboard";
import CustomerIconSVGComponent from "assets/svg/Admin/Customer";
import OrderManagentIconSVGComponent from "assets/svg/Admin/OrderManagement";
import ProductManagementSVGComponent from "assets/svg/Admin/ProductManagement";
import { InventoryMangement } from "assets/svg/Admin/InventoryMangement";
import LeadIconSVGComponent from "assets/svg/Admin/LeadManagement";
import CouponManagement from "assets/svg/Admin/CouponManagement";
import BlogManagement from "assets/svg/Admin/BlogManagement";
import ReportModules from "assets/svg/Admin/ReportModules";
import StaffManagement from "assets/svg/Admin/StaffManagement";
import ContentManagement from "assets/svg/Admin/ContentManagement";
import CareerManagement from "assets/svg/Admin/CareerMangement";
import CatalogueManagement from "assets/svg/Admin/CatalogueManagement";
import Settings from "assets/svg/Admin/Settings";
import Logout from "assets/svg/Admin/Logout";

export const sidebarItems = [
  {
    name: "Dashboard",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"} />,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"} />,
    },
    route: "/admin/dashboard",
  },
  {
    name: "Customer",
    icon: {
      normal: <CustomerIconSVGComponent fill={"white"} />,
      active: <CustomerIconSVGComponent fill={"#C5CAFF"} />,
    },
    route: "/admin/customer",
  },
  {
    name: "Order Management",
    icon: {
      normal: <OrderManagentIconSVGComponent fill={"white"} />,
      active: <OrderManagentIconSVGComponent fill={"#C5CAFF"} />,
    },
    route: "/admin/order-management",
  },
  {
    name: "Product Management",
    icon: {
      normal: <ProductManagementSVGComponent fill={"white"} />,
      active: <ProductManagementSVGComponent fill={"#C5CAFF"} />,
    },
    route: "/admin/product-management",
  },
  {
    name: "Coupon Management",
    icon: {
      normal: <CouponManagement fill={"white"} />,
      active: <CouponManagement fill={"#C5CAFF"} />,
    },
    route: "/admin/coupon",
  },
  {
    name: "Inventory Management",
    icon: {
      normal: <InventoryMangement fill={"white"} />,
      active: <InventoryMangement fill={"#C5CAFF"} />,
    },
    route: "/admin/inventory-management",
  },
  {
    name: "Lead Management",
    icon: {
      normal: <LeadIconSVGComponent fill={"white"} />,
      active: <LeadIconSVGComponent fill={"#C5CAFF"} />,
    },
    route: "/admin/lead-management",
  },
  {
    name: "Blog Management",
    icon: {
      normal: <BlogManagement fill={"white"} />,
      active: <BlogManagement fill={"#C5CAFF"} />,
    },
    route: "/admin/blog-management",
  },
  {
    name: "Report Modules ",
    icon: {
      normal: <ReportModules fill={"white"} />,
      active: <ReportModules fill={"#C5CAFF"} />,
    },
    route: "/admin/report-management",
  },
  {
    name: "Staff Management",
    icon: {
      normal: <StaffManagement fill={"white"} />,
      active: <StaffManagement fill={"#C5CAFF"} />,
    },
    route: "/admin/staff-management",
  },
  {
    name: "Content Management",
    icon: {
      normal: <ContentManagement fill={"white"} />,
      active: <ContentManagement fill={"#C5CAFF"} />,
    },
    route: "/admin/content-management",
  },
  {
    name: "Career Management",
    icon: {
      normal: <CareerManagement fill={"white"} />,
      active: <CareerManagement fill={"#C5CAFF"} />,
    },
    route: "/admin/career-management",
  },
  {
    name: "Catalogue Management",
    icon: {
      normal: <CatalogueManagement fill={"white"} />,
      active: <CatalogueManagement fill={"#C5CAFF"} />,
    },
    route: "/admin/catalogue-management",
  },
  {
    name: "Settings",
    icon: {
      normal: <Settings fill={"white"} />,
      active: <Settings fill={"#C5CAFF"} />,
    },
    route: "/admin/settings",
  },
  {
    name: "Logout",
    icon: {
      normal: <Logout fill={"white"} />,
      active: <Logout fill={"#C5CAFF"} />,
    },
    route: "/admin-auth/login",
  },
];
