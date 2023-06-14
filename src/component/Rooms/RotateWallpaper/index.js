import React, { useState } from "react";
import Sofa from "assets/images/sofa.png";
import backOutline from "assets/images/backOutline.png";
import { NormalSearch } from "component/common";
import DiamondWallpaper from "assets/images/greenBack.png";
import BrownWallpaper from "assets/images/brownBack.png";
import Illiusion from "assets/images/illusion.png";
import DayDream from "assets/images/daydream.png";
import BackIcon from "assets/images/backIcon.png";
import "./index.scss";

const Undo = React.lazy(() => import("assets/svg/Undo"));
const LikeBtn = React.lazy(() => import("assets/svg/LikeBtn"));
const NoLayer = React.lazy(() => import("assets/svg/NoLayer"));
const Cart = React.lazy(() => import("assets/svg/Cart"));

export default function RotateWallpaper() {
  const [currentWall, setCurrentWall] = useState(DiamondWallpaper);
  const changeWallpaper = (wallpaper) => {
    setCurrentWall(wallpaper);
  };
  return (
    <div className="rotate-wallpaper">
      <div className="wallpaper-container">
        <div className="back-btn-container">
          <button>
            <img src={BackIcon} />
            <p>Back to Website</p>
          </button>
        </div>
        <div className="action-btns">
          <div className="button-outline">
            <NoLayer />
          </div>
          <div className="button-outline">
            <Cart />
          </div>
          <div className="button-outline">
            <Undo />
          </div>
          <div className="button-outline">
            <LikeBtn />
          </div>
        </div>
        <div className="container">
          <div className="image-stack">
            <div className="image-stack__item image-stack__item--bottom">
              <img src={currentWall} alt="" />
            </div>
            <div className="image-stack__item image-stack__item--top">
              <img src={Sofa} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="texture-container">
        <div className="texture-header">
          <img src={backOutline} />
          <h3>Textures</h3>
        </div>
        <div className="mt-3">
          <NormalSearch placeholder="Search" />
        </div>
        <div className="grid-main">
          <div className="grid-child">
            <img
              src={DiamondWallpaper}
              onClick={() => changeWallpaper(DiamondWallpaper)}
            />
            <p>Diamond Wallpaper </p>
          </div>
          <div className="grid-child">
            <img
              src={BrownWallpaper}
              onClick={() => changeWallpaper(BrownWallpaper)}
            />
            <p>Brown Wallpaper </p>
          </div>
          <div className="grid-child">
            <img src={Illiusion} onClick={() => changeWallpaper(Illiusion)} />
            <p>Illusion Wallpaper </p>
          </div>
          <div className="grid-child">
            <img src={DayDream} onClick={() => changeWallpaper(DayDream)} />
            <p>Daydreamer Wallpaper </p>
          </div>
        </div>
      </div>
    </div>
  );
}
