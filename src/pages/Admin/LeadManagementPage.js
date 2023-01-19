import LeadManagement from "component/Admin/DashboardPages/LeadManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class LeadManagementClass extends Component {
  render() {
    return <LeadManagement />;
  }
}
export const LeadManagementPage = connect(null, null)(LeadManagementClass);
