import React from 'react'
import "./style.scss";
import Closeblind from "../../../assets/images/Closeblind.svg"

export function Selectdate() {
  return (
    <div>
    <div className="selectdate">
      <label>When should the professional arrive ?</label><br/><br/>
      <span>Select Date</span>
    <div className="datecollab">
        <div className="date1">
           <label>Fri 25</label>
        </div>
        <div className="date2">
           <label>Sat 26</label>
        </div>
        <div className="date3">
           <label>Sun 27</label>
        </div>
        <div className="date4">
           <label>Mon 28</label>
        </div>
       </div>
       <div className="selecttime">
        <label>Select time slot</label>
       </div>
       <div className="selectimecollab1">
         <div className='selectime1'>
           <label>09:00 AM - 11:00 AM </label>
         </div>
         <div className='selectime2'>
           <label>11:00 AM - 01:00 PM </label>
         </div>
         <div className='selectime3'>
           <label>01:00 PM - 03:00 PM </label>
         </div>
       </div>
       <div className="selectimecollab2">
         <div className='selectime4'>
           <label>03:00 PM - 05:00 PM  </label>
         </div>
         <div className='selectime5'>
           <label>05:00 PM - 07:00 PM </label>
         </div>
         <div className='selectime6'>
           <label>07:00 PM - 09:00 PM </label>
         </div>
       </div>
       <button className="selectdatebutton">Confirm Date & Time</button>
    </div>
    </div>
  );
}
