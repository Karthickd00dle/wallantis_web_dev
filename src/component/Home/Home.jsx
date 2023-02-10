import React from "react";
import { connect } from "react-redux";
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
import QuotesSVGComponent from "assets/svg/HomePage/qoutesSVG";

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

function CardBlog(prodData) {
  return (
    <div className="blog-container">
      <img className="blog-post-img mt-3" src={prodData.prodData.image} />
      <div className="blog-post-date">11.10.2022</div>
      <div className="blog-post-title">{prodData.prodData.title}</div>
      <div className="blog-post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor{" "}
      </div>
    </div>
  );
}

export const HomeComponentMain = () => {
  return (
    <>
      <div className="home-content-container">
        <div className="home-wall-mural">
          <div className="home-wall-mural-inner-container">
            <div className="home-wall-mural--title">WALLANTICS</div>
            <div className="home-wall-mural--title-two">
              An Stylish and most beautiful Wallpapers{" "}
            </div>

            <div className="card-one-container">
              <div className="card-one-inner-container">
                <HomeCardOne wallpaperPng={wallpaperPng} />
                <Wallmuralscard wallmurals={Wallmurals} />
                <Sticker sticker={sticker} />
              </div>
            </div>
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
              <CardThree prodData={prodData} key={prodData.id} />
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
              <CardThree prodData={prodData} key={prodData.id} />
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
              <CardThree prodData={prodData} key={prodData.id} />
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
              <CardThree prodData={prodData} key={prodData.id} />
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

            <div className="section-one"></div>
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
              <CardCatalogue prodData={prodData} key={prodData.id} />
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
              <CardBlog prodData={prodData} key={prodData.id} />
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
};

export const Home = connect(null, null)(HomeComponentMain);
