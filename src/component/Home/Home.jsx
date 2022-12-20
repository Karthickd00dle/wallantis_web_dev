import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import wallpaperPng from "../../assets/images/wallpaperCard.png";
import HomeCardOne from "./subcomponents/CardOne";
import CardTwo from "./subcomponents/CardTwo";
import CardThree from "./subcomponents/CardThree";

import CatalogueBg from "../../assets/images/catalogueCardBackground.png";
import CardCatalogue from "./subcomponents/CardCatalogue";

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
                <HomeCardOne wallpaperPng={wallpaperPng} />
                <HomeCardOne wallpaperPng={wallpaperPng} />
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
            <CardThree />
            <CardThree />
            <CardThree />
            <CardThree />
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">Best Seller</div>
            <div className="view-all-but">VIEW ALL</div>
          </div>

          <div className="home-main-card-container">
            <CardThree />
            <CardThree />
            <CardThree />
            <CardThree />
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">New Arrivals</div>
            <div className="view-all-but">VIEW ALL</div>
          </div>

          <div className="home-main-card-container">
            <CardThree />
            <CardThree />
            <CardThree />
            <CardThree />
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">E-Catalouge</div>
            <div className="view-all-but">VIEW ALL</div>
          </div>
          <div className="home-main-card-container">
            <CardCatalogue CatalogueBg={CatalogueBg} />
            <CardCatalogue CatalogueBg={CatalogueBg} />
            <CardCatalogue CatalogueBg={CatalogueBg} />
            <CardCatalogue CatalogueBg={CatalogueBg} />
            <CardCatalogue CatalogueBg={CatalogueBg} />
          </div>
        </div>

        <div className="main-container">
          <div className="main-header">
            <div className="main-title">Testimonials</div>
          </div>

          <div className="home-main-card-container">
            <div className="testimonial-card-container">
              <div className="img-section"></div>
              <div className="testimonial-card-title">James Pradip</div>
              <div className="testimonial-card-location">Bangalore</div>
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
