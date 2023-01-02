import React from "react";
import { NormalSearch, CustomSelect } from "component/common";
import wallImage from "assets/images/wallImage.png";
import DeleteIcon from "assets/images/deleteIcon.png";
import "./index.scss";

export default function WishList() {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div>
          <NormalSearch placeholder="Search For Orders" />
        </div>
      </div>

      <div className="orders-card">
        <img src={DeleteIcon} className="delete-Icon" />
        <div className="flex">
          <img src={wallImage} />
          <div className="direction-col left-margin">
            <div className="flex space-between">
              <p className="title">Diamond Wallpaper</p>
            </div>

            <div className="flex space-between">
              <p className="color">Color - Green </p>
            </div>
            <div className="flex space-between mt-5">
              <p className="amount mt-4">₹3500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
