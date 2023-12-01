import TravelGuideSVGComponent from "assets/svg/ProductDetails/travelGuide";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Instructions } from "component/ProductDetail/Instructions";
import { connect, useDispatch } from "react-redux";
import { history } from "service/helpers";
import ReactImageMagnify from "react-image-magnify";
import "./styles.scss";
import { CustomButton, NormalInput } from "component/common";
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
import { conditionalLoad, ternaryCondition } from "service/helperFunctions";
import { bindActionCreators } from "redux";
import { getProductDetailApi, getNewArraivalApi } from "action/ProductsAct";
import { FcFolder } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import IP_calculator from "../../assets/images/IP_calculator.jpg";
import calculator_rolls from "../../assets/images/calculator_rolls.jpg";
import InstallerDateTime from "../common/InstallerDataTime";
import { useForm } from "react-hook-form";
import { Rating } from "@mui/material";
import { createCartApi } from "action/CartAct";
import CardThree from "../Home/subcomponents/CardThree";
import { commonStateList } from "service/actionType";

const ColorFilter = ({
  colorData: { colorCode },
  index,
  activeColor,
  setActiveColor,
}) => {
  const prevColorRef = useRef(activeColor);
  const handleColor = (i) => {
    if (i === "prev") {
      setActiveColor(prevColorRef.current);
    } else {
      prevColorRef.current = activeColor;
      setActiveColor(i);
    }
  };

  return (
    <div
      className={`color-picker-item ${
        activeColor === index && "selected-item"
      }`}
    >
      <div
        className="render-color"
        onMouseOver={() => handleColor(index)}
        onMouseOut={() => handleColor("prev")}
        onClick={() => handleColor(index)}
        style={{ background: `${colorCode}` }}
      />
    </div>
  );
};

