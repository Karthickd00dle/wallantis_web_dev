import OrderManagement from "component/Admin/DashboardPages/OrderManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class OrderManagementClass extends Component {
  render() {
    return <OrderManagement />;
  }
}
export const OrderManagementPage = connect(null, null)(OrderManagementClass);
