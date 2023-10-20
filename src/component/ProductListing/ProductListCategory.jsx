import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProductsApi } from "action/ProductsAct";
import { useParams, useLocation } from "react-router-dom";
import { ProductHeader } from "./ProductHeader";
import CardThree from "component/Home/subcomponents/CardThree";
import { ProductListingGrid } from "./ProductFilter";
import { ProductSorting } from "./ProductSorting";
import { history } from "service/helpers";

const ProductListCategoryFC = ({ getAllProductListApi }) => {
  const [checkedValues, setCheckedValues] = useState([]);
  const [pricevalue, setPriceValue] = useState([0, 10000]);
  const [productsData, setProductsData] = useState([]);

  const getAllProductsAPI = () => {
    getAllProductListApi()
      .then(({ response }) => {
        setProductsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching filter data:", error);
      });
  };

  useEffect(() => getAllProductsAPI(), []);
  const params = useParams();
  const loc = useLocation();
  console.log(loc, "location");
  const handleProductDetail = (prodData) => {
    history.push(`/home/product-details/${prodData._id}`);
  };
  return (
    <div className="product-listing-container">
      <ProductHeader bannerLabel="wallpaper" />
      <div className="d-flex mt-4">
        <ProductListingGrid
          locationLabel={"wallpaper"}
          maximumPrice={"10000"}
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
          pricevalue={pricevalue}
          setPriceValue={setPriceValue}
        />
        <div className="d-flex flex-column w-100">
          <ProductSorting itemCount={2} itemLabel={"wallpaper"} />
          <div className="card-container">
            <div className="row">
              {productsData.map((prodData) => (
                <div className="card-container-main col-4">
                  <CardThree
                    prodData={prodData}
                    onClickCard={(e) => handleProductDetail(e)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllProductListApi: getAllProductsApi,
    },
    dispatch
  );
};

const ProductListCategory = connect(
  null,
  mapDispatchToProps
)(ProductListCategoryFC);

export default ProductListCategory;
