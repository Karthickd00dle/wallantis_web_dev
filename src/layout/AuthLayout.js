import React, { Component } from "react";
import "assets/scss/layouts/AuthLayout.scss";
export class AuthLayout extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
