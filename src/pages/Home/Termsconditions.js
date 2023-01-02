import { Termsconditions } from "component/TermsConditions";
import React from "react";
import { connect } from "react-redux";

export function TermsconditionsPage() {
  return <Termsconditions/>;
}
export const Termsconditionseg = connect(null, null)(TermsconditionsPage);