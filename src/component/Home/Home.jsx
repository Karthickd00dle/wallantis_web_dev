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
const HomeCardOne = React.lazy(() => import("./subcomponents/CardOne"));
const CardTwo = React.lazy(() => import("./subcomponents/CardTwo"));
const CardThree = React.lazy(() => import("./subcomponents/CardThree"));
const CatalogueBg = React.lazy(() =>
  import("../../assets/images/catalogueCardBackground.png")
);
const CardCatalogue = React.lazy(() => import("./subcomponents/CardCatalogue"));
const QuotesSVGComponent = React.lazy(() =>
  import("assets/svg/HomePage/qoutesSVG")
);
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
            <div className="view-all-but">VIEW ALL</div>
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
            <div className="view-all-but">VIEW ALL</div>
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
            <div className="view-all-but">VIEW ALL</div>
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
            <div className="view-all-but">VIEW ALL</div>
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
            <div className="view-all-but">VIEW ALL</div>
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
            <div className="view-all-but">VIEW ALL</div>
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

          <div className="home-main-card-container">
            <div className="testimonial-card-container">
              <div className="testimonial-card-inner-container">
                <div>
                  <div className="img-section"></div>
                  <div className="testimonial-card-title">James Pradip</div>
                  <div className="testimonial-card-location">Bangalore</div>
                </div>
                <QuotesSVGComponent className="quotes" />
              </div>
              <div className="testimonial-card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua,
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Home = connect(null, null)(HomeComponentMain);
