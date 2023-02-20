import React from "react";
import { CustomHeader } from "component/common";
import { NormalFooter } from "component/common/Footer";
import { ChatBot } from "component/common/ChatBot";
import "assets/scss/layouts/HomeLayout.scss";

export function HomeLayout({ children }) {
  return (
    <>
      <div>
        <ChatBot />
      </div>
      <CustomHeader />
      <div className="container-layout">{children}</div>
      <NormalFooter />
    </>
  );
}
