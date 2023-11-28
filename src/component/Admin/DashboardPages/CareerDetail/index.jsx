import React from 'react'
import "./style.scss"

export default function CareerDetail() {
  return (
    <div>
    <div className="AddNewJob">
    <div className="d-flex">
    <div className="add-namejob">
        <label>Name of the Job</label><br/>
        <input type="text" placeholder="John"/>
     </div>
     <div className="add-postedby">
        <label>Posted By</label><br/>
        <input type="text" placeholder="Doe"/>
     </div>
     </div>


     <div className="d-flex">
    <div className="add-postingjob">
        <label>Date of posting Job</label><br/>
        <input type="text" placeholder="18-10-2022"/>
     </div>
     <div className="add-location">
        <label>Location</label><br/>
        <input type="text" placeholder="Anna nagar, Chennai"/>
     </div>
     </div>
  <div className="addjob-status">
  <label>Status</label>
  <div className="addjob-in">
     <div className="flex">
<input type="radio" name="radio" id="Active" />
<label for="radio2">Active</label>
</div>
<div className="flex">
<input type="radio" name="radio" id="Inactive" />
<label for="radio3">Inactive</label>
</div>
</div>
</div>

<button className="add-jobcancelbtn">Cancel</button>
  <button className="add-jobpublishbtn">Save</button>
    </div>
</div>
  )
}
