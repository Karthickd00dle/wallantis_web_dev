import React, { useState } from "react";
import Profile from "./Tabs/Profile";
import ChangePassword from "./Tabs/ChangePassword";
import "./index.scss";

export default function SettingsComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="settings-main">
      <div className="header-background">
        <p>Settings</p>
      </div>
      <div className="settings-comp">
        <p>Manage your Team Members</p>

        <div className="settings-tabs">
          <p
            className={activeTab === 1 ? "tab-name active-tab" : "tab-name"}
            onClick={() => changeTab(1)}
          >
            Profile settings
          </p>
          <p
            className={activeTab === 2 ? "tab-name active-tab" : "tab-name"}
            onClick={() => changeTab(2)}
          >
            Change Password
          </p>
        </div>
        <div className="border-bottom"></div>

        {activeTab === 1 ? <Profile /> : <ChangePassword />}
      </div>
    </div>
  );
}
