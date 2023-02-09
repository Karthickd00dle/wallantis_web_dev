import React from "react";
import { connect } from "react-redux";
import { Register } from "component/Auth/Register";

export function RegisterPageFC() {
  return <Register />;
}
export const RegisterPage = connect(null, null)(RegisterPageFC);
