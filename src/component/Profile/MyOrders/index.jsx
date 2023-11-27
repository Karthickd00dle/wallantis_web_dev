import React, { useEffect, useMemo, useState } from "react";
import { NormalSearch, CustomSelect, CustomButton } from "component/common";
import wallImage from "assets/images/wallImage.png";
import greenDot from "assets/images/greenDot.png";
import Star from "assets/images/Star.png";
import ticked from "assets/images/ticked.png";
import { useHistory } from "react-router-dom";
import ChatIcon from "assets/icons/ChatIcon.js";
import "./index.scss";
import { ArrowBack } from "@mui/icons-material";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getOrderDetail, getOrderListing } from "action/OrderAct";
import { customMomentFormat } from "service/helperFunctions";

function MyOrdersFC({ getOrderListingApi, getOrderDetailApi }) {
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [orderList, setOrderList] = useState();
  const [orderDetail, setOrderDetail] = useState();

  let history = useHistory();

  const handleViewDetails = (id) => {
    setShowProductDetail((prevState) => !prevState);
    getOrderDetailAPI(id);
  };

  const getOrderListingAPI = () => {
    getOrderListingApi().then(({ response }) => setOrderList(response));
  };

  const getOrderDetailAPI = (id) => {
    let query = {
      url_id: id,
    };
    getOrderDetailApi(query).then(({ response }) => setOrderDetail(response));
  };

  console.log(orderDetail, "order detail");

  const getDeliveryStatusCode = (status) => {
    switch (status) {
      case "order confirmed":
        return "order-confirmed";
      case "shipped":
        return "shipped";
      case "out for delivery":
        return "out-for-delivery";
      case "delivery":
        return "delivered";
      default:
        return;
    }
  };

  const orderDetails = [
    {
      productName: "Diamond Wallpaper",
      color: "green",
      image: wallImage,
      price: "₹3500",
    },
    {
      productName: "Bird Wallpaper",
      color: "green",
      image: wallImage,
      price: "₹3500",
    },
  ];

  useEffect(() => {
    getOrderListingAPI();
  }, []);

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

      {!showProductDetail ? (
        <>
          {orderList?.map(
            ({
              _id,
              colorName,
              price,
              productImages,
              productTitle,
              status,
              date,
            }) => (
              <div key={_id} className="orders-card">
                <div className="d-flex align-items-center">
                  <img
                    height="185px"
                    width="185px"
                    src={productImages[0]}
                    alt="wallimage"
                  />
                  <div className="direction-col left-margin">
                    <div className="d-flex justify-content-between">
                      <div
                        className="d-flex w-100 align-items-start"
                        onClick={() =>
                          history.push(`/profile/order-details/${_id}`)
                        }
                      >
                        <label className="title w-50">{productTitle}</label>
                        <div
                          className={`ms-2 mt-2 delivery-status ${getDeliveryStatusCode(
                            status
                          )}`}
                        >
                          {status}
                        </div>
                      </div>
                    </div>

                    <label className="color">Color - {colorName}</label>

                    <label className="m-0 py-4 amount">₹{price}</label>
                    <label className="order-placed-date">
                      Placed on{" "}
                      {customMomentFormat(date, "ddd, Do MMM, hh:mm A")}
                    </label>
                  </div>
                </div>
                <div>
                  <CustomButton
                    className="view-details-btn"
                    onClick={() => handleViewDetails(_id)}
                  >
                    View Details
                  </CustomButton>
                </div>
              </div>
            )
          )}
        </>
      ) : (
        <div className="delivery-summary-card">
          <div className="d-flex align-items-center">
            <ArrowBack
              className="mt-1 cursor-pointer"
              onClick={() => setShowProductDetail(false)}
            />
            <label className="deliver-head ms-1">
              Yayy, Your order has been successfully delivered
            </label>
          </div>
          <div className="deliver-subtitle">
            Placed on Fri, 25th Nov, 05:00PM
          </div>
          <div className="payment-info">
            <div className="mode-text">Mode of Payment</div>
            <div className="mode-detail">Net Banking: Kotak Bank</div>
          </div>

          <div className="bill-details">
            <div className="total-item">2 items</div>
            <div className="order-id">Order ID: ord123456789</div>

            {orderDetails.map((order) => {
              return (
                <div className="d-flex flex-row orderList">
                  <img
                    src={order.image}
                    alt="wallimage"
                    width={66.64}
                    height={70}
                  />
                  <div className="products">
                    <div className="product-name">{order.productName}</div>
                    <div className="product-color">Color - {order.color}</div>
                  </div>
                  <div className="price">{order.price}</div>
                </div>
              );
            })}
            <div className="bill-det-txt">Bill Details</div>
            <div className="detail-row">
              <span className="name">Price(2 item)</span>
              <span className="price">₹ 2599</span>
            </div>
            <div className="detail-row">
              <span className="name">Delivery Charges</span>
              <span className="free">Free</span>
            </div>
            <div className="detail-row">
              <span className="name">Packaging Charges</span>
              <span className="price me-2">₹ 99</span>
            </div>
            <div className="detail-row">
              <span className="name">Installation Charges</span>
              <span className="price me-2">₹ 499</span>
            </div>
            <div className="detail-row">
              <span className="name">GST Charges</span>
              <span className="price me-2">₹ 299</span>
            </div>
            <div className="hr-line" />
            <div className="detail-row">
              <span className="name">Sub Total Price</span>
              <span className="price">₹ 3297</span>
            </div>
            <div className="detail-row">
              <span className="name">Coupon Discount</span>
              <span className="price me-2">₹ 298</span>
            </div>
            <div className="hr-line" />
            <div className="detail-row">
              <span className="name">Total Amount to be paid</span>
              <span className="price">₹ 2999</span>
            </div>

            <div className="payment-info">
              <div className="mode-text mb-2">Delivery Address</div>
              <div className="mode-detail">
                Home- 104,NEW ARYA NAGAR,GHAZIABAD,U.P.,DIST GHAZIABAD 201301
              </div>
            </div>

            <CustomButton className={"chat-btn"} onClick={handleViewDetails}>
              <ChatIcon height={20} width={20} /> &nbsp; &nbsp; Chat With Us
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getOrderListingApi: getOrderListing,
      getOrderDetailApi: getOrderDetail,
    },
    dispatch
  );
};

const Profile = connect(null, mapDispatchToProps)(MyOrdersFC);
export default Profile;
