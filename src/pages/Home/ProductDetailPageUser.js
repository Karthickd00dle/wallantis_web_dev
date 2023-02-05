import { ProductDetail } from "component/ProductDetail";
import React from "react";
import { connect } from "react-redux";

function ProductDetailPageUserFC() {
  return (
    <div>
      <ProductDetail />
    </div>
  );
}
export const ProductDetailPageUser = connect(
  null,
  null
)(ProductDetailPageUserFC);
