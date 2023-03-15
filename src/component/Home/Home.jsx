import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { history } from "service/helpers";
import {
  recentlyviewedProducts,
  artificialgrassProducts,
  bestsellerProducts,
  newarrivalsProducts,
  ecatalougeProducts,
  blogProducts,
} from "config";
import "./styles.scss";
import { getAllProducts } from "action/ProductsAct";
import { bindActionCreators } from "redux";
import Wallmuralscard from "./subcomponents/Wallmuralscard";
import sticker from "../../assets/images/sticker.png";
import AdvancedCarousel from "component/common/Carousel";
import Sticker from "./subcomponents/Sticker";
import Wallmurals from "assets/images/wallmurals.png";
import wallpaperPng from "assets/images/wallpaperCard.png";
import celebrate from "assets/images/celebrate.png";
import bulbIcon from "assets/images/bulbIcon.png";
import CustomerIcon from "assets/images/customersIcon.png";
import Shield from "assets/images/Shield.png";
import Delivery from "assets/images/delivery.png";
import googlePlay from "assets/images/googlePlay.png";
import qrSample from "assets/images/qrSample.png";
import appStore from "assets/images/appStore.png";
import HomeCardOne from "./subcomponents/CardOne";
import CardTwo from "./subcomponents/CardTwo";
import CardThree from "./subcomponents/CardThree";
import CardCatalogue from "./subcomponents/CardCatalogue";
import roomVizBanner from "assets/images/roomVizBanner.png";
import QuotesSVGComponent from "assets/svg/HomePage/qoutesSVG";
import { commonStateList } from "service/actionType";
import { CustomButton } from "component/Admin/common/CustomButton";
import WallpaperShopNow from "assets/images/Dashboard/Wallpaper_Shopnow.png";
import WallmuralsShopNow from "assets/images/Dashboard/Wallmurals_Shopnow.png";
import StickerWallpaperShopNow from "assets/images/Dashboard/Sticker_Wallpaper_Shopnow.png";

