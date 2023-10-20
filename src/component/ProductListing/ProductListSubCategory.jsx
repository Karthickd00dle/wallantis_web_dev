import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProductsApi } from "action/ProductsAct";
import { useParams } from "react-router-dom";

const ProductListSubCategoryFC = () => {
  const params = useParams();
  console.log(params, "idd");
  return (
    <div className="product-listing-container">
      <div className="d-flex mt-4">
        <div className="d-flex flex-column w-100">
          <div className="card-container">
            <div className="row">HEllo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProductListApi: getAllProductsApi,
    },
    dispatch
  );
};

const ProductListSubCategory = connect(
  null,
  mapDispatchToProps
)(ProductListSubCategoryFC);

export default ProductListSubCategory;
