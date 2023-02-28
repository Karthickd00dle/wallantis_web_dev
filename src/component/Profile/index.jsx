import React, { useEffect, useState } from "react";
import profileUser from "assets/images/profileUser.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BreadCrumbs from "component/common/BreadCrumb";
import ProfileForm from "./ProfileForm";
import SavedAddresses from "./SavedAddress";
import AddNewAddress from "component/Profile/AddNewAddress";
import { bindActionCreators } from "redux";
import ChangePassword from "./ChangePassword";
import WishList from "./MyWishList";
import MyOrders from "./MyOrders";
import chatIcon from "assets/images/chatIcon.png";
import { useLocation } from "react-router-dom";
import { updateProfile } from "action/ProfileAct";
import "react-tabs/style/react-tabs.css";
import "./index.scss";
import { connect } from "react-redux";
import { history } from "service/helpers";
import { logout } from "service/utilities";

export function ProfileMain({ wishlistItemData, updateProfileAPICall }) {
  let location = useLocation();

  const [inputData, setInputData] = useState({});
  const [tabIndex, setTabIndex] = useState(location?.state);

  const [isAddressForm, setAddressForm] = useState(true);
  const handleInput = (event) => {
    let input = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...input });
  };
  const showAddressForm = () => {
    setAddressForm(!isAddressForm);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const updateProfile = () => {
    let payload = {
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      phoneNumber: inputData.mobile,
      roleType: inputData.profile,
      gender: inputData.gender,
    };
    updateProfileAPICall(payload).then((res) => {
      console.log(res);
    });
  };

  const signOut = () => {
    logout();
  };

  useEffect(() => {
    scrollToTop();
  }, [tabIndex]);

  useEffect(() => {
    setTabIndex(location?.state);
  }, [location?.state]);
  return isAddressForm ? (
    <>
      <div className="profile-main">
        <div>
          <div className="breadcrumbs">
            <BreadCrumbs crumbs={["Home", "Profile"]} />
          </div>
          <div className="card-main">
            <div>
              <img src={profileUser} />
            </div>
            <div className="card-content">
              <h6>Hello,</h6>
              <h2>John Doe</h2>
            </div>
          </div>

          <Tabs
            className="tab-menus"
            selectedIndex={tabIndex || 0}
            onSelect={(index) => {
              scrollToTop();
              setTabIndex(index);
            }}
          >
            <TabList className="tab-list">
              <Tab>Profile</Tab>
              <Tab>My Orders</Tab>
              <Tab>My Wishlist</Tab>
              <Tab>Saved Addresses</Tab>
              <Tab>Change Password</Tab>
              <Tab onClick={signOut}>Sign Out</Tab>
            </TabList>
            <img src={chatIcon} className="chatIcon" />
            <div className="card-info">
              <TabPanel>
                <ProfileForm
                  handleInput={handleInput}
                  inputData={inputData}
                  updateProfile={updateProfile}
                />
              </TabPanel>
              <TabPanel>
                <MyOrders />
              </TabPanel>
              <TabPanel>
                <WishList wishlistItemData={wishlistItemData} />
              </TabPanel>
              <TabPanel>
                <SavedAddresses showAddressForm={showAddressForm} />
              </TabPanel>
              <TabPanel>
                <ChangePassword />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  ) : (
    <AddNewAddress />
  );
}

const mapStateToProps = (state) => {
  return {
    wishlistItemData: state.commonStore.wishlistItemState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateProfileAPICall: updateProfile,
    },
    dispatch
  );
};

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileMain);
export default Profile;
