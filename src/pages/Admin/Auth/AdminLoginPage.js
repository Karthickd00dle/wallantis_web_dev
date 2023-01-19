import Login from "component/AdminComponents/Auth/Login";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class LoginPageClass extends Component {
  render() {
    return <Login />;
  }
}
export const AdminLoginPage = connect(null, null)(LoginPageClass);
