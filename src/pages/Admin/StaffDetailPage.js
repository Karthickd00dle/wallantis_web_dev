import StaffDetail from "component/Admin/DashboardPages/StaffDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class StaffDetailPageClass extends Component {
  render() {
    return <StaffDetail/>;
  }
}
export const StaffDetailPage = connect(null, null)(StaffDetailPageClass);
