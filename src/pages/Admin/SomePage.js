import AdminComponent from "component/Admin";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class SomePageClass extends Component {
  render() {
    return <div>An Example Page</div>;
  }
}
export const SomePage = connect(null, null)(SomePageClass);
