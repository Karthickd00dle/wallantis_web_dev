import { Dealership } from "component/Dealership";
import React from "react";
import { connect } from "react-redux";

export function DealershipPage() {
  return <Dealership/>;
}
export const Dealershipeg = connect(null, null)(DealershipPage);