import React, { useState, useEffect } from 'react'
import "./style.scss"
import { getCareerDetailsApi } from 'action/CareerAct';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";



 function ViewCareerFC({getCareerDetailsApi}) {

   const [careerDetail, setCareerDetail] = useState();

   const location = useLocation();
   const id = new URLSearchParams(location.search).get("id");


   const getCareerDetailAPI = () => {
    let query = {
      url_id: id,
    };
    getCareerDetailsApi(query)
    .then((data) => setCareerDetail(data.response))
    .catch((error) => {
      console.error("API call failed:", error);
    });
  };

  useEffect(() => {
    getCareerDetailAPI();
  }, []);


  console.log(careerDetail,"careerDetails");
  return (
    <div>
      <CustomNavBar label="Career Management" />
      <CommonHistoryNavigation label="View Job" />
    <div className="viewJob ms-4 my-3">
   <div className='p-4 basic-info'>
    <p>Basic Information</p>
    <hr/>
   </div>
   <div className='job-details'>
    <div className='job-details-left'>
      <h6>Name of the Job</h6>
      <h6>Posted by</h6>
      <h6>Date of posting Job</h6>
      <h6>Location</h6>
      <h6>Status</h6>
    </div>
    <div className='job-details-right'>
      <h6>{careerDetail?.nameOfTheJob}</h6>
      <h6>{careerDetail?.postedBy}</h6>
      <h6>{careerDetail?.dateOfPostingJob.split("T")[0]}</h6>
      <h6>{careerDetail?.location}</h6>
      <h6>{careerDetail?.status === 1 ? "Active": "In Active"}</h6>
    </div>
   </div>
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

 const ViewCareer = connect(null, mapDispatchToProps)(ViewCareerFC);

export default ViewCareer;
