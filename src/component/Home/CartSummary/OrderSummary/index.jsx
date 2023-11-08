import React, { useEffect, useState } from "react";
import CustomRecipeWallpaper from "assets/images/OrderSummary/custom-recipe-wallpaper.png";
import "./style.scss";
import { connect } from "react-redux";
import { CustomDialog, NormalInput } from "component/common";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import { getCartListing, updateCart } from "action/CartAct";
import {
  conditionalLoad,
  customMomentFormat,
  ternaryCondition,
} from "service/helperFunctions";
// import { InstallerDateTime } from "component/common/InstallerDataTime";
import InstallerDateTime from "component/common/InstallerDataTime";

export const OrderSummaryMain = ({
  cartData,
  activeCartItem,
  getCartListingAPI,
  updateCartCallBack,
  updateCartAPI,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [cartSummaryInfo, setCartSummaryInfo] = useState([]);

  const [openinstallerDateTime, setOpeninstallerDateTime] = useState(false);

  const getCartListing = () => {
    getCartListingAPI()
      .then((res) => {
        setCartSummaryInfo(res.response.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [installerDate, setInstallerDate] = useState(
    ternaryCondition(
      activeCartItem,
      activeCartItem?.installerDate,
      cartSummaryInfo[0]?.installerDate
    )
  );
  console.log(installerDate, "installer date");
  const [installerTime, setInstallerTime] = useState(
    ternaryCondition(
      activeCartItem,
      activeCartItem?.installerTime,
      cartSummaryInfo[0]?.installerTime
    )
  );
  const updateCart = () => {
    let query = {
      url_id: ternaryCondition(
        activeCartItem,
        activeCartItem?.id,
        cartSummaryInfo[0]?._id
      ),
    };
    let body = {
      quantity: ternaryCondition(
        activeCartItem,
        activeCartItem?.quantity,
        cartSummaryInfo[0]?.quantity
      ),
      color: ternaryCondition(
        activeCartItem,
        activeCartItem?.color,
        cartSummaryInfo[0]?.color
      ),
      installer: ternaryCondition(
        activeCartItem,
        activeCartItem?.installer,
        cartSummaryInfo[0]?.installer
      ),
    };

    const getBody = (installer) => {
      if (installer) {
        return {
          ...body,
          installerDate: installerDate,
          installerTime: installerTime,
        };
      } else {
        return { ...body };
      }
    };

    updateCartAPI(
      query,
      getBody(
        ternaryCondition(
          activeCartItem,
          activeCartItem?.installer,
          cartSummaryInfo[0]?.installer
        )
      )
    )
      .then(() => {
        getCartListing();
      })
      .then((res) => {
        setCartSummaryInfo(res.response.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartListing();
  }, [updateCartCallBack]);

  const handleConfirmDateTime = () => {
    updateCart();
    setOpeninstallerDateTime(false);
  };

  return (
    <div>
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
              {ternaryCondition(
                activeCartItem,
                activeCartItem?.title,
                cartSummaryInfo[0]?.productId?.title
              )}
            </p>
            <div className="d-flex justify-content-between order-count-container">
              <div className="me-1 order-count cursor-pointer">-</div>
              <NormalInput
                max="2"
                name="add"
                type="number"
                className="mx-1 order-count-input"
                value={ternaryCondition(
                  activeCartItem,
                  activeCartItem?.quantity,
                  cartSummaryInfo[0]?.quantity
                )}
                register={register}
                errors={errors}
              />
              <div className="order-count ms-1 cursor-pointer">+</div>
            </div>
          </div>
        </div>
        {console.log(activeCartItem, "acct")}
        {conditionalLoad(
          ternaryCondition(
            activeCartItem,
            activeCartItem?.installer,
            cartSummaryInfo[0]?.installer
          ),
          <div className="order-installation-date">
            <label className="order-installation-text">
              Installation on{" "}
              {customMomentFormat(
                ternaryCondition(
                  activeCartItem,
                  activeCartItem?.installerDate,
                  cartSummaryInfo[0]?.installerDate
                ),
                "ddd DD, MMM"
              )}
              -{" "}
              {ternaryCondition(
                activeCartItem,
                activeCartItem?.installerTime,
                cartSummaryInfo[0]?.installerTime
              )}
            </label>
            <p
              className="me-3 cursor-pointer edit-installation"
              onClick={() => setOpeninstallerDateTime(true)}
            >
              Edit
            </p>
          </div>
        )}
        <div className="coupon-container py-4">
          <label className="coupon-text">Coupon</label>
          <TextField
            className="coupon-code-textbox mt-2"
            id="filled-start-adornment"
            InputProps={{
              endAdornment: (
                <label className="apply-coupon-text cursor-pointer">
                  APPLY
                </label>
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
      <CustomDialog
        isOpen={openinstallerDateTime}
        handleClose={() => setOpeninstallerDateTime(false)}
      >
        <InstallerDateTime
          installerDate={installerDate}
          setInstallerDate={setInstallerDate}
          installerTime={installerTime}
          setInstallerTime={setInstallerTime}
          handleConfirm={handleConfirmDateTime}
        />
      </CustomDialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCartListingAPI: getCartListing,
      updateCartAPI: updateCart,
    },
    dispatch
  );
};

export const OrderSummary = connect(null, mapDispatchToProps)(OrderSummaryMain);
