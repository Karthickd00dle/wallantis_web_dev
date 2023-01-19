import ProductManagement from "component/Admin/DashboardPages/ProductManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ProductManagementClass extends Component {
  render() {
    return <ProductManagement />;
  }
}
export const ProductManagementPage = connect(
  null,
  null
)(ProductManagementClass);
