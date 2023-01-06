import { Careers } from "component/Careers";
import React from "react";
import { connect } from "react-redux";

export function CareersPage() {
  return <Careers/>;
}
export const Careerseg = connect(null, null)(CareersPage);