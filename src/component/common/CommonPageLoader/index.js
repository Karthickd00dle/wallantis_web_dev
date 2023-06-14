import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

export class CommonPageLoaderClass extends Component {
  render() {
    return (
      <div className="custom_loader">
        <Loader type="ThreeDots" color="#003975" height={50} width={80} />
      </div>
    );
  }
}
let component = CommonPageLoaderClass;

export const CommonPageLoader = connect(null, null)(component);
