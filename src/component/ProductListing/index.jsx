import CardThree from "component/Home/subcomponents/CardThree";
import { useLocation } from "react-router-dom";
import { CustomSelect, CustomFilterAccordion } from "component/common";
import { SortingMenuList, productListingFilter } from "config";
import React, { useEffect, useState } from "react";
import { history } from "service/helpers";
import WallpapersHeader from "assets/images/ProductListing/Wallpapers-Header.png";
import "./style.scss";
import { connect, useDispatch } from "react-redux";
import { commonStateList } from "service/actionType";
import { bindActionCreators } from "redux";
import { sortingFunction } from "action/CommonAct";

export const ProductHeader = ({ bannerLabel }) => {
  return (
    <div className="product-banner-container py-3">
      <div className="product-banner-label-container">
        <label className="product-banner-label">{bannerLabel}</label>
      </div>
      <img
        width="100%"
        height="100%"
        src={WallpapersHeader}
        alt="product-banner"
      />
    </div>
  );
};

export const ProductSorting = ({ itemCount, itemLabel, itemData }) => {
  const dispatch = useDispatch();
  const [sorting] = useState();

  const handleSorting = ({ target: { value } }) => {
    let sortedData = sortingFunction(value, itemData);
    dispatch({ type: commonStateList.productListing, payload: sortedData });
  };
  return (
    <div className="sorting-container ">
      <div>
        <label className="label-item-count">{itemCount}</label>
        <label className="ps-1 label-item-label">{itemLabel}</label>
      </div>
      <div className="d-flex align-items-center">
        <label className="sort-by-text">Sort by</label>
        <CustomSelect
          menuItemList={SortingMenuList}
          inputStyle="selectdropdown"
          menuItemStyle="menu-item"
          name="sorting"
          value={sorting}
          onChange={(e) => handleSorting(e)}
        />
      </div>
    </div>
  );
};

export const ProductListingGrid = ({ checkedValues, setCheckedValues }) => {
  const handleCheck = (event) => {
    const { name } = event.target;
    if (event.target.checked) {
      setCheckedValues([...checkedValues, name]);
    } else {
      setCheckedValues(checkedValues.filter((v) => v !== name));
    }
  };
  return (
    <>
      <div className="filter-container">
        {productListingFilter.map(
          ({ itemheader, itemlist, itemlabel }, index) => (
            <CustomFilterAccordion
              key={index}
              itemheader={itemheader}
              itemlabel={itemlabel}
              itemlist={itemlist}
              index={index}
              onChange={handleCheck}
            />
          )
        )}
      </div>
    </>
  );
};

const ProductListingFC = ({ productListingData }) => {
  const [checkedValues, setCheckedValues] = useState([]);
  const location = useLocation();
  const [productData, setProductData] = useState(productListingData);
  const getLocation = location?.state?.name;
  const dispatch = useDispatch();

  const handleProductDetail = (prodData) => {
    dispatch({
      type: commonStateList.productDetail,
      payload: prodData,
    });
    history.push("/home/product-details");
  };

  const filteredCheckedValues = checkedValues.filter((v) =>
    productData
      .map((item) => {
        return item.category;
      })
      .includes(v)
  );

  console.log(filteredCheckedValues);
  useEffect(() => {
    return () => setProductData(productListingData);
  }, [productListingData]);
  return (
    <div className="product-listing-container">
      <ProductHeader bannerLabel={getLocation} />
      <div className="d-flex mt-4">
        <ProductListingGrid
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
        />
        <div className="d-flex flex-column w-100">
          <ProductSorting
            itemCount={productListingData.length + 1}
            itemLabel={getLocation}
            itemData={productListingData}
          />
          <div className="card-container">
            <div className="row">
              {checkedValues.length === 0
                ? productData?.map((prodData) => (
                    <div key={prodData.id} className="col-4">
                      <CardThree
                        onClick={(e) => handleProductDetail(e)}
                        prodData={prodData}
                      />
                    </div>
                  ))
                : productData
                    .filter((item) =>
                      checkedValues.some((value) => value === item.category)
                    )
                    ?.map((prodData) => (
                      <div key={prodData.id} className="col-4">
                        <CardThree
                          onClick={(e) => handleProductDetail(e)}
                          prodData={prodData}
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

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps,
    productListingData: state.commonStore.productListingState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ sortingFunctioncall: sortingFunction }, dispatch);
};

export const ProductListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListingFC);
