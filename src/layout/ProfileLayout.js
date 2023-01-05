import React from "react";
import { CustomHeader } from "component/common";
import "assets/scss/layouts/AdminLayout.scss";
import { NormalFooter } from "component/common/Footer";
import "assets/scss/layouts/HomeLayout.scss";
import Header from "component/common/Header";

export function ProfileLayout({ children }) {
  return (
    <>
      <CustomHeader />
      {/* <Header/> */}
      <div className="container-layout">{children}</div>
      <NormalFooter />
    </>
  );
}
