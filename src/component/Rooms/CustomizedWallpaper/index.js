import React, { useState } from "react";
import Wallpapers from "./Tabs/Wallpapers";
import WallMurals from "./Tabs/WallMurals";
import StickerWallpapers from "./Tabs/StickerWallpaper";
import BackIcon from "assets/images/backIcon.png";
import "./index.scss";

export default function CustomizedWallpaper() {
  const [active, setActive] = useState(1);
  return (
    <div className="customized-wallpaper">
      <div className="back-btn-container">
        <button>
          <img src={BackIcon} />
          <p>Back to Website</p>
        </button>
      </div>
      <h3>Select a Theme</h3>

      <div className="tab-container">
        <button
          className={active === 1 ? "active" : ""}
          onClick={() => setActive(1)}
        >
          Wallpaper
        </button>
        <button
          className={active === 2 ? "active" : ""}
          onClick={() => setActive(2)}
        >
          Wall Mural
        </button>
        <button
          className={active === 3 ? "active" : ""}
          onClick={() => setActive(3)}
        >
          Sticker Wallpaper
        </button>
      </div>

      {active === 1 ? (
        <Wallpapers />
      ) : active === 2 ? (
        <>
          <WallMurals />
        </>
      ) : (
        <>
          <StickerWallpapers />
        </>
      )}
    </div>
  );
}
