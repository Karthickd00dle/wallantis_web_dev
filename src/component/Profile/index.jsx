import React, { useState } from "react";
import profileUser from "assets/images/profileUser.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProfileForm from "./ProfileForm";
import SavedAddresses from "./SavedAddress";
import chatIcon from "assets/images/chatIcon.png";
import "react-tabs/style/react-tabs.css";
import "./index.scss";

export default function Profile() {
  const [inputData, setInputData] = useState({});
  const handleInput = (event) => {
    let input = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...input });
  };
  console.log(inputData);
  return (
    <div className="profile-main">
      <div>
        <div className="card-main">
          <div>
            <img src={profileUser} />
          </div>
          <div className="card-content">
            <h6>Hello,</h6>
            <h2>John Doe</h2>
          </div>
        </div>

        <Tabs className="tab-menus">
          <TabList className="tab-list">
            <Tab>Profile</Tab>
            <Tab>My Orders</Tab>
            <Tab>My Wishlist</Tab>
            <Tab>Saved Addresses</Tab>
            <Tab>Change Password</Tab>
            <Tab>Sign Out</Tab>
          </TabList>

          <div className="card-info">
            <img src={chatIcon} className="chatIcon" />
            <TabPanel>
              <ProfileForm handleInput={handleInput} inputData={inputData} />
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <SavedAddresses />
            </TabPanel>
            <TabPanel>
              <h2>Any content 5</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 6</h2>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
