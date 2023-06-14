import React from 'react'
import "./style.scss";
import Closeblind from "../../../assets/images/Closeblind.svg"

export function Rollscalc1() {
  return (
    <div>
   <div className="rolls2">
   <label>Rolls Calculator</label>
        <img src={Closeblind}/>
        <p>Enter your wall dimensions to get an estimate on budget for your project, along with the
quantity of Rolls required.  </p>
    <div className="rollscalc2entries">
        <input type="text" placeholder="Width  (Ft)"/>
        <input type="text" placeholder="Height (Ft)"/>
    </div>
    <div className="rolls2enteragain">
     <label>Room Space</label>
     <label>Quantitiy of Rolls</label>
     <label>Price</label>
    </div>
    <div className="rolls2values">
     <label>30ft x 10ft</label>
     <label>4</label>
     <label>₹8599</label>
    </div>
    <div className="rolls2buttons">
    <button className="rolls2reset">Reset Value</button>
    <button className="rolls2continue">Continue</button>
    </div>
   </div>
    </div>
  );
}
