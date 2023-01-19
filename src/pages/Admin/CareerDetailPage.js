import CareerDetail from "component/Admin/DashboardPages/CareerDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CareerDetailPageClass extends Component {
  render() {
    return <CareerDetail/>;
  }
}
export const CareerDetailPage = connect(null, null)(CareerDetailPageClass);
