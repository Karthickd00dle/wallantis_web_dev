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
              <div className="title">Diamond Wallpaper</div>
            </div>

            <div className="flex space-between">
              <div className="color">Color - Green </div>
            </div>
            <div className="flex space-between mt-5">
              <div className="amount mt-4">₹3500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
