import React from "react";
import { CustomHeader, NormalNavigate } from "component/common";
import "assets/scss/layouts/AdminLayout.scss";
import { conditionalLoad } from "service/helperFunctions";
import { NormalFooter } from "component/common/Footer";
import "assets/scss/layouts/HomeLayout.scss";
import { useLocation } from "react-router-dom";

export function HomeLayout({ children }) {
  let location = useLocation();
  let param = location.pathname;
  return (
    <>
      {/* <CustomHeader /> */}
      <div className="container-layout">
        {conditionalLoad(param !== "/home", <NormalNavigate />)}
        {children}
      </div>
      <NormalFooter />
    </>
  );
}
