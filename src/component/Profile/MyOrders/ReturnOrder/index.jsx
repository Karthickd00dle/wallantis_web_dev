import React from "react";
import wallImage from "assets/images/wallImage.png";
import { CustomSelect, CustomTextArea, CustomButton } from "component/common";
import "./index.scss";

export default function ReturnOrder() {
  return (
    <div className="return-order-main">
      <div>
        <div className="delivery-card">
          <div className="delivery-card-inner">
            <div className="flex p-4">
              <img src={wallImage} />
              <div className="direction-col left-margin">
                <div className="">
                  <div className="single-col">
                    <p className="name">Diamond Wallpaper</p>
                    <p className="del-confirmation">Delivered on Oct 15</p>
                  </div>
                  <p className="color">Color - Green </p>
                  <p className="amount mt-3">₹3500</p>

                  <p className="payment-mode-name mt-3">Mode of Payment</p>
                  <p className="payment-mode-type">Cash On Delivery</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="eligibility-date">Eligible for return till 10 Nov</p>
        </div>
        <div className="return-details-card">
          <div className="m-5 pt-4">
            <label>Reason of Return</label>
            <div className="custom-select mt-3">
              <CustomSelect
                menuItemList={[
                  { label: "Better Price Available", value: "this" },
                  { label: "Current Month", value: "current" },
                  { label: "Previous Month", value: "previous" },
                  { label: "Daily", value: "daily" },
                  { label: "Yearly", value: "yearly" },
                  { label: "Last year", value: "last" },
                  { label: "Current year", value: "current" },
                ]}
              />
            </div>
            <label className="mt-3">Comments (required): </label>
            <div className="m-3">
              <CustomTextArea />
            </div>
            <label className="mt-3">Refund Options</label>
            <div className="ml-3">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              &nbsp; Provide Bank Account Details
            </div>
            <div className="custom-select mt-3">
              <CustomSelect
                menuItemList={[{ label: "HDFC BANK", value: "HDFC" }]}
              />
            </div>
            <div className="add-bank-account m-3">
              <p>Add new bank account</p>
            </div>

            <div className="action-btn">
              <CustomButton
                backgroundColor="#FFFFFF"
                style={{
                  width: "200px",
                  height: "40px",
                  border: "1px solid #A26220",
                  borderRadius: "10px",
                  color: "#A26220",
                }}
              >
                Back
              </CustomButton>
              <CustomButton
                style={{
                  width: "200px",
                  height: "40px",
                  borderRadius: "10px",
                  color: "#FFFFFF",
                }}
              >
                Return
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="return-summary-card">
        <p className="return-summary-title">Return Summary </p>
        <div className="flex p-4">
          <img src={wallImage} className="small-image" />
          <div className="direction-col left-margin">
            <div className="">
              <div className="single-col">
                <p className="date">Fri, November 10, 2022 10.00 AM</p>
              </div>
              <p className="type">Bird Wallpaper </p>
              <p className="color">Color - Green </p>
            </div>
          </div>
        </div>
        <hr />
        <p className="return-summary-title">Price Details </p>

        <div className="single-col space-between">
          <p className="refund-text">Total Refund Paid</p>
          <p className="refund-amount">₹3500</p>
        </div>
      </div>
    </div>
  );
}
