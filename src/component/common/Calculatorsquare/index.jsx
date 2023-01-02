import React from 'react'
import "./style.scss";
import Closeblind from "../../../assets/images/Closeblind.svg"

export function Calculatorsquare() {
  return (
    <div>
    <div className="calculatorsquare">
        <label>Calculator Square Feet</label>
        <img src={Closeblind}/>
        <p>Enter your wall dimensions to get an estimate on budget for your project, along with the
quantity of blinds required. </p>
    <div className="calculatorsquareentries">
        <input type="text" placeholder="Width  (Ft)"/>
        <input type="text" placeholder="Height (Ft)"/>
        <button>CALCULATE</button>
    </div>
    </div>
    </div>
  );
}