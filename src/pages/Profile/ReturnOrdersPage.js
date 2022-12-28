import ReturnOrder from "component/Profile/MyOrders/ReturnOrder";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ReturnOrderComponent extends Component {
  render() {
    return <ReturnOrder />;
  }
}
export const ReturnOrderPage = connect(null, null)(ReturnOrderComponent);
