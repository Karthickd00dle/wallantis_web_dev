import CustomerDetail from "component/Admin/DashboardPages/CustomerDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CustomerDetailPageClass extends Component {
  render() {
    return "ABC";
  }
}
export const CustomerDetailPage = connect(null, null)(CustomerDetailPageClass);
