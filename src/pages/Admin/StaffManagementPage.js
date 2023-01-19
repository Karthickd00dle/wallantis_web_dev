import StaffManagement from "component/Admin/DashboardPages/StaffManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class StaffManagementClass extends Component {
  render() {
    return <StaffManagement />;
  }
}
export const StaffManagementPage = connect(null, null)(StaffManagementClass);
