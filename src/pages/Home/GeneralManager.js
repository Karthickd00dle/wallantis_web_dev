import { GeneralManager } from "component/GeneralManager";
import React from "react";
import { connect } from "react-redux";

export function GeneralmanagerPage() {
  return <GeneralManager/>;
}
export const Genaralmanagereg = connect(null, null)(GeneralmanagerPage);