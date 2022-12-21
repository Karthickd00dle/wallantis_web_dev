import ProductListing from "component/ProductListing";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ProductListingPageClass extends Component {
  render() {
    return <ProductListing />;
  }
}
export const ProductListingPage = connect(null, null)(ProductListingPageClass);
