import Reports from "component/Admin/DashboardPages/Report";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ReportPageClass extends Component {
  render() {
    return <Reports />;
  }
}
export const ReportPage = connect(null, null)(ReportPageClass);
