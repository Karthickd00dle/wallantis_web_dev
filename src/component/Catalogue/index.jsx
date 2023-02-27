import React from "react";
import { history } from "service/helpers";
import "./style.scss";
import { NormalNavigate } from "component/common";

export default function Catalogue() {
  return (
    <div>
      <div>
        <NormalNavigate navigationStyle="abtcatalogue-head">
          <div className="mainmenu">
            <label>Browse from our E-Catalouge</label>
          </div>
        </NormalNavigate>
      </div>
      <div className="catalogue-wallpaper">
        <label>Wallpaper</label>
        <span onClick={() => history.push("/home/product-listing/wallpaper")}>
          VIEW ALL
        </span>
      </div>
      <div className="wallpaperlist">
        <div className="catalogue-wallpaper">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="catalogue-wallpaper">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="catalogue-wallpaper">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="catalogue-wallpaper">
          <div className="viewcatalogue">View Catalogue </div>
        </div>
      </div>

      <div className="catalogue-wallmural">
        <label>Wall Mural</label>
        <span onClick={() => history.push("/home/product-listing/wall-murals")}>
          VIEW ALL
        </span>
      </div>

      <div className="wallmurallist">
        <div className="wallmural">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallmural">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallmural">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallmural">
          <div className="viewcatalogue">View Catalogue </div>
        </div>
      </div>

      <div className="catalogue-stickerwallpaper">
        <label>Sticker Wallpaper</label>
        <span
          onClick={() =>
            history.push("/home/product-listing/sticker-wallpaper")
          }
        >
          VIEW ALL
        </span>
      </div>

      <div className="wallpaperstickerlist">
        <div className="wallpapersticker">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallpapersticker">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallpapersticker">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallpapersticker">
          <div className="viewcatalogue">View Catalogue </div>
        </div>
      </div>
    </div>
  );
}
