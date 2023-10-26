import TravelGuideSVGComponent from "assets/svg/ProductDetails/travelGuide";
import React, { useEffect, useState } from "react";
import { Instructions } from "component/ProductDetail/Instructions";
import { connect } from "react-redux";
import { history } from "service/helpers";
import ReactImageMagnify from "react-image-magnify";
import "./styles.scss";
import { CustomButton } from "component/common";
import { useParams } from "react-router-dom";
import {
  ProductInstructions1,
  ProductInstructions2,
  ProductInstructions3,
  ProductInstructions4,
} from "config";
import { Toast } from "service/toast";
import { CalculateRolls } from "./CalculateRolls";
import { InstallerPriceCalculator } from "./InstallerPriceCalculator";
import { ternaryCondition } from "service/helperFunctions";
import { bindActionCreators } from "redux";
import { getProductDetailApi } from "action/ProductsAct";

const ColorFilter = ({
  selectColor,
  color,
  index,
  activeColor,
  setActiveColor,
  originalImage,
  temporayImage,
}) => {
  const handleColor = (color, index) => {
    selectColor(`${color}`);
    setActiveColor(index);
  };

  return (
    <div
      className={`color-picker-item ${
        activeColor === index && "selected-item"
      }`}
    >
      <div
        className="render-color"
        onMouseOver={() => temporayImage(`${color}`)}
        onMouseOut={() => originalImage()}
        onClick={() => handleColor(color, index)}
        style={{ background: `${color}` }}
      ></div>
    </div>
  );
};

