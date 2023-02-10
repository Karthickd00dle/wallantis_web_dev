import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";
import Profile from "component/Profile";

export class ProfilePageClass extends Component {
  render() {
    return <Profile />;
  }
}
export const ProfilePage = connect(null, null)(ProfilePageClass);
