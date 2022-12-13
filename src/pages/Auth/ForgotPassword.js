import { ForgotPassword } from "component";
import React from "react";
import { connect } from "react-redux";

export function ForgotPasswordPage() {
  return <ForgotPassword />;
}
export const ForgotPass = connect(null, null)(ForgotPasswordPage);
