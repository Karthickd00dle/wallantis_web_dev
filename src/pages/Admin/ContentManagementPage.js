import ContentManagement from "component/Admin/DashboardPages/ContentManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class ContentManagementClass extends Component {
  render() {
    return <ContentManagement />;
  }
}
export const ContentManagementPage = connect(null, null)(ContentManagementClass);
