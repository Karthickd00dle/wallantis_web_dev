import React, { useEffect, useState } from "react";
import CustomRecipeWallpaper from "assets/images/OrderSummary/custom-recipe-wallpaper.png";
import "./style.scss";
import { connect } from "react-redux";
import { NormalInput } from "component/common";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import { getCartListing } from "action/CartAct";
export const OrderSummaryMain = ({ cartItemData, getCartListingAPI }) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [orderSummary, setOrderSummary] = useState(cartItemData);
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState("");
  useEffect(() => {
    setTotal(
      orderSummary.reduce((acc, curr) => {
        return Number(acc + curr.price);
      }, 0)
    );

    setOrderSummary(cartItemData);
  }, [orderSummary]);

  const getCartListing = () => {
    getCartListingAPI()
      .then((res) => {
        setCartData(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartListing();
  }, []);

  console.log(cartData, "cart daa");

  return (
    <div className="order-summary">
      <label className="text-title pb-3">Order Summary</label>
      <div
        className="d-flex align-items-center
      "
      >
        <img
          height="130px"
          width="130px"
          src={CustomRecipeWallpaper}
          alt="product icon"
        />
        <div className="ps-3">
          <p className="item-label">
            Custom Recipe wallpaper, Handwritten Recipe
          </p>
          <div className="d-flex justify-content-between order-count-container">
            <div className="me-1 order-count cursor-pointer">-</div>
            <NormalInput
              max="2"
              name="add"
              className="mx-1 order-count-input"
              value={orderSummary.length}
              register={register}
              errors={errors}
            />
            <div className="order-count ms-1 cursor-pointer">+</div>
          </div>
        </div>
      </div>
      <div className="order-installation-date">
        <label className="order-installation-text">
          Installation on Fri 25, Nov - 02:00PM
        </label>
        <p className="pe-3">Edit</p>
      </div>
      <div className="coupon-container py-4">
        <label className="coupon-text">Coupon</label>
        <TextField
          className="coupon-code-textbox mt-2"
          id="filled-start-adornment"
          InputProps={{
            endAdornment: (
              <label className="apply-coupon-text cursor-pointer">APPLY</label>
            ),
          }}
          variant="outlined"
        />
      </div>
      <div className="price-breakup-container py-3">
        <label className="price-breakup-text">Price Breakup Details</label>
        <div>
          <div
            className="d-flex justify-content-between
          "
          >
            <div className="d-flex flex-column justify-content-between">
              <label
                className="price-content-title
          "
              >
                Price ({cartData.totalQuantity} items)
              </label>
              <label
                className=" price-content-title
          "
              >
                Delivery Charges
              </label>
              <label
                className="price-content-title
          "
              >
                Packaging Charges
              </label>
              <label
                className="price-content-title
          "
              >
                Installation Charges
              </label>
              <label
                className="price-content-title
          "
              >
                GST Charges
              </label>
            </div>
            <div className="d-flex flex-column justify-content-between">
              <label
                className="price-content-item
          "
              >
                ₹ {cartData.cartAmount}
              </label>
              <label
                className="text-green-15 price-content-title
          "
              >
                {`₹ ${cartData.deliveryCharge}`}
              </label>
              <label
                className="price-content-item
          "
              >
                {`₹ ${cartData.packingCharges}`}
              </label>
              <label
                className="price-content-item
          "
              >
                ₹ 499
              </label>
              <label
                className="price-content-item
          "
              >
                ₹ {cartData.GSTCharges}
              </label>
            </div>
          </div>
          <div className="sub-total-coupon-container py-1 my-1 d-flex justify-content-between">
            <div className="d-flex flex-column">
              <label
                className="price-content-title
          "
              >
                Sub Total Price
              </label>
              <label
                className="price-content-title
          "
              >
                Coupon Discount
              </label>
            </div>
            <div className="d-flex flex-column">
              <label
                className="price-content-item
          "
              >
                ₹ 3297
              </label>
              <label
                className="price-content-item
          "
              >
                ₹ 298
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <label
              className="price-content-title
          "
            >
              Total Amount to be paid
            </label>
            <label
              className="text-light_bg fw-700 fs-24 price-content-item 
          "
            >
              ₹ {cartData.totalPrice}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItemData: state.commonStore.cartItemState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCartListingAPI: getCartListing,
    },
    dispatch
  );
};

export const OrderSummary = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummaryMain);
