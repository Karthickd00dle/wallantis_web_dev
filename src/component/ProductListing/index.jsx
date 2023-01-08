import CardThree from "component/Home/subcomponents/CardThree";
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
        <div className="d-flex flex-column w-100">
          <ProductSorting />
          <div className="card-container">
            <CardThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
