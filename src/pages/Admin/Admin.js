import AdminComponent from "component/Admin";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class AdminPageClass extends Component {
  render() {
    return <AdminComponent />;
  }
}
export const AdminPage = connect(null, null)(AdminPageClass);
