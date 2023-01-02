import { Privacypolicy } from "component/PrivacyPolicy";
import React from "react";
import { connect } from "react-redux";

export function PrivacypolicyPage() {
  return <Privacypolicy/>;
}
export const Privacypolicyeg = connect(null, null)(PrivacypolicyPage);