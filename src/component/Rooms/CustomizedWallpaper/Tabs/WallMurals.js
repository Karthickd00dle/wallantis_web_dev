import React from "react";
import Wall from "assets/images/Wall.png";
import "./index.scss";

export default function WallMurals() {
  return (
    <div className="grid-main">
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Animal & Insect</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Bohemian</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Botanical</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Living Room</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Living Room</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Living Room</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Living Room</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Living Room</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Living Room</p>
      </div>
      <div className="wallpaper-child">
        <img src={Wall} className="wallpaper-image" />
        <p>Living Room</p>
      </div>
    </div>
  );
}
