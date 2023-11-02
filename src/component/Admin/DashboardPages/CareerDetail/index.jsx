import React, { useState, useEffect } from 'react'
import "./style.scss"
import { getCareerDetailsApi } from "action/CareerAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomNavBar from "component/Admin/common/CustomNavBar";


 function CareerDetailFC({getCareerDetailsApi}) {

   const [careerDetail, setCareerDetail] = useState();

   const location = useLocation();
   const id = new URLSearchParams(location.search).get("id");

   const getCareerDetailAPI = () => {
      let query = {
        url_id: id,
      };
      getCareerDetailsApi(query)
        .then(({ response }) => setCareerDetail(response))
        .then();
    };

    useEffect(() => {
      getCareerDetailAPI();
    }, []);
  return (
    <div>
      <CustomNavBar label="Career Management" />
    <div className="AddNewJob">
    <div className="d-flex">
    <div className="add-namejob">
        <label>Name of the Job</label><br/>
        <input type="text" placeholder="John" value={careerDetail?.nameOfTheJob}/>
     </div>
     <div className="add-postedby">
        <label>Posted By</label><br/>
        <input type="text" placeholder="Doe" value={careerDetail?.postedBy}/>
     </div>
     </div>


     <div className="d-flex">
    <div className="add-postingjob">
        <label>Date of posting Job</label><br/>
        <input type="text" placeholder="18-10-2022" value={careerDetail?.dateOfPostingJob.split('T')[0]}/>
     </div>
     <div className="add-location">
        <label>Location</label><br/>
        <input type="text" placeholder="Anna nagar, Chennai" value={careerDetail?.location}/>
     </div>
     </div>
  <div className="addjob-status">
  <label>Status</label>
  <div className="addjob-in">
     <div class="flex">
<input type="radio" name="radio" id="Active" checked={careerDetail?.status === 1}/>
<label for="radio2">Active</label>
</div>
<div class="flex">
<input type="radio" name="radio" id="Inactive" checked={careerDetail?.status === 0}/>
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
      getCareerDetailsApi: getCareerDetailsApi,
     },
     dispatch
   );
 };

 const CareerDetails = connect(null, mapDispatchToProps)(CareerDetailFC);

export default CareerDetails;