function ProductDetailFC({
  getProductDetailApi,
  getAllNewArraivalAPI,
  createCartApi,
}) {
  let params = useParams();
  const dispatch = useDispatch();

  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openInstruction, setOpenInstruction] = useState();
  const [activeColor, setActiveColor] = useState(0);
  const [openCalculateRolls, setOpenCalculateRolls] = useState();
  const [showAllInstructions, setShowAllInstructions] = useState(false);
  const [openInstallerPriceCalculator, setOpenInstallerPriceCalculator] =
    useState();
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAllContents, setShowAllContents] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = React.useState(2);
  const [installerDate, setInstallerDate] = useState();
  const [installerTime, setInstallerTime] = useState();

  const handleConfirm = () => {};

  const handleShowAllInstructions = () => {
    setShowAllInstructions(!showAllInstructions);
  };
  const [newArraivalData, setNewArraivalData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const handleProductCount = ({ target: { name, value } }) => {
    if (value === "" || (value >= 1 && /^\d+$/.test(value))) {
      setQuantity(value === "" ? "" : parseInt(value, 10));
    }
  };
  const { register } = useForm();
  const getProductDetailAPI = () => {
    let query = {
      url_id: params.id,
    };
    getProductDetailApi(query)
      .then(({ response }) => setProductDetail(response))
      .then(() => setLoading(false));
  };
  const handleCardProduct = (prodData) => {
    dispatch({
      type: commonStateList.productDetail,
      payload: prodData,
    });

    history.push(`/home/product-details/${prodData._id}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedImg]);

  useEffect(() => {
    getProductDetailAPI();
    getAllNewArraival();
  }, [params.id]);

  const getAllNewArraival = () => {
    getAllNewArraivalAPI().then((res) => {
      setNewArraivalData(res?.response);
    });
  };
  const getCurrentItem = useMemo(
    () => productDetail?.colors?.[activeColor],
    [productDetail, activeColor]
  );

  console.log(getCurrentItem, "prodd");

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState([]);

  const allProductInstructions = [
    ...ProductInstructions1,
    ...ProductInstructions2,
    ...ProductInstructions3,
    ...ProductInstructions4,
  ];

  const handleFolderIconClick = () => {
    setPopupContent(allProductInstructions);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddToCart = () => {
    let body = {
      quantity: quantity,
      colorId: getCurrentItem.colorId,
      productId: params.id,
    };
    createCartApi(body)
      .then(() =>
        Toast({
          type: "success",
          message: "Item Added To Cart",
        })
      )
      .catch(({ message }) => {
        Toast({ type: "error", message });
      });
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = () => {
    setShowPopup(!showPopup);
  };

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
                        src: selectedImg
                          ? selectedImg
                          : getCurrentItem?.images[0],
                        className: "small-image",
                      },
                      largeImage: {
                        src: selectedImg
                          ? selectedImg
                          : getCurrentItem?.images[0],
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
                {getCurrentItem?.images?.length > 0 ? (
                  getCurrentItem?.images?.map((img, index) => (
                    <img
                      style={{
                        border: selectedImg === img ? "4px solid purple" : "",
                      }}
                      className="mx-1"
                      key={index}
                      src={img}
                      alt="dog"
                      onClick={() => setSelectedImg(img)}
                    />
                  ))
                ) : (
                  <></>
                )}
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
            <div className="d-flex align-items-center">
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <label className="ps-2">(32)</label>
            </div>
            <hr className="heading-line" />
            <div>
              <div className="info-heading-one">
                Color - {getCurrentItem?.colorName}
              </div>
              <div className="color-picker-container">
                {productDetail?.colors?.map((colorData, index) => (
                  <ColorFilter
                    colorData={colorData}
                    key={colorData._id}
                    activeColor={activeColor}
                    setActiveColor={setActiveColor}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="info-heading-one">Quantity (Roll)</div>
              <div className="d-flex justify-content-between order-count-container mb-5">
                <div
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity((prevState) => prevState - 1);
                    }
                  }}
                  className="me-1 p-4 order-count cursor-pointer"
                >
                  -
                </div>
                <NormalInput
                  name="quantity"
                  type="number"
                  value={quantity}
                  onChange={handleProductCount}
                  max="2"
                  className="mx-1 p-4 text-center order-count-input"
                  register={register}
                />
                <div
                  onClick={() => setQuantity((prevState) => prevState + 1)}
                  className="order-count ms-1 p-4 cursor-pointer"
                >
                  +
                </div>
              </div>
            </div>
            <div className="button-container d-flex mb-3">
              <div
                className="product-btn  d-flex"
                onClick={() => setOpenCalculateRolls(true)}
              >
                <img src={calculator_rolls}></img>
                <span> Calculate Rolls</span>
              </div>
              <button
                className="product-btn d-flex"
                onClick={() => setOpenInstallerPriceCalculator(true)}
              >
                <img src={IP_calculator}></img>
                <span> Installer Price Calculator </span>
              </button>
            </div>
            <div className="info-title-2 mt-5">
              Check availability in your area{" "}
            </div>
            <div className="pincode-check mb-5">
              <input type="text" placeholder="PINCODE"></input>
              <span>CHECK</span>
            </div>
            <div className="instructions-box-container">
              <div className="ib-container">
                <div>
                  <input
                    className="ib-checkBox"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  {showPopup && (
                    <div id="popup" className="popup">
                      <div className="popup-content">
                        <div className="close-icon-tips" onClick={closePopup}>
                          <span>&times;123</span>
                        </div>
                        <InstallerDateTime
                          installerDate={installerDate}
                          setInstallerDate={setInstallerDate}
                          installerTime={installerTime}
                          setInstallerTime={setInstallerTime}
                          handleConfirm={handleConfirm}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="ib-body">
                  <div>
                    <div className="ib-body-title">
                      Installation by Wallantics
                    </div>
                    <div className="ib-body-txt">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut dolore magna aliqua.
                      Ut enim ad minim veniam.{" "}
                    </div>
                    <div className="ib-body-price">
                      ₹800/Roll &ensp; *Need to Pay at the time of booking the
                      order {""}
                    </div>
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
                    <div className="Installtion-showall">
                      <div className="ib-body-2-title">
                        Instructions on Application of Wallpaper
                      </div>
                      <label onClick={handleShowAllInstructions}>
                        {showAllInstructions ? "SHOW LESS" : "SHOW ALL"}
                      </label>
                    </div>

                    <div className="allproducts-show">
                      {Array.isArray(allProductInstructions) ? (
                        allProductInstructions
                          .slice(
                            0,
                            showAllInstructions
                              ? allProductInstructions.length
                              : 3
                          )
                          .map(({ info, steps, image, id }, index) => (
                            <div
                              className="instructions-row-container"
                              style={{
                                backgroundImage: `url(${image})`,
                                border: "1px solid #000",
                                padding: "10px",
                                margin: "5px",
                                // flex: "1",
                              }}
                              key={id}
                            >
                              <label className="card-instructions-steps">
                                {steps}
                              </label>
                              <br />
                              <label className="card-instructions-info">
                                {info}
                              </label>
                            </div>
                          ))
                      ) : (
                        <div>Content is not available.</div>
                      )}
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
                onClick={handleAddToCart}
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
        <div className="Product-detail-cards">
          {newArraivalData.slice(0, 4).map((prodData) => (
            <CardThree
              onClickCard={handleCardProduct}
              prodData={prodData}
              setCartData={setCartData}
              cartData={cartData}
              key={prodData.id}
            />
          ))}
        </div>

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
      createCartApi: createCartApi,
      getAllNewArraivalAPI: getNewArraivalApi,
    },
    dispatch
  );
};

const ProductDetail = connect(null, mapDispatchToProps)(ProductDetailFC);

export default ProductDetail;
