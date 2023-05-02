import { ArchBackground } from "assets/svg/Profile";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import girlswithphone from "assets/images/Profile/girls with phones.png";
import "./style.scss";
import { CustomButton } from "component/common";

const ReferaFriendFC = () => {
  return (
    <div className="refer-a-friend-container">
      <ArchBackground className="arch-background" />
      <label className="refer-a-friend-label">Refer A Friend</label>
      <div className="position-relative d-flex justify-content-center pt-5">
        <img
          src={girlswithphone}
          className="friends-image"
          alt="girls_with_phone"
        />
      </div>
      <div className="referal-container pt-4">
        <div>
          <label className="time-to-referal-label">Time to Referral</label>
          <div className="pt-4 d-flex">
            <label className="coupon-label">hfdaier pvrj 4345</label>
            <CustomButton className="ms-3 copy-button">Copy</CustomButton>
          </div>
          <p className="ps-4 pt-4 referal-description">
            Simply refer a Friend, and share this link with your friends
          </p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const ReferaFriend = connect(null, mapDispatchToProps)(ReferaFriendFC);
export default ReferaFriend;
