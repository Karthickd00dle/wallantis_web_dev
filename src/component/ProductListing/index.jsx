import React from "react";
import ProductHeader from "./ProductHeader";
import ProductListingGrid from "./ProductListingGrid";
import "./style.scss";

const ProductListing = () => {
  return (
    <div className="product-listing-container">
      <ProductHeader />
      <ProductListingGrid />
    </div>
  );
};

export default ProductListing;
