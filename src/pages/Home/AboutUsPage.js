import { AboutUs } from "component/Home/AboutUs";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class AboutUsClass extends Component {
  render() {
    return <AboutUs />;
  }
}
export const AboutUsPage = connect(null, null)(AboutUsClass);
