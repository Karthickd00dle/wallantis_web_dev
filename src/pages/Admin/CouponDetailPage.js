import CouponDetail from "component/Admin/DashboardPages/CouponDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CouponDetailPageClass extends Component {
  render() {
    return <CouponDetail/>;
  }
}
export const CouponDetailPage = connect(null, null)(CouponDetailPageClass);
