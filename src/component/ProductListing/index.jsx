import React from "react";
import ProductHeader from "./ProductHeader";
import ProductListingGrid from "./ProductListingGrid";
import ProductSorting from "./ProductSorting";
import "./style.scss";

const ProductListing = () => {
  return (
    <div className="product-listing-container">
      <ProductHeader />
      <div className="d-flex mt-4">
        <ProductListingGrid />
        <ProductSorting />
      </div>
    </div>
  );
};

export default ProductListing;
