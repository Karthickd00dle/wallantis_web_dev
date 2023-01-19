import BlogManagement from "component/Admin/DashboardPages/BlogManagement";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class BlogManagementClass extends Component {
  render() {
    return <BlogManagement />;
  }
}
export const BlogManagementPage = connect(null, null)(BlogManagementClass);
