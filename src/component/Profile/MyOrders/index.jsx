import React from "react";
import { NormalSearch, CustomSelect } from "component/common";
import wallImage from "assets/images/wallImage.png";
import greenDot from "assets/images/greenDot.png";
import Star from "assets/images/Star.png";
import ticked from "assets/images/ticked.png";
import { useHistory } from "react-router-dom";
import "./index.scss";

export default function MyOrders() {
  let history = useHistory();
  return (
    <div className="profile-page">
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
              <div
                className="title"
                onClick={() => history.push("/profile/order-details")}
              >
                Diamond Wallpaper
              </div>
              <div className="del-date">
                <img src={greenDot} />
                &nbsp; Out for delivery on Oct 11
              </div>
            </div>

            <div className="flex space-between">
              <div className="color">Color - Green </div>
              <div className="del-confirmation">
                Your item has been delivered{" "}
              </div>
            </div>
            <div className="flex space-between">
              <div className="amount">₹3500</div>
            </div>
            <div className="flex space-between">
              <div>
                <div className="payment-mode">Mode of Payment</div>
                <div className="payment-bank">Net Banking: Kotak Bank</div>
              </div>
              <div>
                <div
                  className="product-rating"
                  onClick={() => history.push("/profile/review-order")}
                >
                  <img src={Star} className="star-image" />
                  &nbsp; Rate & Review Product
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-between mt-4">
          <div className="flex space-between">
            <div className="installation-expectation">
              Installation expected on Fri 25, Nov-02:00PM
            </div>
            <div className="edit">EDIT</div>
          </div>

          <div className="flex space-between">
            <div className="installation-charges">Installation Charges</div>
            <div lassName="installation-amount">
              <img src={ticked} className="star-image" />
              &nbsp;₹ 299 (PAID)
            </div>
          </div>
        </div>
      </div>
      <div className="orders-card">
        <div className="flex">
          <img src={wallImage} />
          <div className="direction-col left-margin">
            <div className="flex space-between">
              <div
                className="title"
                onClick={() => history.push("/profile/order-details")}
              >
                Diamond Wallpaper
              </div>
              <div className="del-date">
                <img src={greenDot} />
                &nbsp; Out for delivery on Oct 11
              </div>
            </div>

            <div className="flex space-between">
              <div className="color">Color - Green </div>
              <div className="del-confirmation">
                Your item has been delivered{" "}
              </div>
            </div>
            <div className="flex space-between">
              <div className="amount">₹3500</div>
            </div>
            <div className="flex space-between">
              <div>
                <div className="payment-mode">Mode of Payment</div>
                <div className="payment-bank">Net Banking: Kotak Bank</div>
              </div>
              <div>
                <div
                  className="product-rating"
                  onClick={() => history.push("/profile/review-order")}
                >
                  <img src={Star} className="star-image" />
                  &nbsp; Rate & Review Product
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-between mt-4">
          <div className="flex space-between">
            <div className="installation-expectation">
              Installation expected on Fri 25, Nov-02:00PM
            </div>
            <div className="edit">EDIT</div>
          </div>

          <div className="flex space-between">
            <div className="installation-charges">Installation Charges</div>
            <div lassName="installation-amount">
              <img src={ticked} className="star-image" />
              &nbsp;₹ 299 (PAID)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
