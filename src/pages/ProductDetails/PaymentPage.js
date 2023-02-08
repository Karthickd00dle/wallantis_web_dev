import { Payment } from "component/Home/ProductDetails/Payment";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class PaymentPageClass extends Component {
  render() {
    return <Payment />;
  }
}
export const PaymentPage = connect(null, null)(PaymentPageClass);
