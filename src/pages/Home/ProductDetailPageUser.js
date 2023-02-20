import React from "react";
import { connect } from "react-redux";
import { ProductDetail } from "component/ProductDetail";

function ProductDetailPageUserFC() {
  return <ProductDetail />;
}
export const ProductDetailPageUser = connect(
  null,
  null
)(ProductDetailPageUserFC);
