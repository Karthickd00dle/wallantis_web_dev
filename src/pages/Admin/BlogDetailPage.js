import BlogDetail from "component/Admin/DashboardPages/CustomerDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class BlogDetailPageClass extends Component {
  render() {
    return <BlogDetail />;
  }
}
export const BlogDetailPage = connect(null, null)(BlogDetailPageClass);
