import React from "react";

import DashboardIconSVGComponent from "assets/svg/Admin/Dashboard";
import CustomerIconSVGComponent from "assets/svg/Admin/Customer";
import OrderManagentIconSVGComponent from "assets/svg/Admin/OrderManagement";
import ProductManagementSVGComponent from "assets/svg/Admin/ProductManagement";
import CouponManagementSVGComponent from "assets/svg/Admin/CouponMangement";
import { Inventory } from "@mui/icons-material";
import InventoryIconSVGComponent from "assets/svg/Admin/InventoryManagement";
import LeadIconSVGComponent from "assets/svg/Admin/LeadManagement";


export const sidebarItems = [
  {
    name: "Dashboard",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/dashboard",
  },
  {
    name: "Customer",
    icon: {
      normal: <CustomerIconSVGComponent fill={"white"}/>,
      active: <CustomerIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/customer",
  },
  {
    name: "Order Management",
    icon: {
      normal: <OrderManagentIconSVGComponent fill={"white"}/>,
      active: <OrderManagentIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/order-management",
  },
  {
    name: "Product Management",
    icon: {
      normal: <ProductManagementSVGComponent fill={"white"}/>,
      active: <ProductManagementSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/product-management",
  },
  {
    name: "Coupon Management",
    icon: {
      normal: <CouponManagementSVGComponent fill={"white"}/>,
      active: <CouponManagementSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/coupon-management",
  },
  {
    name: "Inventory Management",
    icon: {
      normal: <InventoryIconSVGComponent fill={"white"}/>,
      active: <InventoryIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/inventory-management",
  },
  {
    name: "Lead Management",
    icon: {
      normal: <LeadIconSVGComponent fill={"white"}/>,
      active: <LeadIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/lead-management",
  },
  {
    name: "Blog Management",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/blog-management",
  },
  {
    name: "Report Modules ",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/report-management",
  },
  {
    name: "Staff Management",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/staff-management",
  },
  {
    name: "Content Management",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/content-management",
  },
  {
    name: "Career Management",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/career-management",
  },
  {
    name: "Catalogue Management",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/catalogue-management",
  },
  {
    name: "Settings",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/settings",
  },
  {
    name: "Logout",
    icon: {
      normal: <DashboardIconSVGComponent fill={"white"}/>,
      active: <DashboardIconSVGComponent fill={"#C5CAFF"}/>
    },
    route: "/admin/logout",
  },
];
