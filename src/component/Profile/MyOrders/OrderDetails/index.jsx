import React, { useEffect, useState } from "react";
import "./index.scss";
import Paytm from "assets/images/Paytm.png";
import downloadImage from "assets/images/downloadImage.png";
import { useHistory, useParams } from "react-router-dom";
import BreadCrumbs from "component/common/BreadCrumb";
import wallImage from "assets/images/wallImage.png";
import Star from "assets/images/Star.png";
import Cancel from "assets/images/Cancel.png";
import Return from "assets/images/Return.png";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProductOrderDetail } from "action/OrderAct";
import OrderStatusBar from "./OrderStatusBar";
import OrderStatusTracker from "./OrderStatusBar";

function OrderDetailsFC({ getProductOrderDetailApi }) {
  const history = useHistory();
  const params = useParams();
  const [productOrderDetail, setProductOrderDetail] = useState();

  const getProductOrderDetailAPI = () => {
    let query = {
      url_id: params.id,
    };
    getProductOrderDetailApi(query).then(({ response }) =>
      setProductOrderDetail(response)
    );
  };

  useEffect(() => {
    getProductOrderDetailAPI();
  }, []);

  console.log(productOrderDetail, "det");

  const getPaymentMode = (mode) => {
    switch (mode) {
      case "netbanking":
        return `${productOrderDetail?.payment?.method} : ${productOrderDetail?.payment?.bank}`;
      default:
        return `${productOrderDetail?.payment?.method}`;
    }
  };

  const orderStatusData = [
    { name: "Order Confirmed", status: "Confirmed", date: "Sun, 9th Oct" },
    { name: "Shipped", status: "Shipped", date: "Mon, 10th Oct" },
    {
      name: "Out for Delivery",
    },
    { name: "Delivered" },
  ];

  return (
    <div>
      <div className="breadcrumbs">
        <BreadCrumbs
          crumbs={["Home", "My Profile", "My Orders", "Order Details"]}
        />
      </div>
      <div className="order-details">
        <div className="info-cards">
          <div>
            <p className="del-address">Delivery Address</p>
            <p className="name">{productOrderDetail?.address?.fullName}</p>

            <p className="address">
              {`${productOrderDetail?.address?.flatNo},${productOrderDetail?.address?.area},${productOrderDetail?.address?.city},${productOrderDetail?.address?.state},${productOrderDetail?.address?.pincode},${productOrderDetail?.address?.country}`}
            </p>

            <div className="single-col">
              <p>Phone number </p>
              <p>{productOrderDetail?.address?.mobileNumber}</p>
            </div>
          </div>
        </div>
        <div className="info-cards">
          <div>
            <p className="del-address">Payment Method</p>
            <p className="name text-capitalize">
              {getPaymentMode(productOrderDetail?.payment?.method)}
            </p>
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

            <div
              className="single-col"
              onClick={() => history.push("/profile/return-order")}
            >
              <img src={Return} className="image" />
              <p className="name">Return Product </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-between order-updates">
        <div>
          <div className="flex">
            <img
              src={productOrderDetail?.product?.images[0]}
              alt="prod_image"
              height="175px"
              width="175px"
            />
            <div className="direction-col left-margin">
              <div className="">
                <p className="name">{productOrderDetail?.product?.title}</p>
                <p className="color">Color - Green </p>
                <p className="amount mt-3">
                  ₹{productOrderDetail?.product?.price}
                </p>

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

        <div className="order-confirmation">
          <OrderStatusTracker
            orderStatusData={productOrderDetail?.statusArray}
          />

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
          <button
            className="review-btn"
            onClick={() => history.push("/profile/review-order")}
          >
            <img src={Star} className="star-image" />
            &nbsp; Rate & Review
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProductOrderDetailApi: getProductOrderDetail,
    },
    dispatch
  );
};

const OrderDetails = connect(null, mapDispatchToProps)(OrderDetailsFC);
export default OrderDetails;
