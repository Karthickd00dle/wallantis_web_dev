import InventoryManagement from "component/Admin/DashboardPages/InventoryManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class InventoryManagementClass extends Component {
  render() {
    return <InventoryManagement />;
  }
}
export const InventoryManagementPage = connect(null, null)(InventoryManagementClass);
