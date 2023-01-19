import CouponManagement from "component/Admin/DashboardPages/CouponManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CouponManagementClass extends Component {
  render() {
    return <CouponManagement />;
  }
}
export const CouponManagementPage = connect(null, null)(CouponManagementClass);
