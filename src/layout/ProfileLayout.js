import React from "react";
import { CustomHeader } from "component/common";
import "assets/scss/layouts/AdminLayout.scss";
import { NormalFooter } from "component/common/Footer";
import "assets/scss/layouts/HomeLayout.scss";

export function ProfileLayout({ children }) {
  return (
    <>
      <CustomHeader />
      <div className="container-layout">{children}</div>
      <NormalFooter />
    </>
  );
}
