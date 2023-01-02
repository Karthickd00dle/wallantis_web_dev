import { Home } from "component/Home/Home";
import ProductDetailComponent from "component/ProductDetail";
import React, { Component } from "react";
// Redux Connection
import { connect } from "react-redux";

export class HomePageClass extends Component {
  render() {
    // return <Home />;
    return <ProductDetailComponent/>
  }
}
export const HomePage = connect(null, null)(HomePageClass);
