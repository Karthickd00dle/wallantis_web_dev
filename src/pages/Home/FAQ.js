import { FAQ } from "component/FAQ";
import React from "react";
import { connect } from "react-redux";

export function FAQPage() {
  return <FAQ/>;
}
export const FAQeg = connect(null, null)(FAQPage);