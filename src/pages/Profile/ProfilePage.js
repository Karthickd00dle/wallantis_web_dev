import Profile from "component/Profile";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ProfilePageClass extends Component {
  render() {
    return <Profile />;
  }
}
export const ProfilePage = connect(null, null)(ProfilePageClass);
