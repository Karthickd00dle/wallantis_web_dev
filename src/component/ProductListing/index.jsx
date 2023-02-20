import CardThree from "component/Home/subcomponents/CardThree";
import { useLocation } from "react-router-dom";
import { CustomSelect, CustomFilterAccordion } from "component/common";
import {
  SortingMenuList,
  productListingFilter,
  wallpaperProducts,
} from "config";
import React, { useEffect, useState } from "react";
import { history } from "service/helpers";
import WallpapersHeader from "assets/images/ProductListing/Wallpapers-Header.png";
import "./style.scss";
import { connect, useDispatch } from "react-redux";
import { commonStateList } from "service/actionType";
import { bindActionCreators } from "redux";
import { sortingFunction } from "action/CommonAct";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandIcon from "assets/icons/ExpandIcon";
import { CustomPriceRangeSlider } from "component/common/CustomPriceRangeSlider";

export function ProductHeader({ bannerLabel }) {
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
}

export const ProductSorting = ({ itemCount, itemLabel, itemData }) => {
  const dispatch = useDispatch();

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
          onChange={(e) => handleSorting(e)}
        />
      </div>
    </div>
  );
};

export const ProductListingGrid = ({
  checkedValues,
  setCheckedValues,
  maximumPrice,
  pricevalue,
  setPriceValue,
}) => {
  const handlePriceFilter = (event, newValue) => {
    setPriceValue(newValue);
  };
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
              wallpaperProducts={wallpaperProducts}
              onChange={handleCheck}
            />
          )
        )}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandIcon height={10} width={10} />}>
            <label className="filter-title cursor-pointer">Price</label>
          </AccordionSummary>
          <AccordionDetails>
            <CustomPriceRangeSlider
              maxValue={maximumPrice}
              pricevalue={pricevalue}
              onChange={handlePriceFilter}
            />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

const ProductListingFC = ({ productListingData }) => {
  const maximumPrice = Math.max(
    ...productListingData?.map(({ price }) => price)
  );
  const dispatch = useDispatch();
  const location = useLocation().pathname.split("/").slice(-1)[0];
  const [checkedValues, setCheckedValues] = useState([]);
  const [pricevalue, setPriceValue] = useState([0, maximumPrice]);
  const [productData, setProductData] = useState(productListingData);

  const handleProductDetail = (prodData) => {
    dispatch({
      type: commonStateList.productDetail,
      payload: prodData,
    });
    history.push("/home/product-details");
  };

  const filteredCheckedValues = checkedValues?.filter((v) =>
    productData
      ?.map((item) => {
        return item?.category;
      })
      .includes(v)
  );

  useEffect(() => {
    return () => setProductData(productListingData);
  }, [productListingData]);
  return (
    <div className="product-listing-container">
      <ProductHeader bannerLabel={location} />
      <div className="d-flex mt-4">
        <ProductListingGrid
          maximumPrice={maximumPrice}
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
          filteredCheckedValues={filteredCheckedValues}
          pricevalue={pricevalue}
          setPriceValue={setPriceValue}
        />
        <div className="d-flex flex-column w-100">
          <ProductSorting
            itemCount={productListingData?.length + 1}
            itemLabel={location}
            itemData={productListingData}
          />
          <div className="card-container">
            <div className="row">
              {checkedValues.length === 0
                ? productData
                    .filter(
                      ({ price }) =>
                        price >= pricevalue[0] && price <= pricevalue[1]
                    )
                    ?.map((prodData) => (
                      <div key={prodData.id} className="col-4">
                        <CardThree
                          onClick={(e) => handleProductDetail(e)}
                          prodData={prodData}
                        />
                      </div>
                    ))
                : productData
                    .filter(
                      ({ price }) =>
                        price >= pricevalue[0] && price <= pricevalue[1]
                    )
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

const ProductListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListingFC);

export default ProductListing;
