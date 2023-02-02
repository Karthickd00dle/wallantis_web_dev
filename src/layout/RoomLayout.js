import React from "react";
import { CustomHeader } from "component/common";
import { NormalFooter } from "component/common/Footer";
import "assets/scss/layouts/HomeLayout.scss";

export function RoomLayout({ children }) {
  return (
    <>
      <CustomHeader />
      <div className="container-layout">{children}</div>
      <NormalFooter />
    </>
  );
}
