import React from "react";
import { ReactComponent as OrderSuccessLogo } from "assets/svg/OrderSuccess/order-confirm-logo.svg";
import "./style.scss";
import { CustomButton, NormalNavigate } from "component/common";

export const OrderSuccess = () => {
  return (
    <>
      <NormalNavigate />
      <div className="order-success-container">
        <div className="d-flex flex-column align-items-center">
          <OrderSuccessLogo />
          <label className="order-success-title pt-4">
            Order has been placed successfully
          </label>
          <p className="order-success-subject pt-3">
            After delivery our installer will call and book appointment for
            installation of wallpapers.
          </p>
          <div className="delivery-installation-container mt-3">
            <div className="d-flex flex-column">
              <label className="title-label">Expected Delivery Date</label>
              <label className="date-label">12 November, 2022</label>
            </div>
            <div className="installation-date-container d-flex flex-column">
              <label className="title-label">Expected Installation Date</label>
              <label className="date-label">15 November, 2022</label>
            </div>
          </div>
          <CustomButton className="mt-5 my-bookings-button">
            My Bookings
          </CustomButton>
        </div>
      </div>
    </>
  );
};
