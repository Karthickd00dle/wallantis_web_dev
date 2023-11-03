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
import { getSubCategory } from "action/CategoryAct";

const ProductListSubCategoryFC = ({
  getFilteredProductListApi,
  getSubCategoryApi,
}) => {
  let params = useParams();

  let maxValue = "10000";
  const [checkedValues, setCheckedValues] = useState({
    subCategoryId: [],
    roomId: [],
    collectionId: [],
    colorId: [],
  });
  const [pricevalue, setPriceValue] = useState([0, maxValue]);
  const [productsData, setProductsData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState({});
  const [page, setPage] = useState({});

  const getAllProductsAPI = () => {
    const { roomId, collectionId, colorId } = checkedValues;

    let body = {
      page: 1,
      limit: 10,
      roomId: roomId,
      collectionId: collectionId,
      color: colorId,
      start_price: "1",
      end_price: "10000",
      sort: "",
    };

    getFilteredProductListApi(body)
      .then(({ response }) => {
        setProductsData(response.data);
        setPage(response.pageMeta);
      })
      .catch((error) => {
        console.error("Error fetching filter data:", error);
      });
  };

  const getSubCategoryAPI = () => {
    let query = {
      url_id: params.subCategoryId,
    };
    getSubCategoryApi(query)
      .then((response) => {
        setSubCategoryData(response);
      })
      .catch((error) => {
        console.error("Error fetching filter data:", error);
      });
  };

  useEffect(() => getAllProductsAPI(), [params, checkedValues]);
  useEffect(() => getSubCategoryAPI(), [params]);

  const handleProductDetail = (prodData) => {
    history.push(`/home/product-details/${prodData._id}`);
  };
  return (
    <div className="product-listing-container">
      <ProductHeader
        bannerLabel={subCategoryData.subCategory}
        bannerImage={subCategoryData.bannerimage}
      />
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
      getSubCategoryApi: getSubCategory,
    },
    dispatch
  );
};

const ProductListSubCategory = connect(
  null,
  mapDispatchToProps
)(ProductListSubCategoryFC);

export default ProductListSubCategory;
