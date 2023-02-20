import React from "react";
// Redux Connection
import { ProductListing } from "component/ProductListing";
import { connect } from "react-redux";

export function ProductListingPageClass() {
  return <ProductListing />;
}
export const ProductListingPage = connect(null, null)(ProductListingPageClass);
