import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import wallpaperPng from "../../assets/images/wallpaperCard.png";
import HomeCardOne from "./subcomponents/CardOne";

export const HomeComponentMain = () => {
  return (
    <>
      <div className="home-content-container">
        <div className="home-wall-mural">
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

        <div className="why-wallantics-container">
          <div className="why-wallantics--title">Why WALLANTICS ?</div>

          <div className="why-wallantics-card-container">
            
          </div>
        </div>
      </div>
    </>
  );
};

export const Home = connect(null, null)(HomeComponentMain);
