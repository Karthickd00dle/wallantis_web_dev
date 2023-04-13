import CardThree from "component/Home/subcomponents/CardThree";
import { useLocation } from "react-router-dom";
import { CustomSelect, CustomFilterAccordion } from "component/common";
import { SortingMenuList, productItems, productBanner } from "config";
import React, { useEffect, useState } from "react";
import { history } from "service/helpers";
import "./style.scss";
import { connect, useDispatch } from "react-redux";
import { commonStateList } from "service/actionType";
import { bindActionCreators } from "redux";
import { sortingFunction } from "action/CommonAct";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandIcon from "assets/icons/ExpandIcon";
import { CustomPriceRangeSlider } from "component/common/CustomPriceRangeSlider";
import { productfilter } from "service/helperFunctions";

export function ProductHeader({ bannerLabel }) {
  const bannerImage = productBanner.filter((data) => data.type === bannerLabel);

  return (
    <div className="product-banner-container py-3">
      <div className="product-banner-label-container">
        <label className="product-banner-label">{bannerLabel}</label>
      </div>

      <img
        width="100%"
        height="505px"
        src={bannerImage[0].image}
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
        <label className="label-item-count">{itemCount - 1}</label>
        <label className="ps-1 label-item-label">{itemLabel}</label>
      </div>
      <div className="d-flex align-items-center">
        <label className="sort-by-text">Sort by</label>
        <CustomSelect
          menuItemList={SortingMenuList}
          inputStyle="sorting-menu-style"
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
  locationLabel,
}) => {
  const handlePriceFilter = (event, newValue) => {
    setPriceValue(newValue);
  };

  const handleCheck = ({ target: { name, checked } }) => {
    if (checked) {
      setCheckedValues([...checkedValues, name]);
    } else {
      setCheckedValues(checkedValues.filter((v) => v !== name));
    }
  };

  return (
    <>
      <div className="filter-container">
        {productfilter(locationLabel).map(
          ({ itemheader, itemlist, itemlabel }, index) => (
            <CustomFilterAccordion
              key={index}
              itemheader={itemheader}
              itemlabel={itemlabel}
              itemlist={itemlist}
              index={index}
              productItems={productItems}
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

const ProductListingFC = ({ cartItemData, productListingData }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationLabel = location?.pathname
    .split("/")
    .slice(-1)[0]
    .replace(/-/g, " ");

  const maximumPrice = Math.max(
    ...productListingData?.map(({ price }) => price)
  );

  const [checkedValues, setCheckedValues] = useState([]);
  const [cartData, setCartData] = useState(cartItemData);
  const [favData, setFavData] = useState([]);
  const [pricevalue, setPriceValue] = useState([0, maximumPrice]);
  const [productData, setProductData] = useState(productListingData);

  const handleProductDetail = (prodData) => {
    dispatch({
      type: commonStateList.productDetail,
      payload: prodData,
    });
    history.push("/home/product-details");
  };

  const filterProducts = () => {
    switch (locationLabel) {
      case "wallpaper":
        return setProductData(
          productListingData.filter(
            (item) => item.category === "Wallpaper" && item.type === "wallpaper"
          )
        );

      case "sticker wallpaper":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Sticker Wallpaper" && item.type === "wallpaper"
          )
        );

      case "wall murals":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Wall Murals" && item.type === "wallpaper"
          )
        );
      case "all wallpaper":
        return setProductData(
          productListingData.filter((item) => item.type === "wallpaper")
        );
      case "wooden flooring":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Wooden Flooring" && item.type === "flooring"
          )
        );
      case "lvp plank":
        return setProductData(
          productListingData.filter(
            (item) => item.category === "LVP Plank" && item.type === "flooring"
          )
        );
      case "all flooring":
        return setProductData(
          productListingData.filter((item) => item.type === "flooring")
        );
      case "vertical blinds":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Vertical Blinds" && item.type === "blinds"
          )
        );
      case "roller blinds":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Roller Blinds" && item.type === "blinds"
          )
        );
      case "zebra blinds":
        return setProductData(
          productListingData.filter(
            (item) => item.category === "Zebra Blinds" && item.type === "blinds"
          )
        );
      case "chick blinds":
        return setProductData(
          productListingData.filter(
            (item) => item.category === "Chick Blinds" && item.type === "blinds"
          )
        );
      case "wooden blinds":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Wooden Blinds" && item.type === "blinds"
          )
        );
      case "customized blinds":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Customized Blinds" && item.type === "blinds"
          )
        );
      case "all blinds":
        return setProductData(
          productListingData.filter((item) => item.type === "blinds")
        );
      case "vertical gardens":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Vertical Gardens" &&
              item.type === "artificial grass"
          )
        );
      case "hanging flowers":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Hanging Flowers" &&
              item.type === "artificial grass"
          )
        );
      case "artificial grass":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Artificial Grass" &&
              item.type === "artificial grass"
          )
        );
      case "all artificial grass":
        return setProductData(
          productListingData.filter((item) => item.type === "artificial grass")
        );
      case "gym tiles square":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "GYM Tiles Square" &&
              item.type === "gym flooring"
          )
        );
      case "gym tiles interlock":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "GYM Tiles Interlock" &&
              item.type === "gym flooring"
          )
        );
      case "gym tiles hexagonal":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "GYM Tiles Hexagonal" &&
              item.type === "gym flooring"
          )
        );
      case "gym rolls":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "GYM Rolls" && item.type === "gym flooring"
          )
        );
      case "sports flooring":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Sports Flooring" &&
              item.type === "gym flooring"
          )
        );
      case "yoga mat":
        return setProductData(
          productListingData.filter(
            (item) =>
              item.category === "Yoga Mat" && item.type === "gym flooring"
          )
        );
      case "all gym flooring":
        return setProductData(
          productListingData.filter((item) => item.type === "gym flooring")
        );
      default:
        return null;
    }
  };
  useEffect(() => {
    filterProducts();
  }, [locationLabel]);
  return (
    <div className="product-listing-container">
      <ProductHeader bannerLabel={locationLabel} />
      <div className="d-flex mt-4">
        <ProductListingGrid
          locationLabel={locationLabel}
          maximumPrice={maximumPrice}
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
          pricevalue={pricevalue}
          setPriceValue={setPriceValue}
        />
        <div className="d-flex flex-column w-100">
          <ProductSorting
            itemCount={productData?.length + 1}
            itemLabel={locationLabel}
            itemData={productData}
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
                      <div
                        key={prodData.id}
                        className="card-container-main col-4"
                      >
                        <CardThree
                          cartData={cartData}
                          favData={favData}
                          setCartData={setCartData}
                          setFavData={setFavData}
                          onClickCard={(e) => handleProductDetail(e)}
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
                      checkedValues.some(
                        (value) =>
                          value === item.category || value === item.sub_category
                      )
                    )
                    ?.map((prodData) => (
                      <div key={prodData.id} className="col-4">
                        <CardThree
                          onClickCard={(e) => handleProductDetail(e)}
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
    cartItemData: state.commonStore.cartItemState,
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
