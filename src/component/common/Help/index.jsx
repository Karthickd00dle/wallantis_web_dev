import React from 'react'
import "./style.scss";
import Helpclose from "../../../assets/images/Helpclose.svg"

export function Help() {
  return (
    <div>
      <div className="Howhelp">
        <label>How can we help?</label>
        <img src ={Helpclose}/>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Mobile number*"/>
        <div  className="chatboxmessage">
        <input type="text" placeholder="Message*"/>
        <button>Enquire Now</button>
        </div>
    </div>
    </div>
  );
}
