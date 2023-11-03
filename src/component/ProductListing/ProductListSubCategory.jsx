import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFilteredProductApi } from "action/ProductsAct";
import { useParams } from "react-router-dom";
import CardThree from "component/Home/subcomponents/CardThree";
import { ProductSorting } from "./ProductSorting";
import { ProductListingGrid } from "./ProductFilter";
import { ProductHeader } from "./ProductHeader";
import { history } from "service/helpers";

const ProductListSubCategoryFC = ({ getFilteredProductListApi }) => {
  let params = useParams();

  let maxValue = "10000";
  const [checkedValues, setCheckedValues] = useState({
    subCategory: [],
    roomId: [],
    collectionId: [],
    colorId: [],
  });
  const [pricevalue, setPriceValue] = useState([0, maxValue]);
  const [productsData, setProductsData] = useState([]);
  const [page, setPage] = useState({});
  console.log(checkedValues, "checkk");
  const getAllProductsAPI = () => {
    const { subCategory, roomId, collectionId, colorId } = checkedValues;

    let body = {
      page: 1,
      limit: 10,
      categoryId: [params.categoryId],
      subcategoryId: [params.subCategoryId],
      start_price: "1",
      end_price: "10000",
      sort: "",
    };

    if (subCategory.length > 0) {
      body.subCategoryId = subCategory;
    }
    if (roomId.length > 0) {
      body.roomId = roomId;
    }
    if (collectionId.length > 0) {
      body.collectionId = collectionId;
    }
    if (colorId.length > 0) {
      body.color = colorId;
    }

    getFilteredProductListApi(body)
      .then(({ response }) => {
        setProductsData(response.data);
        setPage(response.pageMeta);
      })
      .catch((error) => {
        console.error("Error fetching filter data:", error);
      });
  };

  useEffect(() => getAllProductsAPI(), [params, checkedValues]);

  const handleProductDetail = (prodData) => {
    history.push(`/home/product-details/${prodData._id}`);
  };
  return (
    <div className="product-listing-container">
      <ProductHeader bannerLabel="wallpaper" />
      <div className="d-flex mt-4">
        <ProductListingGrid
          locationLabel={"wallpaper"}
          maximumPrice={maxValue}
          setCheckedValues={setCheckedValues}
          pricevalue={pricevalue}
          setPriceValue={setPriceValue}
        />
        <div className="d-flex flex-column w-100">
          <ProductSorting itemCount={page.total} itemLabel={"wallpaper"} />
          <div className="card-container">
            <div className="row">
              {productsData.map((prodData) => (
                <div className="card-container-main col-4" key={prodData._id}>
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
      getFilteredProductListApi: getFilteredProductApi,
    },
    dispatch
  );
};

const ProductListSubCategory = connect(
  null,
  mapDispatchToProps
)(ProductListSubCategoryFC);

export default ProductListSubCategory;
