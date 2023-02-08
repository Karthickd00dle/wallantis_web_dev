import ProductDetail from "component/Admin/DashboardPages/ProductDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ProductDetailPageClass extends Component {
  render() {
    return <ProductDetail />;
  }
}
export const ProductDetailPage = connect(null, null)(ProductDetailPageClass);
