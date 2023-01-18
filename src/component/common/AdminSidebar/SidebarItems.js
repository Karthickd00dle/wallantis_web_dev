import React from "react";
import Dashboard from "assets/icons/SidebarIcons/Dashboard";
import StaffManagement from "assets/icons/SidebarIcons/StaffManagement";
import Customer from "assets/icons/SidebarIcons/Customer";
import OrderManagement from "assets/icons/SidebarIcons/OrderManagement";
import CouponManagement from "assets/icons/SidebarIcons/CouponManagement";
import ProductManagement from "assets/icons/SidebarIcons/ProductManagement";
import InventoryMangement from "assets/icons/SidebarIcons/InventoryMangement";
import LeadManagement from "assets/icons/SidebarIcons/LeadManagement";
import BlogManagement from "assets/icons/SidebarIcons/BlogManagement";
import ReportModules from "assets/icons/SidebarIcons/ReportModules";
import ContentManagement from "assets/icons/SidebarIcons/ContentManagement";
import CareerManagement from "assets/icons/SidebarIcons/CareerMangement";
import CatalogueManagement from "assets/icons/SidebarIcons/CatalogueManagement";
import Settings from "assets/icons/SidebarIcons/Settings";
import Logout from "assets/icons/SidebarIcons/Logout";

export const sidebarItems = [
  {
    name: "Dashboard",
    icon: <Dashboard />,
    route: "/admin/dashboard",
  },
  {
    name: "Customer",
    icon: <Customer />,
    route: "/admin/customer",
  },
  {
    name: "Order Management",
    icon: <OrderManagement />,
    route: "/admin/order-management",
  },
  {
    name: "Product Management",
    icon: <ProductManagement />,
    route: "/admin/product-management",
  },
  {
    name: "Coupon Management",
    icon: <CouponManagement />,
    route: "/admin/coupon-management",
  },
  {
    name: "Inventory Management",
    icon: <InventoryMangement />,
    route: "/admin/inventory-management",
  },
  {
    name: "Lead Management",
    icon: <LeadManagement />,
    route: "/admin/lead-management",
  },
  {
    name: "Blog Management",
    icon: <BlogManagement />,
    route: "/admin/blog-management",
  },
  {
    name: "Report Modules ",
    icon: <ReportModules />,
    route: "/admin/report-management",
  },
  {
    name: "Staff Management",
    icon: <StaffManagement />,
    route: "/admin/staff-management",
  },
  {
    name: "Content Management",
    icon: <ContentManagement />,
    route: "/admin/content-management",
  },
  {
    name: "Career Management",
    icon: <CareerManagement />,
    route: "/admin/career-management",
  },
  {
    name: "Catalogue Management",
    icon: <CatalogueManagement />,
    route: "/admin/catalogue-management",
  },
  {
    name: "Settings",
    icon: <Settings />,
    route: "/admin/settings",
  },
  {
    name: "Logout",
    icon: <Logout />,
    route: "/admin/logout",
  },
];
