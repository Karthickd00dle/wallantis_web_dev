import React from "react";
import userImage from "assets/icons/Admin/userImage.png";
import CloseIcon from "assets/icons/Admin/closeIcon.png";
import CommonButton from "component/Admin/common/CommonButton";
import CommonInput from "component/Admin/common/CommonInput";

export default function Profile() {
  return (
    <div>
      <div className="profile-card">
        <p>Profile</p>
        <div className="close-image">
          <img className="close-icon" src={CloseIcon} />
        </div>
        <div className="single-col gap">
          <img src={userImage} />

          <div className="picture-upload">
            <div className="upload-btn-wrapper">
              <CommonButton title="Choose File" rounded={true} />
              <input type="file" name="myfile" />
            </div>

            <p>
              Max file size is 1MB, Minimum dimension: 270x210 and suitable
              files are .jpg & .png
            </p>
          </div>
        </div>
        <div className="two-grid">
          <CommonInput label="Name" placeholder="Enter your Name" />
          <CommonInput label="Last Name" placeholder="Enter your Last Name" />
          <CommonInput
            label="Email Address"
            placeholder="Enter your Email Address"
          />
          <CommonInput
            label="Phone Number"
            placeholder="Enter your Phone Number"
          />
        </div>

        <div className="single-col btn-container">
          <button className="black-outlined">Cancel</button>
          <button className="purple-filled">Save </button>
        </div>
      </div>
    </div>
  );
}
