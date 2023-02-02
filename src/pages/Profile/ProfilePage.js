import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";
const Profile = React.lazy(() => import("component/Profile"));
export class ProfilePageClass extends Component {
  render() {
    return <Profile />;
  }
}
export const ProfilePage = connect(null, null)(ProfilePageClass);
