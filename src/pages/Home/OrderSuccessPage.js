import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";
import { OrderSuccess } from "component/Home/CartSummary/OrderSuccess";

export class OrderSuccessPageClass extends Component {
  render() {
    return <OrderSuccess />;
  }
}
export const OrderSuccessPage = connect(null, null)(OrderSuccessPageClass);