function ProductDetailFC({
  productDetailData,
  cartItemData,
  getProductDetailApi,
}) {
  let params = useParams();

  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openInstruction, setOpenInstruction] = useState();
  const [activeColor, setActiveColor] = useState();
  const [openCalculateRolls, setOpenCalculateRolls] = useState();
  const [openInstallerPriceCalculator, setOpenInstallerPriceCalculator] =
    useState();
  const [wallpaperColor, setWallpaperColor] = useState(
    productDetailData?.image_data[0]?.color
  );
  const [tempwallpaperColor, setTempWallpaperColor] = useState(null);

  const [tempImage, setTempImage] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const getProductDetailAPI = () => {
    let query = {
      url_id: params.id,
    };
    getProductDetailApi(query)
      .then(({ response }) => setProductDetail(response))
      .then(() => setLoading(false));
  };

  const selectColor = (color) => {
    setWallpaperColor(color);
    let selectedColor = productDetailData?.image_data?.filter(
      (data) => data?.color === color
    );
    setSelectedImg(selectedColor[0]?.image[0]);
  };

  const originalImage = () => {
    setTempImage(null);
    setTempWallpaperColor(null);
  };

  const temporayImage = (color) => {
    setTempWallpaperColor(color);
    let selectedColor = productDetailData?.image_data?.filter(
      (data) => data?.color === color
    );
    setTempImage(selectedColor[0]?.image[0]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedImg]);

  useEffect(() => {
    getProductDetailAPI();
  }, []);

  console.log(productDetail, "prodd");

  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-inner-container">
          <div className="image-section">
            <div className="container">
              <div className="selected">
                {loading ? (
                  <></>
                ) : (
                  <ReactImageMagnify
                    className="react-magnify"
                    {...{
                      smallImage: {
                        alt: "selected_image",

                        isFluidWidth: true,
                        src: productDetail?.images[0],
                        className: "small-image",
                      },
                      largeImage: {
                        src: productDetail?.images[0],
                        width: 2400,
                        height: 1400,
                        className: "large-image",
                      },

                      isHintEnabled: true,
                    }}
                  />
                )}
              </div>
              <div className="imgContainer">
                {/* {productState?.length > 0 ? (
                  productState?.image?.map((img, index) => (
                    <img
                      style={{
                        border: selectedImg === img ? "4px solid purple" : "",
                      }}
                      key={index}
                      src={img}
                      alt="dog"
                      onClick={() => setSelectedImg(img)}
                    />
                  ))
                ) : (
                  <></>
                )} */}
              </div>
            </div>
          </div>

          <div className="product-info-section">
            <div className="info-title">{productDetail.title}</div>
            <div className="info-content">
              Create a raw and earthy atmosphere with stone style wallpaper to
              create a perfect contemporary look. Wherever you use it, it will
              add oodles of texture and character to your space and works
              especially well as a feature wall.
            </div>
            <div className="info-heading-one">₹{productDetail.price}/Roll</div>
            <hr className="heading-line" />

            <div>
              <div className="info-heading-one">
                Color -
                {ternaryCondition(
                  tempwallpaperColor,
                  tempwallpaperColor,
                  wallpaperColor
                )}
              </div>
              <div className="color-picker-container">
                {productDetailData?.image_data?.map(({ color }, index) => (
                  <ColorFilter
                    key={index}
                    selectColor={selectColor}
                    temporayImage={temporayImage}
                    originalImage={originalImage}
                    activeColor={activeColor}
                    setActiveColor={setActiveColor}
                    color={color}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="info-heading-one">Quantity (Roll)</div>
            </div>
            <div className="button-container d-flex mb-3">
              <button
                className="product-btn"
                onClick={() => setOpenCalculateRolls(true)}
              >
                Calculate Rolls
              </button>
              <button
                className="product-btn"
                onClick={() => setOpenInstallerPriceCalculator(true)}
              >
                Installer Price Calculator
              </button>
            </div>
            <div className="info-title-2">Check availability in your area </div>
            <div className="instructions-box-container">
              <div className="ib-container">
                <div>
                  <input className="ib-checkBox" type="checkbox" />
                </div>
                <div className="ib-body">
                  <div className="ib-body-title">
                    Installation by Wallantics
                  </div>
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
                  </div>
                  <div>
                    <div className="instructions-collab">
                      {ProductInstructions1.map(({ info, steps, image }) => (
                        <div
                          className="card-instructions-container"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        >
                          <label className="card-instructions-steps">
                            {steps}
                          </label>
                          <br />
                          <label className="card-instructions-info">
                            {info}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="instructions-collab">
                      {ProductInstructions2.map(({ info, steps, image }) => (
                        <div
                          className="card-instructions-container"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        >
                          <label className="card-instructions-steps">
                            {steps}
                          </label>
                          <br />
                          <label className="card-instructions-info">
                            {info}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="instructions-collab">
                      {ProductInstructions3.map(({ info, steps, image }) => (
                        <div
                          className="card-instructions-container"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        >
                          <label className="card-instructions-steps">
                            {steps}
                          </label>
                          <br />
                          <label className="card-instructions-info">
                            {info}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="instructions-collab">
                      {ProductInstructions4.map(({ info, steps, image }) => (
                        <div
                          className="card-instructions-container"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        >
                          <label className="card-instructions-steps">
                            {steps}
                          </label>
                          <br />
                          <label className="card-instructions-info">
                            {info}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="Product-tips">
                    <label>
                      Tip 1: When smoothing, work from the centre outwards to
                      push bubbles to the edge of the panel. Use a rubber
                      squeeze.
                    </label>
                    <label>
                      Tip 2: If you've recently painted the walls, make sure to
                      wait a minimum of three weeks so that the paint has enough
                      time to fully cure.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex my-4 product-add-buttons">
              <CustomButton
                variant="outlined"
                style={{
                  width: "335px",
                  border: " 1px solid #A26220",
                  color: "#A26220",
                }}
                className="py-3"
              >
                Add to Cart
              </CustomButton>
              <CustomButton
                style={{ width: "335px", background: "#A26220" }}
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
        {/* <div className="Product-detail-cards">
          {bestsellerProducts.map((prodData) => (
            // <CardThree prodData={prodData} key={prodData.id} />
            <CardThree
              onClickCard={onClickCard}
              prodData={prodData}
              setCartData={setCartData}
              cartData={cartData}
              key={prodData.id}
            />
          ))}
        </div> */}

        <div className="other-products-list"></div>
      </div>
      <CalculateRolls
        isOpen={openCalculateRolls}
        handleClose={() => setOpenCalculateRolls(false)}
      />
      <Instructions
        isOpen={openInstruction}
        handleClose={() => setOpenInstruction(false)}
      />
      <InstallerPriceCalculator
        isOpen={openInstallerPriceCalculator}
        handleClose={() => setOpenInstallerPriceCalculator(false)}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProductDetailApi: getProductDetailApi,
    },
    dispatch
  );
};

const ProductDetail = connect(null, mapDispatchToProps)(ProductDetailFC);

export default ProductDetail;
