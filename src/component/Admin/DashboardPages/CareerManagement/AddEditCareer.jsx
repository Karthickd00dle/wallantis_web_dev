import React, { useState, useEffect } from 'react'
import "./style.scss"
import { getCareerDetailsApi } from "action/CareerAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";



 function AddEditCareerFC() {

   const [careerDetail, setCareerDetail] = useState();

  return (
    <div>
      <CustomNavBar label="Career Management" />
      <CommonHistoryNavigation label="Add New Job" />
    <div className="AddNewJob ms-4 my-3">
    <div className="d-flex">
    <div className="add-namejob">
        <label>Name of the Job</label><br/>
        <input type="text" placeholder="John" />
     </div>
     <div className="add-postedby">
        <label>Posted By</label><br/>
        <input type="text" placeholder="Doe" />
     </div>
     </div>
     <div className="d-flex">
    <div className="add-postingjob">
        <label>Date of posting Job</label><br/>
        <input type="text" placeholder="18-10-2022" />
     </div>
     <div className="add-location">
        <label>Location</label><br/>
        <input type="text" placeholder="Anna nagar, Chennai" />
     </div>
     </div>
  <div className="addjob-status">
  <label>Status</label>
  <div className="addjob-in">
     <div class="flex align-items-baseline">
<input type="radio" name="radio" id="Active" />
<label for="radio2">Active</label>
</div>
<div class="flex align-items-baseline">
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
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(
     {
      // getCareerDetailsApi: getCareerDetailsApi,
     },
     dispatch
   );
 };

 const AddEditCareer = connect(null, mapDispatchToProps)(AddEditCareerFC);

export default AddEditCareer;
