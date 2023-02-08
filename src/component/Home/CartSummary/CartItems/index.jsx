import React from "react";
import { connect } from "react-redux";
import productImage from "assets/images/OrderSummary/custom-recipe-wallpaper.png";
import "./style.scss";
import { CustomButton, NormalButton, NormalInput } from "component/common";
import { CartSummaryItems } from "config";

const ItemsRow = ({
  itemData: {
    id,
    image,
    title,
    color,
    stock_status,
    delivery_date,
    delivery_price,
    installation_date,
    price,
  },
}) => {
  return (
    <div key={id} className="item-row-container">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img
            src={image[0]}
            height="200px"
            width="200px"
            alt="product-image"
          />
          <div className="d-flex ps-5 flex-column">
            <label className="pb-2 item-title">{title}</label>
            <label className="py-2 item-color">{`Color - ${color}`}</label>
            <label className="py-2 item-status">{stock_status}</label>
            <label className="py-2 item-delivery-info">
              {`Delivery by ${delivery_date} | ${delivery_price}`}
            </label>
            <label className="pt-2 item-delivery-info">
              {`Installation on ${installation_date}`}
            </label>
          </div>
        </div>
        <label className="pt-3 item-price">{price}</label>
      </div>
      <div className="d-flex justify-content-between align-items-center w-75 py-4">
        <div className="d-flex justify-content-between order-count-container">
          <div className="me-1 order-count cursor-pointer">-</div>
          <NormalInput max="2" className="mx-1 order-count-input" />
          <div className="order-count ms-1 cursor-pointer">+</div>
        </div>
        <label className="save-for-later-text">SAVE FOR LATER</label>
        <label className="remove-text">REMOVE</label>
      </div>
    </div>
  );
};

const CartItemsMain = ({cartItemData}) => {

  return (
    <div>
      <div className="cart-items-container">
        {cartItemData.map((itemData) => (
          <div className="item-container-main">
            <ItemsRow itemData={itemData} />
          </div>
        ))}
      </div>
      <CustomButton
        className="mt-5"
        style={{ width: "225px", height: "48px" }}
        variant="contained"
      >
        Proceed to Checkout
      </CustomButton>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    cartItemData: state.commonStore.cartItemState,
  };
};
export const CartItems = connect(mapStateToProps, null)(CartItemsMain);
