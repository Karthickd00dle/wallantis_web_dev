import OrderDetails from "component/Profile/MyOrders/OrderDetails";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class OrderDetailsClass extends Component {
  render() {
    return <OrderDetails />;
  }
}
export const OrderDetailsPage = connect(null, null)(OrderDetailsClass);
