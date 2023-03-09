import React, { useState } from "react";
import ReturnPolicy from "./Tabs/ReturnPolicy";
import TermsAndConditions from "./Tabs/TermsAndConditions";
import PrivacyPolicy from "./Tabs/PrivacyPolicy";

import "./index.scss";

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="settings-main">
      <div className="header-background">
        <p>Reports</p>
      </div>
      <div className="settings-comp">
        <p>Order Reports</p>

        <div className="settings-tabs">
          <p
            className={activeTab === 1 ? "tab-name active-tab" : "tab-name"}
            onClick={() => changeTab(1)}
          >
            Return Policy
          </p>
          <p
            className={activeTab === 2 ? "tab-name active-tab" : "tab-name"}
            onClick={() => changeTab(2)}
          >
            Terms and Conditions
          </p>
          <p
            className={activeTab === 3 ? "tab-name active-tab" : "tab-name"}
            onClick={() => changeTab(3)}
          >
            Privacy Policy
          </p>
        </div>
        <div className="border-bottom"></div>

        {activeTab === 1 ? (
          <ReturnPolicy />
        ) : activeTab === 2 ? (
          <TermsAndConditions />
        ) : (
          <PrivacyPolicy />
        )}
      </div>
    </div>
  );
}
