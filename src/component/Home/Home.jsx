import React from "react";
import { connect } from "react-redux";

export const HomeComponentMain = () => {
  return (
    <>
      <div className="">Helloo</div>
    </>
  );
};

export const Home = connect(null, null)(HomeComponentMain);
