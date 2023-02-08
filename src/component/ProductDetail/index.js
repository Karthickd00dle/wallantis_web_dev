import TravelGuideSVGComponent from "assets/svg/ProductDetails/travelGuide";
import React, { useState } from "react";
import { Instructions } from "component/Instructions";
import { connect, useDispatch } from "react-redux";
import { history } from "service/helpers";
import ReactImageMagnify from "react-image-magnify";
import "./styles.scss";
import { CustomButton } from "component/common";
import { addToCart } from "action/CommonAct";
import { commonStateList } from "service/actionType";

function ProductDetailFC({ productDetailData, cartItemData }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState();
  const [selectedImg, setSelectedImg] = useState(productDetailData?.image[0]);
  const handleAddtoCart = () => {
    addToCart(productDetailData, cartItemData);
    dispatch({ type: commonStateList.cartItem, payload: cartItemData });
  };
  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-inner-container">
          <div className="image-section">
            <div className="container">
              {/* <img src={selectedImg} alt="Selected" className="selected" /> */}
              <div className="selected">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Selected",
                      isFluidWidth: true,
                      src: selectedImg,
                      className: "small",
                    },
                    largeImage: {
                      src: selectedImg,
                      width: 800,
                      height: 800,
                      className: "largeImage",
                    },

                    isHintEnabled: true,
                  }}
                />
              </div>
              <div className="imgContainer">
                {productDetailData?.image?.map((img, index) => (
                  <img
                    style={{
                      border: selectedImg === img ? "4px solid purple" : "",
                    }}
                    key={index}
                    src={img}
                    alt="dog"
                    onClick={() => setSelectedImg(img)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="product-info-section">
            <div className="info-title">
              Custom Recipe Wallpaper, Handwritten Recipe
            </div>

            <div className="info-content">
              Create a raw and earthy atmosphere with stone style wallpaper to
              create a perfect contemporary look. Wherever you use it, it will
              add oodles of texture and character to your space and works
              especially well as a feature wall.
            </div>

            <div className="info-heading-one">₹3500/Roll</div>

            <hr></hr>

            <div>
              <div className="info-heading-one">Color - Grey</div>
              <div className="color-picker-container">
                <div className="color-picker-item selected-item">
                  <div
                    className="render-color"
                    style={{ background: "grey" }}
                  ></div>
                </div>

                <div className="color-picker-item ">
                  <div
                    className="render-color"
                    style={{ background: "red" }}
                  ></div>
                </div>

                <div className="color-picker-item ">
                  <div
                    className="render-color"
                    style={{ background: "yellow" }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className="info-heading-one">Quantity (Roll)</div>
            </div>

            <div className="button-container d-flex mb-3">
              <CustomButton
                variant="outlined"
                className="me-3"
                style={{ padding: "20px 40px 20px 40px" }}
              >
                Calculate Rolls
              </CustomButton>
              <CustomButton variant="outlined" onClick={() => setIsOpen(true)}>
                Installer Price Calculator
              </CustomButton>
            </div>

            <div className="info-title-2">Check availability in your area </div>
            <div className="instructions-box-container">
              <div className="ib-container">
                <div>
                  <input className="ib-checkBox" type="checkbox" />
                </div>
                <div className="ib-body">
                  <div className="ib-body-title">Installation by Paperwall</div>
                  <div className="ib-body-txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim
                    ad minim veniam.
                  </div>
                  <div className="ib-body-price">
                    ₹800/Roll &ensp;*Need to Pay at the time of booking the
                    order{" "}
                  </div>
                </div>
              </div>
              <hr />
              <div className="ib-body-2">
                <div className="travel-container">
                  <TravelGuideSVGComponent />
                </div>
                <div>
                  <div>
                    <div className="ib-body-2-title">
                      Insructions on Application of Wallpaper{" "}
                    </div>
                    <div className="ib-body-2-txt-tilte">
                      1. Prepare your surface/wall
                    </div>
                    <ul>
                      <li>Priming and Levelling</li>
                      <li>Sealing</li>
                      <li>Glue Application</li>
                    </ul>
                  </div>

                  <div>
                    <div className="ib-body-2-txt-tilte"> 2. Installation</div>
                    <div className="ib-body-2-txt">
                      <div>
                        STEP 1:&ensp;Hang the frst strip using a plumb line to
                        get a perfect vertical.
                      </div>
                      <div>
                        STEP 2:&ensp;Smoothen out all the bubbles using Nilaya
                        Wallcovering Smoother or Smart Care Roller as required.
                      </div>
                      <div>
                        STEP 3:&ensp;Hang the subsequent strips relative to the
                        frst strip, matching pattern as required.
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="ib-body-2-txt-tilte">
                      3. Wallpaper corners & Tricky areas to be taken care of{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex my-4 justify-content-between">
              <CustomButton
                variant="outlined"
                style={{
                  width: "385px",
                  border: " 1px solid #A26220",
                  color: "#A26220",
                }}
                className="py-3"
                onClick={handleAddtoCart}
              >
                Add to Cart
              </CustomButton>
              <CustomButton
                style={{ width: "385px", background: "#A26220" }}
                variant="contained"
                onClick={() => {
                  history.push("/home/product-details/payment-page");
                }}
              >
                Buy Now
              </CustomButton>
            </div>

            <div
              className="gold-button-xl"
              onClick={() => {
                history.push("/room-layout/room-visualizer");
              }}
            >
              Room Visualizer
            </div>

            <div className="product-details-2-container">
              <div className="product-details-section-header">
                Product Details
              </div>

              <div className="pd-container">
                <div className="pd-1">Product Name</div>
                <div className="pd-2">
                  <div className="custom-recipe-title">
                    Custom Recipe Wallpaper, handwritten recipe{" "}
                  </div>
                  <div className="custom-recipe-txt">
                    Create a raw and earthy atmosphere with stone style
                    wallpaper to create a perfect contemporary look. Wherever
                    you use it, it will add oodles of texture and character to
                    your space and works especially well as a feature wall.
                  </div>
                </div>
              </div>
              <hr />
              <div className="pd-container">
                <div className="pd-1">Features </div>
                <div className="pd-2">
                  <div>Washable</div>
                  <div>Easy to remove </div>
                </div>
              </div>
              <hr />
            </div>

            <div className="customer-reviews-container">
              <div className="customer-reviews-title">Customer Reviews</div>
            </div>

            <div className="review-item-container">
              <div>
                <div className="review-item-img"></div>
              </div>

              <div className="review-item-body">
                <div className="review-item-title">John Doe</div>
                <div className="review-item-title-2">Nice Product</div>
                <div className="review-item-txt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="other-products-title">You may also like </div>

        <div className="other-products-list"></div>
      </div>
      <Instructions isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    productDetailData: state.commonStore.productDetailState,
    cartItemData: state.commonStore.cartItemState,
  };
};
export const ProductDetail = connect(mapStateToProps, null)(ProductDetailFC);
