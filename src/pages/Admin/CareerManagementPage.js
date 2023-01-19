import CareerManagement from "component/Admin/DashboardPages/CareerManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CareerManagementClass extends Component {
  render() {
    return <CareerManagement />;
  }
}
export const CareerManagementPage = connect(null, null)(CareerManagementClass);
