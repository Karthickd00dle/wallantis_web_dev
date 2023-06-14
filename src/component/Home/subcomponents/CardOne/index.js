import React from "react";
import { history } from "service/helpers";
import "./styles.scss";

function HomeCardOne({ wallpaperPng, route }) {
  return (
    <div className="home-card-one-container">
      <img src={wallpaperPng} />
      <div className="home-card-one--title">Wallpapers</div>
      <div className="home-card-one--title-two">{`Lorem ipsum dolor sit amet, consectetur adipiscing     sed do eiusmod tempor `}</div>
      <button onClick={() => history.push(route)}>Shop Now</button>
    </div>
  );
}

export default HomeCardOne;
