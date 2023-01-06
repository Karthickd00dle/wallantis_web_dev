import { AboutWallantics } from "component/AboutWallantics";
import React from "react";
import { connect } from "react-redux";

export function AboutWallanticsFC() {
    return <AboutWallantics />;
  }
  export const AboutWallanticsPage = connect(null, null)(AboutWallanticsFC);