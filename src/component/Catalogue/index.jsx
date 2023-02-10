import React, { useState } from "react";
import "./style.scss";
import { NormalNavigate } from "component/common";

export const Catalogue = () => {
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
        <span>VIEW ALL</span>
      </div>
      <div className="wallpaperlist">
        <div className="catalogue-wallpaper1">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="catalogue-wallpaper2">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="catalogue-wallpaper3">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="catalogue-wallpaper4">
          <div className="viewcatalogue">View Catalogue </div>
        </div>
      </div>

      <div className="catalogue-wallmural">
        <label>Wall Mural</label>
        <span>VIEW ALL</span>
      </div>

      <div className="wallmurallist">
        <div className="wallmural1">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallmural2">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallmural3">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallmural4">
          <div className="viewcatalogue">View Catalogue </div>
        </div>
      </div>

      <div className="catalogue-stickerwallpaper">
        <label>Sticker Wallpaper</label>
        <span>VIEW ALL</span>
      </div>

      <div className="wallpaperstickerlist">
        <div className="wallpapersticker1">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallpapersticker2">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallpapersticker3">
          <div className="viewcatalogue">View Catalogue </div>
        </div>

        <div className="wallpapersticker4">
          <div className="viewcatalogue">View Catalogue </div>
        </div>
      </div>
    </div>
  );
};
