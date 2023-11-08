import React from "react";
import { Chatbot, CustomHeader } from "component/common";
import { NormalFooter } from "component/common/Footer";

import "assets/scss/layouts/HomeLayout.scss";

export function HomeLayout({ children }) {
  return (
    <>
      <div>
        <Chatbot />
      </div>
      <CustomHeader />
      <div className="container-layout">{children}</div>
      <NormalFooter />
    </>
  );
}
