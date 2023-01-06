import { NormalNavigate } from "component/common";
import React from "react";
import { connect } from "react-redux";

export const AboutUsComponentMain = () => {
  return <><NormalNavigate navigationStyle="style-container"><div><label>About US</label></div></NormalNavigate></>;
};

export const AboutUs = connect(null, null)(AboutUsComponentMain);
