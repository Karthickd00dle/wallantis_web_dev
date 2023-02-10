import { ForgotPassword } from "component/Auth/ForgotPassword";
import React from "react";
import { connect } from "react-redux";

export function ForgotPasswordPageFC() {
  return <ForgotPassword />;
}
export const ForgotPasswordPage = connect(null, null)(ForgotPasswordPageFC);
