import { Careers } from "../../component/Careers";
import React from "react";
// Redux Connection
import { connect } from "react-redux";

export function CareerPageFunction() {
  return <Careers />;
}
export const CareerPage = connect(null, null)(CareerPageFunction);
