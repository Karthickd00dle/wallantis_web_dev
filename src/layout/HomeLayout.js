import React from "react";
import { CustomHeader, NormalNavigate } from "component/common";
import "assets/scss/layouts/AdminLayout.scss";
import { NormalFooter } from "component/common/Footer";
import "assets/scss/layouts/HomeLayout.scss";
import { Instructions } from "component/Instructions";

export function HomeLayout({ children }) {
  return (
    <>
      <CustomHeader/>
      {/* <Instructions/> */}
      <div className="container-layout">{children}</div>
      <NormalFooter />
    </>
  );
}
