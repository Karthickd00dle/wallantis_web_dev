// import Dashboard from "component/Admin/DashboardPages/Dashboard/Dashboard";
import Customer from "component/Admin/DashboardPages/Customer";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CustomerPageClass extends Component {
  render() {
    return <Customer />;
  }
}
export const CustomerPage = connect(null, null)(CustomerPageClass);
