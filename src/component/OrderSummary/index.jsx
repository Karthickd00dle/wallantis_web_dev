import React from "react";
import CustomRecipeWallpaper from "assets/images/OrderSummary/custom-recipe-wallpaper.png";
import "./style.scss";
import { NormalInput } from "component/common";

export const OrderSummary = () => {
  return (
    <div className="order-summary">
      <label className="text-title pb-3">Order Summary</label>
      <div
        className="d-flex align-items-center
      "
      >
        <img src={CustomRecipeWallpaper} alt="product icon" />
        <div className="ps-3">
          <p className=" w-75">Custom Recipe wallpaper, Handwritten Recipe</p>
          <div className="d-flex justify-content-between order-count-container">
            <div className="me-1 order-count cursor-pointer">-</div>
            <NormalInput max="2" className="mx-1 order-count-input" />
            <div className="order-count ms-1 cursor-pointer">+</div>
          </div>
        </div>
      </div>
      <div className="order-installation-date">
        <label>Installation on Fri 25, Nov - 02:00PM</label>
        <a href="">Edit</a>
      </div>
    </div>
  );
};
