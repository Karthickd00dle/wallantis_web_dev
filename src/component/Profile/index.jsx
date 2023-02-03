import React, { useEffect, useState } from "react";
import profileUser from "assets/images/profileUser.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BreadCrumbs from "component/common/BreadCrumb";
import ProfileForm from "./ProfileForm";
import SavedAddresses from "./SavedAddress";
import AddNewAddress from "component/Profile/AddNewAddress";
import ChangePassword from "./ChangePassword";
import WishList from "./MyWishList";
import MyOrders from "./MyOrders";
import chatIcon from "assets/images/chatIcon.png";
import { useLocation } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import "./index.scss";

export default function Profile() {
  let location = useLocation();
  console.log(location?.state);
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

  useEffect(() => {
    scrollToTop();
  }, [tabIndex]);
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
              <Tab>Sign Out</Tab>
            </TabList>
            <img src={chatIcon} className="chatIcon" />
            <div className="card-info">
              <TabPanel>
                <ProfileForm handleInput={handleInput} inputData={inputData} />
              </TabPanel>
              <TabPanel>
                <MyOrders />
              </TabPanel>
              <TabPanel>
                <WishList />
              </TabPanel>
              <TabPanel>
                <SavedAddresses showAddressForm={showAddressForm} />
              </TabPanel>
              <TabPanel>
                <ChangePassword />
              </TabPanel>
              <TabPanel>
                <h2>Any content 6</h2>
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
