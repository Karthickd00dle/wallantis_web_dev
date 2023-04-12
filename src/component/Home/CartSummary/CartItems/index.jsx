import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style.scss";
import { CustomButton, NormalInput } from "component/common";
import { useForm } from "react-hook-form";
import {
  conditionalLoad,
  ternaryCondition,
  customMomentFormat,
} from "service/helperFunctions";
import { history } from "service/helpers";
import { bindActionCreators } from "redux";
import { deleteCart, getCartListing, updateCart } from "action/CartAct";

const ItemsRow = ({
  deleteCartApi,
  updateCartCallBack,
  setActiveCartItem,
  itemData: {
    _id,
    productId,
    color,
    status,
    quantity,
    delivery_date,
    delivery_price,
    installer,
    installerDate,
    installerTime,
    cartAmount,
  },
}) => {
  const { register } = useForm();
  const [formData, setFormData] = useState({ quantity: quantity });
  const handleProductCount = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: Number(value) });
  };

  useEffect(() => {
    updateCartCallBack({
      id: _id,
      cartBody: { quantity: formData.quantity, color: color._id },
    });
  }, [formData]);

  return (
    <div key={_id} className="item-row-container">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img
            src={productId?.images ? productId?.images[0] : ""}
            height="200px"
            width="200px"
            alt="product"
          />
          <div className="d-flex ps-5 flex-column">
            <label
              className="pb-2 item-title cursor-pointer"
              onClick={() =>
                setActiveCartItem({
                  id: _id,
                  title: productId.title,
                  quantity: formData.quantity,
                  color: color._id,
                  installer: installer,
                  installerDate: installerDate,
                  installerTime: installerTime,
                })
              }
            >
              {productId?.title}
            </label>
            <label className="py-2 item-color">{`Color - ${color?.colorName}`}</label>
            <label className="py-2 item-status">
              {ternaryCondition(status, "In Stock", "Out of Stock")}
            </label>
            <label className="py-2 item-delivery-info">
              {`Delivery by ${delivery_date} | ${delivery_price}`}
            </label>
            <label className="pt-2 item-delivery-info">
              {conditionalLoad(
                installer,
                `Installation on ${customMomentFormat(
                  installerDate,
                  "ddd MMM YY"
                )} ${installerTime}`
              )}
            </label>
          </div>
        </div>
        <label className="pt-3 item-price">{`₹${cartAmount}`}</label>
      </div>
      <div className="d-flex justify-content-between align-items-center w-75 py-4">
        <div className="d-flex justify-content-between order-count-container">
          <div
            onClick={conditionalLoad(formData.quantity > 0, () =>
              setFormData({
                quantity: formData.quantity - 1,
              })
            )}
            className="me-1 order-count cursor-pointer"
          >
            -
          </div>
          <NormalInput
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleProductCount}
            max="2"
            className="mx-1 text-center order-count-input"
            register={register}
          />
          <div
            onClick={() =>
              setFormData({
                quantity: formData.quantity + 1,
              })
            }
            className="order-count ms-1 cursor-pointer"
          >
            +
          </div>
        </div>
        <label className="save-for-later-text">SAVE FOR LATER</label>
        <label className="remove-text" onClick={() => deleteCartApi(_id)}>
          REMOVE
        </label>
      </div>
    </div>
  );
};

const CartItemsMain = ({
  cartData,
  deleteCartApi,
  updateCartCallBack,
  setActiveCartItem,
}) => {
  return (
    <div>
      <div className="cart-items-container">
        {ternaryCondition(
          cartData?.product?.length > 0,
          <div className="cart-items-inner-container">
            {cartData?.product?.map((itemData) => (
              <div className="item-container-main" key={itemData._id}>
                <ItemsRow
                  setActiveCartItem={setActiveCartItem}
                  itemData={itemData}
                  deleteCartApi={deleteCartApi}
                  updateCartCallBack={updateCartCallBack}
                />
              </div>
            ))}
          </div>,
          <div className="cart-empty-container">
            <label>Cart is Empty</label>
          </div>
        )}
      </div>
      {conditionalLoad(
        cartData?.product?.length > 0,
        <CustomButton
          className="mt-5"
          style={{ width: "245px", height: "50px", backgroundColor: "#A26220" }}
          variant="contained"
          onClick={() => history.push("/home/payment-page")}
        >
          Proceed to Checkout
        </CustomButton>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCartListingAPI: getCartListing,
      deleteCartAPI: deleteCart,
      updateCartAPI: updateCart,
    },
    dispatch
  );
};

export const CartItems = connect(null, mapDispatchToProps)(CartItemsMain);
