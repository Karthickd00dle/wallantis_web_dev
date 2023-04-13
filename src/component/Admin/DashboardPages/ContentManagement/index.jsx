import React, { useState } from "react";
import ReturnPolicy from "./Tabs/ReturnPolicy";
import TermsAndConditions from "./Tabs/TermsAndConditions";
import { createNewContent } from "action/ContentAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PrivacyPolicy from "./Tabs/PrivacyPolicy";

import "./index.scss";

export function ContentManagementFC({ createNewContentAPI }) {
  const [activeTab, setActiveTab] = useState(1);
  const [content, setContent] = useState("");
  const createContent = () => {
    createNewContentAPI({
      contentType: activeTab,
      description: content,
    });
  };
  const changeTab = (tab) => {
    setActiveTab(tab);
    setContent("");
  };
  return (
    <div className="settings-main">
      <div className="header-background">
        <p>Content Management </p>
      </div>
      <div className="settings-comp">
        <p>Manage your content</p>

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
          <ReturnPolicy
            createContent={createContent}
            content={content}
            setContent={setContent}
          />
        ) : activeTab === 2 ? (
          <TermsAndConditions
            content={content}
            setContent={setContent}
            createContent={createContent}
          />
        ) : (
          <PrivacyPolicy
            content={content}
            setContent={setContent}
            createContent={createContent}
          />
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      createNewContentAPI: createNewContent,
    },
    dispatch
  );
};

const ContentManagement = connect(
  null,
  mapDispatchToProps
)(ContentManagementFC);
export default ContentManagement;
