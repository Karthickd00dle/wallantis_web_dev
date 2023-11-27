import React, { useEffect, useState } from "react";
import profileUser from "assets/images/profileUser.png";
import ProfileForm from "./ProfileForm";
import SavedAddresses from "./SavedAddress";

import { bindActionCreators } from "redux";
import ChangePassword from "./ChangePassword";
import WishList from "./MyWishList";
import MyOrders from "./MyOrders";
import { history } from "service/helpers";
import { useLocation } from "react-router-dom";
import {
  updateProfile,
  changeCurrentPassword,
  getCurrentProfile,
} from "action/ProfileAct";
import { verifyOTPApi } from "action/AuthAct";
import "react-tabs/style/react-tabs.css";
import "./index.scss";
import { connect } from "react-redux";
import { Toast } from "service/toast";
import { logout } from "service/utilities";
import { navigationTab } from "config";
import { conditionalLoad } from "service/helperFunctions";

const ProfileCard = ({ firstName, lastName }) => {
  return (
    <div className="profile-card-container px-4">
      <img
        height="85px"
        width="85px"
        className="profile-image"
        alt="profile_pic"
        src={profileUser}
      />
      <div className="d-flex flex-column ps-3">
        <label className="label-hello">Hello,</label>
        <label className="label-name">{`${firstName} ${lastName}`}</label>
      </div>
    </div>
  );
};

const NavigationPanel = ({
  tabData: { id, name },
  activeTab,
  setActiveTab,
}) => {
  return (
    <div
      className={`navigation-tab cursor-pointer ${conditionalLoad(
        activeTab === id,
        "active"
      )}`}
      onClick={() => setActiveTab(id)}
    >
      <label
        className={`ps-5 navigation-label ${conditionalLoad(
          activeTab === id,
          "active"
        )}`}
      >
        {name}
      </label>
    </div>
  );
};

const ActivePanel = ({
  activeTab,
  profileProps: {
    handleInput,
    inputData,
    updateProfile,
    verifyOTP,
    open,
    setOpen,
    loader,
  },

  savedAddressProps: { showAddressForm },
  changePasswordProps: { changePassword, passwordError },
}) => {
  switch (activeTab) {
    case 1:
      return (
        <ProfileForm
          handleInput={handleInput}
          inputData={inputData}
          updateProfile={updateProfile}
          verifyOTP={verifyOTP}
          open={open}
          setOpen={setOpen}
          loader={loader}
        />
      );
    case 2:
      return <MyOrders />;
    case 3:
      return <WishList />;
    case 4:
      return <SavedAddresses showAddressForm={showAddressForm} />;
    case 5:
      return (
        <ChangePassword
          changePassword={changePassword}
          passwordError={passwordError}
        />
      );
    case 6:
      return logout();
    default:
      return null;
  }
};

export function ProfileMain({
  updateProfileAPICall,
  changeCurrentPasswordAPI,
  verifyOTPApiCall,

  getCurrentProfileAPI,
}) {
  let location = useLocation();

  const [inputData, setInputData] = useState();
  const [currentData, setCurrentData] = useState();
  const [activeTab, setActiveTab] = useState(location?.state);
  const [isAddressForm, setAddressForm] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [passwordError, setError] = useState(false);
  const [loader, setLoader] = useState(true);

  const handleInput = (event) => {
    let input = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...input });
  };

  const showAddressForm = () => {
    setAddressForm(!isAddressForm);
  };

  const updateProfile = () => {
    let payload = {
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      phoneNumber: inputData.mobile,
      roleType: inputData.profile,
      gender: inputData.gender,
    };

    updateProfileAPICall(payload).then(() => {
      handleOpen();
      // Toast({
      //   type: "success",
      //   message: "Profile Updated!",
      // });
    });
  };

  const getCurrentProfile = () => {
    getCurrentProfileAPI()
      .then((res) => {
        setCurrentData(res.response);
        setInputData(res.response);
      })
      .then(() => {
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const verifyOTP = (OTP) => {
    let payload = {
      phoneNumber: inputData.mobile,
      otp: OTP,
    };

    verifyOTPApiCall(payload).then(() => {
      history.push("/auth/login");
    });
  };

  const changePassword = (data) => {
    let payload = {
      newPassword: data.newPassword,
      confirmPassword: data.repeatPassword,
    };

    if (data.newPassword === data.repeatPassword) {
      setError(false);
      changeCurrentPasswordAPI(payload).then(() => {
        Toast({
          type: "success",
          message: "Password Updated!",
        });
      });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getCurrentProfile();
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(location?.state);
  }, [location?.state]);

  return (
    <>
      <div className="profile-main">
        <div className="left-pane">
          <ProfileCard
            firstName={currentData?.firstName}
            lastName={currentData?.lastName}
          />
          <div className="navigation-panel-container mt-3">
            {navigationTab.map((tabData) => (
              <NavigationPanel
                key={tabData.id}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabData={tabData}
              />
            ))}
          </div>
        </div>
        <div className="right-pane ms-4">
          <ActivePanel
            activeTab={activeTab}
            profileProps={{
              handleInput,
              inputData,
              updateProfile,
              verifyOTP,
              open,
              setOpen,
              loader,
            }}
            savedAddressProps={{ showAddressForm }}
            changePasswordProps={{ changePassword, passwordError }}
          />
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateProfileAPICall: updateProfile,
      changeCurrentPasswordAPI: changeCurrentPassword,
      verifyOTPApiCall: verifyOTPApi,
      getCurrentProfileAPI: getCurrentProfile,
    },
    dispatch
  );
};

const Profile = connect(null, mapDispatchToProps)(ProfileMain);
export default Profile;
