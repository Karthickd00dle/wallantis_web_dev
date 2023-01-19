import Settings from "component/Admin/DashboardPages/Settings";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class SettingsPageClass extends Component {
  render() {
    return <Settings />;
  }
}
export const SettingsPage = connect(null, null)(SettingsPageClass);
