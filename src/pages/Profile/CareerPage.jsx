import { Careers } from "../../component/Careers";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class CareerPageClass extends Component {
  render() {
    return <Careers />;
  }
}
export const CareerPage = connect(null, null)(CareerPageClass);
