import { AboutWallantics } from "../../component/Aboutus";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class AboutUsClass extends Component {
  render() {
    return <AboutWallantics />;
  }
}
export const AboutUsPage = connect(null, null)(AboutUsClass);
