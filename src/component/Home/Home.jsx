import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import wallpaperPng from "../../assets/images/wallpaperCard.png";
import Wallmurals from "../../assets/images/wallmurals.png"
import sticker from "../../assets/images/sticker.png"
import Blogbg from "assets/images/blogBg.png";
import googlePlay from "assets/images/googlePlay.png";
import qrSample from "assets/images/qrSample.png";
import appStore from "assets/images/appStore.png";
import HomeCardOne from "./subcomponents/CardOne";
import CardTwo from "./subcomponents/CardTwo";
import CardThree from "./subcomponents/CardThree";
import Wallmuralscard from "./subcomponents/Wallmuralscard";
import Sticker from "./subcomponents/Sticker";
import CatalogueBg from "../../assets/images/catalogueCardBackground.png";
import CardCatalogue from "./subcomponents/CardCatalogue";
import CardBlog from "./subcomponents/Cardblog";
import QuotesSVGComponent from "assets/svg/HomePage/qoutesSVG";
import {recentlyviewedProducts,artificialgrassProducts,bestsellerProducts,newarrivalsProducts,ecatalougeProducts,blogProducts} from "config";

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
                <Wallmuralscard wallmurals={Wallmurals}/>
                <Sticker sticker={sticker}/>
              </div>
            </div>
          </div>
        </div>

        <div className="why-wallantics-container">
          <div className="why-wallantics--title">Why WALLANTICS ?</div>

          <div className="why-wallantics-card-container">
            <CardTwo type="transparent-bg" />
            <CardTwo type="transparent-bg" />
            <CardTwo type="white-bg" />
            <CardTwo type="transparent-bg" />
            <CardTwo type="transparent-bg" />
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">Recently Viewed</div>
            <div className="view-all-but">VIEW ALL</div>
          </div>

          <div className="home-main-card-container">
            {recentlyviewedProducts.map((prodData)=>
            <CardThree prodData={prodData} key={prodData.id}/>
            )}
           
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
          {artificialgrassProducts.map((prodData)=>
            <CardThree prodData={prodData} key={prodData.id}/>
            )}
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">Best Seller</div>
            <div className="view-all-but">VIEW ALL</div>
          </div>

          <div className="home-main-card-container">
          {bestsellerProducts.map((prodData)=>
            <CardThree prodData={prodData} key={prodData.id}/>
            )}
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">New Arrivals</div>
            <div className="view-all-but">VIEW ALL</div>
          </div>

          <div className="home-main-card-container">
          {newarrivalsProducts.map((prodData)=>
            <CardThree prodData={prodData} key={prodData.id}/>
            )}
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

              <div className="room-vis-try-now--but">Try Now</div>

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
            {ecatalougeProducts.map((prodData)=>
            <CardCatalogue prodData={prodData} key={prodData.id}/>
            )}
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">Latest Blog</div>
            <div className="view-all-but">VIEW ALL</div>
          </div>
          <div className="home-main-card-container">
          {blogProducts.map((prodData)=>
            <CardBlog prodData={prodData} key={prodData.id}/>
            )}
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
