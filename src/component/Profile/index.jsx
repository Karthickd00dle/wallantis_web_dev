import React from "react";
import profileUser from "assets/images/profileUser.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./index.scss";

export default function Profile() {
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
            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
