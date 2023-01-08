import { CartSummary } from "component/Home/CartSummary";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CartSummaryClass extends Component {
  render() {
    return <CartSummary />;
  }
}
export const CartSummaryPage = connect(null, null)(CartSummaryClass);
