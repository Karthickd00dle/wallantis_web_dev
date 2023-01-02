import { OrderSuccess } from "component";
import { Home } from "component/Home/Home";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class OrderSuccessPageClass extends Component {
  render() {
    return <OrderSuccess />;
  }
}
export const OrderSuccessPage = connect(null, null)(OrderSuccessPageClass);
