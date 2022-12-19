import React from "react";
import { CustomHeader, NormalNavigate } from "component/common";
import "assets/scss/layouts/AdminLayout.scss";
import { NormalFooter } from "component/common/Footer";
import "assets/scss/layouts/HomeLayout.scss";
import Profile from "pages/Profile";

export function ProfileLayout() {
  return (
    <>
      <CustomHeader />
      <div className="container-layout">
        <Profile />
      </div>
      <NormalFooter />
    </>
  );
}
