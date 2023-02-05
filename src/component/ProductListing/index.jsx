import CardThree from "component/Home/subcomponents/CardThree";
import { useLocation } from "react-router-dom";
import { CustomSelect, CustomFilterAccordion } from "component/common";
import { SortingMenuList, wallpapersProductListing } from "config";
import React from "react";
import { history } from "service/helpers";
import WallpapersHeader from "assets/images/ProductListing/Wallpapers-Header.png";
import "./style.scss";
import { connect, useDispatch } from "react-redux";
import { commonStateList } from "service/actionType";

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

export const ProductSorting = ({ itemCount, itemLabel }) => {
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
        />
      </div>
    </div>
  );
};

export const ProductListingGrid = () => {
  return (
    <>
      <div className="filter-container">
        {wallpapersProductListing.map(({ itemheader, itemlist }, index) => (
          <CustomFilterAccordion
            key={index}
            itemheader={itemheader}
            itemlist={itemlist}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

const ProductListingFC = ({ productListingData }) => {
  const location = useLocation();
  const getLocation = location.state.name;
  const dispatch = useDispatch();
  const handleProductDetail = (prodData) => {
    history.push("/home/product-details/details");
    dispatch({
      type: commonStateList.productDetail,
      payload: prodData,
    });
  };
  return (
    <div className="product-listing-container">
      <ProductHeader bannerLabel={getLocation} />
      <div className="d-flex mt-4">
        <ProductListingGrid />
        <div className="d-flex flex-column w-100">
          <ProductSorting
            itemCount={productListingData.length + 1}
            itemLabel={getLocation}
          />
          <div className="card-container">
            <div className="row">
              {productListingData.map((prodData) => (
                <div key={prodData.id} className="col-4">
                  <CardThree
                    onClick={(prodData) => handleProductDetail(prodData)}
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

export const ProductListing = connect(mapStateToProps, null)(ProductListingFC);
