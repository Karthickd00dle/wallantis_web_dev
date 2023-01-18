import React from "react";
import CommonInput from "component/Admin/common/CommonInput";
export default function ChangePassword() {
  return (
    <div>
      <div className="profile-card">
        <div>
          <CommonInput
            label="Current Password"
            placeholder="Enter your Current Password"
          />

          <CommonInput
            label="New Password"
            placeholder="Enter your New Password"
          />
          <CommonInput
            label="Confirm New Password"
            placeholder="Confirm New Password"
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
