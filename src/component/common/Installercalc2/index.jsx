import React from 'react'
import "./style.scss";
import Closeblind from "../../../assets/images/Closeblind.svg"

export function Installercalc2() {
  return (
    <div>
    <div className="installercalc2">
        <label>Installer Price Calculator</label>
        <img src={Closeblind}/>
        <p>Enter your wall dimensions or No.of Rolls to get estimate of Installation Price.  </p>
    <div className="installercalc2entries">
        <input type="text" placeholder="Width  (Ft)"/>
        <input type="text" placeholder="Height (Ft)"/>
        <label>OR</label>
        <input type="text" placeholder="No.of Rolls"/>
    </div>
    <div className="installer2enteragain">
     <label>Quantitiy of Rolls Needed</label>
     <label>Installation Price per Roll</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <label>Total Installation Charges (*Approx)</label>
    </div>
    <div className="installer2values">
     <label>4</label>
     <label>₹499</label>
     <label>₹1999</label>
    </div>
    <div className="installer2contents">
        <p>*Based on wall conditions installation charge will differ</p>
        <p>*Need to Pay ontime of Installation</p>
    </div>
    <div className="installer2buttons">
    <button className="installer2reset">Reset Value</button>
    <button className="installer2continue">Continue</button>
    </div>
    </div>
    </div>
  );
}
