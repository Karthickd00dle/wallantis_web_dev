import CardThree from "component/Home/subcomponents/CardThree";
import React from "react";
import { history } from "service/helpers";
import ProductHeader from "./ProductHeader";
import ProductListingGrid from "./ProductListingGrid";
import ProductSorting from "./ProductSorting";
import "./style.scss";

const ProductListing = () => {
  const onClick = () => {
    history.push("/home/product-details/details");
  };
  return (
    <div className="product-listing-container">
      <ProductHeader />
      <div className="d-flex mt-4">
        <ProductListingGrid />
        <div className="d-flex flex-column w-100">
          <ProductSorting />
          <div className="card-container">
            {/* <CardThree onClick={onClick} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
