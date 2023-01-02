import React from 'react'
import "./style.scss";
import Closeblind from "../../../assets/images/Closeblind.svg"

export function Installercalc1() {
  return (
    <div>
    <div className="installercalc1">
        <label>Installer Price Calculator</label>
        <img src={Closeblind}/>
        <p>Enter your wall dimensions or No.of Rolls to get estimate of Installation Price.  </p>
    <div className="installercalc1entries">
        <input type="text" placeholder="Width  (Ft)"/>
        <input type="text" placeholder="Height (Ft)"/>
        <label>OR</label>
        <input type="text" placeholder="No.of Rolls"/>
    </div>
    <button className="installercalc1button">CALCULATE</button>
    </div>
    </div>
  );
}
