import React from "react";
import { connect } from "react-redux";
import productImage from "assets/images/OrderSummary/custom-recipe-wallpaper.png";
import "./style.scss";
import { NormalInput } from "component/common";
import { CartSummaryItems } from "config";

const ItemsRow = ({
  itemData: {
    id,
    item_picture,
    label,
    color,
    stock_status,
    delivery_date,
    delivery_price,
    installation_date,
    item_price,
  },
}) => {
  return (
    <div key={id} className="item-row-container">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img
            src={item_picture}
            height="200px"
            width="200px"
            alt="product-image"
          />
          <div className="d-flex ps-5 flex-column">
            <label className="pb-2 item-title">{label}</label>
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
        <label className="pt-3 item-price">{item_price}</label>
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

const CartItemsMain = () => {
  return (
    <div className="cart-items-container">
      {CartSummaryItems.map((itemData) => (
        <div className="item-container-main">
          <ItemsRow itemData={itemData} />
        </div>
      ))}
    </div>
  );
};

export const CartItems = connect(null, null)(CartItemsMain);
