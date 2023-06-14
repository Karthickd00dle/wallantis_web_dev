import React from "react";
import { history } from "service/helpers";
import "./style.scss";

function Wallmuralscard({ wallmurals, route }) {
  return (
    <div className="home-card-wallmurals-container">
      <img src={wallmurals} />
      <div className="home-card-wallmurals--title">Wall Murals</div>
      <div className="home-card-wallmurals--title-two">{`Lorem ipsum dolor sit amet, consectetur adipiscing     sed do eiusmod tempor `}</div>
      <button onClick={() => history.push(route)}>Shop Now</button>
    </div>
  );
}

export default Wallmuralscard;
