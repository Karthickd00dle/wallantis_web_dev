import OrderDetail from "component/Admin/DashboardPages/OrderDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class OrderDetailPageClass extends Component {
  render() {
    return <OrderDetail/>;
  }
}
export const OrderDetailPage = connect(null, null)(OrderDetailPageClass);
