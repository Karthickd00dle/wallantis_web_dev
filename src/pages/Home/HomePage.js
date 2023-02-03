import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Home } from "component/Home/Home";

// const Home = React.lazy(() => import("component/Home/Home"));
// Redux Connection

export class HomePageClass extends Component {
  render() {
    return (
      <Suspense fallback={<h1>Loading..Please Wait</h1>}>
        <Home />
      </Suspense>
    );
  }
}
export const HomePage = connect(null, null)(HomePageClass);
