import { Returnpolicy } from "component/ReturnPolicy";
import React from "react";
import { connect } from "react-redux";

export function ReturnpolicyPage() {
  return <Returnpolicy/>;
}
export const Returnpolicyeg = connect(null, null)(ReturnpolicyPage);