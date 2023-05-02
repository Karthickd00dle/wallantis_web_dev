import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProducts } from "action/ProductsAct";
import { useParams } from "react-router-dom";

const ProductListCategoryFC = () => {
  const { categoryId } = useParams();

  return (
    <div className="product-listing-container">
      <div className="d-flex mt-4">
        <div className="d-flex flex-column w-100">
          <div className="card-container">
            <div className="row">Hi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProductListApi: getAllProducts,
    },
    dispatch
  );
};

const ProductListCategory = connect(
  null,
  mapDispatchToProps
)(ProductListCategoryFC);

export default ProductListCategory;
