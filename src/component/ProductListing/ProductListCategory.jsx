import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFilteredProductApi } from "action/ProductsAct";
import { useParams } from "react-router-dom";
import { ProductHeader } from "./ProductHeader";
import CardThree from "component/Home/subcomponents/CardThree";
import { ProductListingGrid } from "./ProductFilter";
import { ProductSorting } from "./ProductSorting";
import { history } from "service/helpers";
import { getCategory } from "action/CategoryAct";

const ProductListCategoryFC = ({
  getFilteredProductListApi,
  getCategoryApi,
}) => {
  let params = useParams();

  let maxValue = "10000";
  const [checkedValues, setCheckedValues] = useState({
    subCategoryId: [],
    roomId: [],
    collectionId: [],
    colorNameId: [],
  });
  const [pricevalue, setPriceValue] = useState([0, maxValue]);
  const [productsData, setProductsData] = useState([]);
  const [categoryData, setCategoryData] = useState();
  const [page, setPage] = useState({});

  const getAllProductsAPI = () => {
    const { subCategoryId, roomId, collectionId, colorNameId } = checkedValues;
    console.log(checkedValues, "chc");
    let body = {
      page: 1,
      limit: 10,
      categoryId: [params.categoryId],
      subCategoryId: subCategoryId,
      roomId: roomId,
      collectionId: collectionId,
      color: colorNameId,
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

  const getCategoryAPI = () => {
    let query = {
      url_id: params.categoryId,
    };
    getCategoryApi(query)
      .then((response) => {
        setCategoryData(response);
      })
      .catch((error) => {
        console.error("Error fetching filter data:", error);
      });
  };
  useEffect(() => getAllProductsAPI(), [params, checkedValues]);
  useEffect(() => getCategoryAPI(), [params]);

  const handleProductDetail = (prodData) => {
    history.push(`/home/product-details/${prodData._id}`);
  };
  return (
    <div className="product-listing-container">
      <ProductHeader
        bannerLabel={categoryData?.category}
        bannerImage={categoryData?.bannerimage}
      />
      <div className="d-flex mt-4">
        <ProductListingGrid
          isViewAll
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
      getCategoryApi: getCategory,
    },
    dispatch
  );
};

const ProductListCategory = connect(
  null,
  mapDispatchToProps
)(ProductListCategoryFC);

export default ProductListCategory;
