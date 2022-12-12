import { Login } from "component/Login/Login";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class LoginPageClass extends Component {
  render() {
    return <Login />;
  }
}
export const LoginPage = connect(null, null)(LoginPageClass);
