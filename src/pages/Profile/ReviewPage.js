import ReviewAndFeedback from "component/Profile/MyOrders/ReviewAndFeedback";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ReviewComponent extends Component {
  render() {
    return <ReviewAndFeedback />;
  }
}
export const ReviewPage = connect(null, null)(ReviewComponent);
