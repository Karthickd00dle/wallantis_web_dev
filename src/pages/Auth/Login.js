import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";
import { LoginComponent } from "component/Dashboard";
export class LoginClass extends Component {
  render() {
    return <LoginComponent />;
  }
}
export const Login = connect(null, null)(LoginClass);
