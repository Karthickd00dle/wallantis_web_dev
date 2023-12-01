import React from "react";
import wallImage from "assets/images/wallImage.png";
import StarRating from "component/common/StarRating";
import { CustomTextArea, CustomButton } from "component/common";
import "./index.scss";

export default function ReviewAndFeedback() {
  return (
    <div className="p-5 m-4">
      <div className="review-card direction-col">
        <div className="review-card-inner grey-card p-3">
          <div className="card-inner">
            <div className="flex p-4">
              <img src={wallImage} />
              <div className="direction-col left-margin">
                <div className="single-col space-between">
                  <p className="name">Bird Wallpaper</p>
                  <p className="purchased-on">Purchased on Nov 15,2022</p>
                </div>
                <p className="color">Color - Green </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rating-card">
        <div className="review-card-inner p-3">
          <p className="overall-rating">Overall rating</p>
          <StarRating />
        </div>

        <div className="review-card-inner p-3">
          <p className="overall-rating">Installation Quality</p>
          <StarRating />
        </div>

        <div className="review-card-inner p-3">
          <p className="overall-rating">Add a photo or video </p>

          <div className="add-photos align-center">
            <div className="upload-btn-wrapper">
              <button className="upload-button">Choose File</button>
              <input type="file" name="myfile" />
            </div>
          </div>
        </div>

        <div className="review-card-inner p-3">
          <p className="overall-rating">Add a written review </p>

          <CustomTextArea />
        </div>
        <div className="review-card-inner p-3 align-center">
          <CustomButton
            style={{
              width: "200px",
              height: "40px",
              borderRadius: "10px",
              color: "#FFFFFF",
            }}
          >
            Submit
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
