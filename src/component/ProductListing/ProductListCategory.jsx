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
import { CustomPagination } from "component/common/CustomPagination";

const ProductListCategoryFC = ({
  getFilteredProductListApi,
  getCategoryApi,
}) => {
  let params = useParams();

  const [checkedValues, setCheckedValues] = useState({
    subCategoryId: [],
    roomNameId: [],
    collectionNameId: [],
    colorNameId: [],
  });

  const [productsData, setProductsData] = useState([]);
  const [categoryData, setCategoryData] = useState();
  const [page, setPage] = useState({});
  const [pricevalue, setPriceValue] = useState([1, 10000]);
  const [sortType, setSortType] = useState();

  const getAllProductsAPI = () => {
    const { subCategoryId, roomNameId, collectionNameId, colorNameId } =
      checkedValues;

    let body = {
      page: page.page,
      limit: 10,
      categoryId: [params.categoryId],
      subCategoryId: subCategoryId,
      roomId: roomNameId,
      collectionId: collectionNameId,
      color: colorNameId,
      start_price: pricevalue[0],
      end_price: pricevalue[1],
      sort: sortType,
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

  const handlePagination = (e, value) => {
    setPage((prevState) => ({ ...prevState, page: value }));
  };

  useEffect(
    () => getAllProductsAPI(),
    [params, checkedValues, pricevalue, sortType, page.page]
  );
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
          maximumPrice={10000}
          setCheckedValues={setCheckedValues}
          pricevalue={pricevalue}
          setPriceValue={setPriceValue}
        />
        <div className="d-flex flex-column w-100">
          <ProductSorting
            itemCount={page.total}
            itemLabel={"wallpaper"}
            setSortType={setSortType}
          />
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
            <CustomPagination
              className="my-5"
              currentPage={page.page}
              pageCount={page.pageCount}
              onChange={handlePagination}
            />
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
