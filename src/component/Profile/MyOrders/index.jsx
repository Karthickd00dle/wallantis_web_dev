import React from "react";
import { NormalSearch, CustomSelect } from "component/common";
import wallImage from "assets/images/wallImage.png";
import greenDot from "assets/images/greenDot.png";
import Star from "assets/images/Star.png";
import ticked from "assets/images/ticked.png";
import "./index.scss";

export default function MyOrders() {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div>
          <NormalSearch placeholder="Search For Orders" />
        </div>
        <div className="custom-select">
          <CustomSelect
            menuItemList={[
              { label: "This Month", value: "this" },
              { label: "Current Month", value: "current" },
              { label: "Previous Month", value: "previous" },
              { label: "Daily", value: "daily" },
              { label: "Yearly", value: "yearly" },
              { label: "Last year", value: "last" },
              { label: "Current year", value: "current" },
            ]}
          />
        </div>
      </div>

      <div className="orders-card">
        <div className="flex">
          <img src={wallImage} />
          <div className="direction-col left-margin">
            <div className="flex space-between">
              <p className="title">Diamond Wallpaper</p>
              <p className="del-date">
                <img src={greenDot} />
                &nbsp; Out for delivery on Oct 11
              </p>
            </div>

            <div className="flex space-between">
              <p className="color">Color - Green </p>
              <p className="del-confirmation">Your item has been delivered </p>
            </div>
            <div className="flex space-between">
              <p className="amount">₹3500</p>
            </div>
            <div className="flex space-between">
              <div>
                <p className="payment-mode">Mode of Payment</p>
                <p className="payment-bank">Net Banking: Kotak Bank</p>
              </div>
              <div>
                <p className="product-rating">
                  <img src={Star} className="star-image" />
                  &nbsp; Rate & Review Product
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-between mt-4">
          <div className="flex space-between">
            <p className="installation-expectation">
              Installation expected on Fri 25, Nov-02:00PM
            </p>
            <p className="edit">EDIT</p>
          </div>

          <div className="flex space-between">
            <p className="installation-charges">Installation Charges</p>
            <p lassName="installation-amount">
              <img src={ticked} className="star-image" />
              &nbsp;₹ 299 (PAID)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
