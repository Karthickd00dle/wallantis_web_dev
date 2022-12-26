import React from "react";
import "./index.scss";
import Paytm from "assets/images/Paytm.png";
import downloadImage from "assets/images/downloadImage.png";
import wallImage from "assets/images/wallImage.png";
import Star from "assets/images/Star.png";
import Cancel from "assets/images/Cancel.png";

export default function OrderDetails() {
  return (
    <div>
      <div className="order-details">
        <div className="info-cards">
          <div>
            <p className="del-address">Delivery Address</p>
            <p className="name">John Doe</p>

            <p className="address">
              104,NEW ARYA NAGAR,GHAZIABAD,UP,DISTGHAZIABAD201301
            </p>

            <div className="single-col">
              <p>Phone number </p>
              <p>987654321</p>
            </div>
          </div>
        </div>
        <div className="info-cards">
          <div>
            <p className="del-address">Payment Method</p>
            <p className="name">Cash on Delivery</p>
          </div>
        </div>
        <div className="info-cards">
          <div>
            <p className="del-address">Your Rewards</p>
            <div className="single-col">
              <img src={Paytm} className="image" />
              <p className="name">₹35 cashback added to your paytm wallet </p>
            </div>
          </div>
        </div>
        <div className="info-cards">
          <div>
            <p className="del-address">More actions</p>
            <div className="single-col">
              <img src={downloadImage} className="image" />
              <p className="name">Download Invoice </p>
            </div>

            <div className="single-col">
              <img src={Cancel} className="image" />
              <p className="name">Cancel Product </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-between order-updates">
        <div>
          <div className="flex">
            <img src={wallImage} />
            <div className="direction-col left-margin">
              <div className="">
                <p className="name">Diamond Wallpaper</p>
                <p className="color">Color - Green </p>
                <p className="amount mt-3">₹3500</p>

                <p className="del-confirmation">Delivered on Oct 15</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="direction-col left-margin">
              <div className="">
                <div className="single-col">
                  <p className="installation-expectation mt-3">
                    Installation on Fri 25, Nov-02:00PM
                  </p>
                  <p className="edit mt-3">EDIT</p>
                </div>

                <div className="single-col">
                  <p className="installation-expectation mt-3">
                    Item is returnable in 7 days
                  </p>
                  <p className="edit mt-3">KNOW MORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="single-col">
            <div className="order-status">
              <div>
                <p className="order-state-name">Order Confirmed</p>
              </div>
              <div className="success-circle">
                <div className="green-progress"></div>
              </div>
              <div className="mt-3 order-state-date">Sun, 9th Oct </div>
            </div>
            <div className="order-status">
              <div>
                <p className="order-state-name">Shipped</p>
              </div>
              <div className="pending-circle">
                <div className="grey-progress"></div>
              </div>
              <div className="mt-3 order-state-date">Sun, 9th Oct </div>
            </div>
            <div className="order-status">
              <div>
                <p className="order-state-name">Out for Delivery </p>
              </div>
              <div className="pending-circle">
                <div className="grey-progress"></div>
              </div>
              <div className="mt-3 order-state-date">Sun, 9th Oct </div>
            </div>
            <div className="order-status">
              <div>
                <p className="order-state-name">Delivered</p>
              </div>
              <div className="pending-circle"></div>
              <div className="mt-3 order-state-date">Sun, 9th Oct </div>
            </div>
          </div>
          <div className="order-status-details">
            <div className="mt-4">
              Your item has been picked up by courier partner.
              <div className="single-col equal-widths">
                <div className="date">Sun, 9th Oct</div>
                <div className="time">2:57 pm</div>
                <div className="summary">Your Order has been placed.</div>
              </div>
              <div className="single-col equal-widths">
                <div className="date">Sun, 10th Oct</div>
                <div className="time">11:06 pm</div>
                <div className="summary">Your Order has been placed.</div>
              </div>
              <div className="single-col equal-widths">
                <div className="date">Sun, 9th Oct</div>
                <div className="time">2:57 pm</div>
                <div className="summary">Your Order has been placed.</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="review-btn">
            <img src={Star} className="star-image" />
            &nbsp; Rate & Review
          </button>
        </div>
      </div>
    </div>
  );
}
