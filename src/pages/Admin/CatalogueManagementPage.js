import CatalogueManagement from "component/Admin/DashboardPages/CatalogueManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CatalogueManagementClass extends Component {
  render() {
    return <CatalogueManagement />;
  }
}
export const CatalogueManagementPage = connect(null, null)(CatalogueManagementClass);
