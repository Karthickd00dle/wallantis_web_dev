import React, { useEffect, useState } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFilteredProductApi } from "action/ProductsAct";
import { useParams,useLocation } from "react-router-dom";
import { ProductHeader } from "./ProductHeader";
import CardThree from "component/Home/subcomponents/CardThree";
import { ProductListingGrid } from "./ProductFilter";
import { ProductSorting } from "./ProductSorting";
import { history } from "service/helpers";
import { getCategory } from "action/CategoryAct";
import { CustomPagination } from "component/common/CustomPagination";
import { getNewArraivalApi,getRecentViewApi,getBestSellerViewApi } from "action/ProductsAct";

const ProductListViewAll = ({
  getCategoryApi,
  getAllNewArraivalAPI,getAllRecentAPI,getAllBestSellerViewAPI,
}) => {
  let params = useParams();
  let location = useLocation();
  console.log(location.state)
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


  const handlePagination = (e, value) => {
    setPage((prevState) => ({ ...prevState, page: value }));
  };

  // useEffect(
  //   () => getAllProductsAPI(),
  //   [params, checkedValues, pricevalue, sortType, page.page]
  // );
  // useEffect(() => getCategoryAPI(), [params]);
  useEffect(() => {
    switch (location.state.pageName) {
      case "New Arrival":
        getAllNewArraival();
        getCategoryAPI();

        break;
      case "Recently Viewed":
        getAllRecentView();
        getCategoryAPI();

        break;
      case "Best Seller":
        getAllBestSeller();
        getCategoryAPI();

        break;
      default:
        getAllNewArraival();
    }
  }, []);

  const getCategoryAPI = () => {
    let query = {
      url_id: location?.state?.categoryId?._id
    };
    getCategoryApi(query)
      .then((response) => {
        console.log(response)
        setCategoryData(response);
      })
      .catch((error) => {
        console.error("Error fetching filter data:", error);
      });
  };

  const handleProductDetail = (prodData) => {
    history.push(`/home/product-details/${prodData._id}`);
  };


  const getAllNewArraival = () => {
    getAllNewArraivalAPI().then((res) => {
      setProductsData(res?.response)
    });
  }
  const getAllRecentView = () => {
    getAllRecentAPI().then((res) => {
      console.log("GET RECENT ", res?.response)
      setProductsData(res?.response)
    });
  }
  const getAllBestSeller = () => {
    getAllBestSellerViewAPI().then((res) => {
      console.log("BEST SELLER  ", res?.response)
      setProductsData(res?.response)
    });
  }
  console.log("my urllllllll",categoryData?.bannerimage)
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
            itemLabel={location.state.pageName}
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
      getAllNewArraivalAPI: getNewArraivalApi,
      getAllRecentAPI: getRecentViewApi,
      getAllBestSellerViewAPI: getBestSellerViewApi,
      getCategoryApi: getCategory,

    },
    dispatch
  );
};

const ProductListCategory = connect(
  null,
  mapDispatchToProps
)(ProductListViewAll);

export default ProductListCategory;
