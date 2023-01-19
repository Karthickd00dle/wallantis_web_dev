import Dashboard from "component/Admin/DashboardPages/Dashboard/Dashboard";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class DashboardPageClass extends Component {
  render() {
    return <Dashboard />;
  }
}
export const DashboardPage = connect(null, null)(DashboardPageClass);
