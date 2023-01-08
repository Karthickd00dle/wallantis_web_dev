import { ProductDetails } from "component/Home/ProductDetails";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ProductDetailsClass extends Component {
  render() {
    return <ProductDetails />;
  }
}
export const ProductDetailsPage = connect(null, null)(ProductDetailsClass);