const carouselData = [
  {
    name: "James Pradip 1",
    location: "Bangalore",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    name: "James Pradip 2",
    location: "Bangalore",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "James Pradip 3",
    location: "Bangalore",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "James Pradip 4",
    location: "Bangalore",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "James Pradip 5",
    location: "Bangalore",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function CardBlog({ prodData }) {
  const goTo = () => {
    history.push("/profile/blogdetails");
  };
  return (
    <div className="blog-container" onClick={goTo}>
      <img className="blog-post-img mt-3" src={prodData.image} alt="img" />
      <div className="blog-post-date">11.10.2022</div>
      <div className="blog-post-title">{prodData.title}</div>
      <div className="blog-post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor{" "}
      </div>
    </div>
  );
}

function HomeComponentMain({ getAllProductsAPI }) {
  const dispatch = useDispatch();
  const [favData, setFavData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [productList, setProductList] = useState([]);

  const handleCardProduct = (prodData) => {
    dispatch({
      type: commonStateList.productDetail,
      payload: prodData,
    });

    history.push("/home/product-details");
  };

  const getAllProducts = () => {
    getAllProductsAPI().then((res) => {
      setProductList(res?.response?.data);
    });

    setTimeout(() => {
      let artificialgrassProd = [];
      productList.filter((item) => {
        if (item.categoryId.category === "artificial grass") {
          artificialgrassProd.push(item);
        }
      });
    }, 3000);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="home-content-container">
        <div className="home-wall-mural">
          <div className="home-wall-mural-inner-container">
            <div className="home-wall-mural-title-container ">
              <label className="home-wall-mural--title">WALLANTICS</label>
              <label className="home-wall-mural--title-two">
                A Stylish and most beautiful Wallpapers{" "}
              </label>
            </div>
            {/* <div className="card-one-container">
              <div className="card-one-inner-container">
                <HomeCardOne
                  wallpaperPng={wallpaperPng}
                  route={"/home/product-listing/wallpaper"}
                />
                <Wallmuralscard
                  wallmurals={Wallmurals}
                  route={"/home/product-listing/wall-murals"}
                />
                <Sticker
                  sticker={sticker}
                  route={"/home/product-listing/sticker-wallpaper"}
                />
              </div>
            </div> */}
          </div>
        </div>

        <div className="why-wallantics-container">
          <div className="why-wallantics--title">Why WALLANTICS ?</div>

          <div className="why-wallantics-card-container">
            <CardTwo
              type="transparent-bg"
              title="1500+"
              subtitle="Collections"
              image={celebrate}
            />
            <CardTwo
              type="transparent-bg"
              title="10 Years"
              subtitle="of Innovation"
              image={bulbIcon}
            />

            <CardTwo
              type="white-bg"
              title="1 Million+"
              subtitle="Customers"
              image={CustomerIcon}
            />

            <CardTwo
              type="transparent-bg"
              title="Long life "
              subtitle="Durability"
              image={Shield}
            />
            <CardTwo
              type="transparent-bg"
              title="Free"
              subtitle="24x7 Delivery"
              image={Delivery}
            />
          </div>
        </div>

        <div className="wall-murals-container">
          <div className="wall-sec-three">
            <img src={WallpaperShopNow} alt="WallpaperShopNow" />
            <label className="wall-sec-title">Wallpapers</label>
            <p className="wall-sec-subject">
              Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
              tempor{" "}
            </p>
            <CustomButton variant="contained" className="wall-sec-three-btn">
              Shop Now
            </CustomButton>
          </div>
          <div className="wall-sec-three">
            <img src={WallmuralsShopNow} alt="WallmuralsShopNow" />
            <label className="wall-sec-title">Wallmurals</label>
            <p className="wall-sec-subject">
              Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
              tempor{" "}
            </p>
            <CustomButton variant="contained" className="wall-sec-three-btn">
              Shop Now
            </CustomButton>
          </div>
          <div className="wall-sec-three">
            <img src={StickerWallpaperShopNow} alt="StickerWallpaperShopNow" />
            <label className="wall-sec-title">Sticker Wallpapers</label>
            <p className="wall-sec-subject">
              Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
              tempor{" "}
            </p>
            <CustomButton variant="contained" className="wall-sec-three-btn">
              Shop Now
            </CustomButton>
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">Recently Viewed</div>
            <div
              className="view-all-but"
              onClick={() =>
                history.push("/home/product-listing/all-wallpaper")
              }
            >
              VIEW ALL
            </div>
          </div>

          <div className="home-main-card-container">
            {recentlyviewedProducts.map((prodData) => (
              <CardThree
                isHome
                favData={favData}
                setFavData={setFavData}
                cartData={cartData}
                setCartData={setCartData}
                onClickCard={handleCardProduct}
                prodData={prodData}
                key={prodData.id}
              />
            ))}
          </div>
        </div>

        <div className="main-container main-container-bg">
          <div className="main-header">
            <div className="main-title">Artificial Grass</div>
            <div
              className="view-all-but"
              onClick={() =>
                history.push("/home/product-listing/view-all-grass")
              }
            >
              VIEW ALL
            </div>
          </div>

          <div className="grass-txt">
            The art of green space for luxury interiors are mostly planned by
            using our quality artificial artificial grass in large sectors of
            corporate industry, residences , commercial shops and other
            decorative elements. Some designers used to hung in walls to give a
            pleasant wall finish to their customers.
          </div>
          <div className="home-main-card-container">
            {artificialgrassProducts.map((prodData) => (
              <CardThree
                isHome
                favData={favData}
                setFavData={setFavData}
                cartData={cartData}
                setCartData={setCartData}
                onClickCard={handleCardProduct}
                prodData={prodData}
                key={prodData.id}
              />
            ))}
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">Best Seller</div>
            <div
              className="view-all-but"
              onClick={() =>
                history.push("/home/product-listing/all-wallpaper")
              }
            >
              VIEW ALL
            </div>
          </div>

          <div className="home-main-card-container">
            {bestsellerProducts.map((prodData) => (
              <CardThree
                isHome
                favData={favData}
                setFavData={setFavData}
                cartData={cartData}
                setCartData={setCartData}
                onClickCard={handleCardProduct}
                prodData={prodData}
                key={prodData.id}
              />
            ))}
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">New Arrivals</div>
            <div
              className="view-all-but"
              onClick={() =>
                history.push("/home/product-listing/all-wallpaper")
              }
            >
              VIEW ALL
            </div>
          </div>

          <div className="home-main-card-container">
            {newarrivalsProducts.map((prodData) => (
              <CardThree
                isHome
                favData={favData}
                setFavData={setFavData}
                cartData={cartData}
                setCartData={setCartData}
                onClickCard={handleCardProduct}
                prodData={prodData}
                key={prodData.id}
              />
            ))}
          </div>
        </div>

        <div className="main-container main-container-bg">
          <div className="room-vis-conatiner">
            <div className="section-two">
              <div className="main-header">
                <div className="main-title">Room Visualizer</div>
              </div>

              <div className="room-vis-txt">
                Take inspiration to the next level with Room Visualizer Reinvent
                your room with new wallpaper using virtual design tool. Snap a
                photo of your room and select the options in wallpaper in
                seconds.
              </div>

              <div
                className="room-vis-try-now--but"
                onClick={() => history.push("/room-layout/room-visualizer")}
              >
                Try Now
              </div>

              <div className="dwnld-app-txt">Also Download our App</div>

              <div className="dwnld-app-link-container">
                <img src={googlePlay} />
                <img src={appStore} />
                <span> &ensp;or</span>
                <img src={qrSample} />
              </div>
            </div>

            <div className="section-one">
              <img src={roomVizBanner} alt="roomVizBanner" />
            </div>
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">E-Catalouge</div>
            <div
              className="view-all-but"
              onClick={() => history.push("/profile/Catalogue")}
            >
              VIEW ALL
            </div>
          </div>
          <div className="home-main-card-container">
            {ecatalougeProducts.map((prodData) => (
              <CardCatalogue
                onClickCard={handleCardProduct}
                prodData={prodData}
                key={prodData.id}
              />
            ))}
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">Latest Blog</div>
            <div
              className="view-all-but"
              onClick={() => history.push("/profile/latestblogs")}
            >
              VIEW ALL
            </div>
          </div>
          <div className="home-main-card-container">
            {blogProducts.map((prodData) => (
              <CardBlog
                onClickCard={handleCardProduct}
                prodData={prodData}
                key={prodData.id}
              />
            ))}
          </div>
        </div>

        <div className="main-container footer-margin">
          <div className="main-header">
            <div className="main-title">Testimonials</div>
          </div>
          <AdvancedCarousel carouselData={carouselData}>
            {carouselData.map((item) => {
              return (
                <>
                  <div className="home-main-card-container">
                    <div className="testimonial-card-container">
                      <div className="testimonial-card-inner-container">
                        <div>
                          <div className="img-section"></div>
                          <div className="testimonial-card-title">
                            {item.name}
                          </div>
                          <div className="testimonial-card-location">
                            {item.location}
                          </div>
                        </div>
                        <QuotesSVGComponent className="quotes" />
                      </div>
                      <div className="testimonial-card-content">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </AdvancedCarousel>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllProductsAPI: getAllProducts,
    },
    dispatch
  );
};

const Home = connect(null, mapDispatchToProps)(HomeComponentMain);
export default Home;
