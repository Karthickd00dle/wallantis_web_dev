import CatalogueDetail from "component/Admin/DashboardPages/CatalogueDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CatalogueDetailPageClass extends Component {
  render() {
    return <CatalogueDetail/>;
  }
}
export const CatalogueDetailPage = connect(null, null)(CatalogueDetailPageClass);
