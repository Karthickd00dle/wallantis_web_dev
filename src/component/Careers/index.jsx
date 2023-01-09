import React from 'react'
import "./style.scss";
import { NormalNavigate } from 'component/common';
import careerswall from "../../assets/images/careerswall.svg"
import { BsFillPinAngleFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import worklife from "../../assets/images/worklife.svg"
import careerseducation from "../../assets/images/careerseducation.svg";
import careershealth from "../../assets/images/careerseducation.svg";
import supportingfamilies from "../../assets/images/supportingfamilies.svg";
import Salesmarket from "../../assets/images/Salesmarket.svg"; 
import Technology from "../../assets/images/Technology.svg"; 
import Ecofriendly from "../../assets/images/Ecofriendly.svg"; 

export const Careers = () => {
    return (
        <div>
        <div>
            <NormalNavigate navigationStyle="careers-head"><div className='maincont'><label>Careers at Paperwall</label></div></NormalNavigate>
        </div>
        <div>
        <div className="careershead">
        <div className="growwallantics">
            <label>Grow with Wallantics</label>
            <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc. Aliquam elit enim, cras est tortor in et nunc varius. Odio eget gravida sem at.</p>
        </div>
        <div className="careerswall">
            <img src={careerswall}/>
        </div>
        </div>
        <div className="uropportunities">
            <label>Your Opportunities</label>
        </div>
        <div className="opportunitycollab">
        <img className="sales-img" src={Salesmarket}/>
        <img className="tech-img" src={Technology}/>
        <img className="eco-img" src={Ecofriendly}/>
        <div className="salesandmarket">
           
          <label>Sales & Marketing</label>
          <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero </p>
        </div>


        <div className="technology">
          <label>Technology</label>
          <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero </p>
        </div>

        <div className="ecofriendly">
          <label>Eco-friendly</label>
          <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero </p>
        </div>
        </div>
        <div className="current-collab">
        <div className="currentopen">
       <label>Current Openings </label>
        </div>
        <div className="openingsinput">
            <input type="text" id="keyskills" placeholder="Keyskills, Designation"/>
            <input type="text" id="keyskills" placeholder="Location"/>
            <input type="text" id="keyskills" placeholder="Experience"/>
            <input type="text" id="keyskills" placeholder="Min CTC"/>
            <input type="text" id="keyskills" placeholder="Max CTC"/>
            <button>Search</button>
        </div>
        <div className="openingscontents">
        <div className="managerdetails">
            <label>General Manager</label>
            <span>View Details</span>
        </div>
        <div className="manageraddress">
            <BsFillPinAngleFill/>&nbsp; &nbsp;  &nbsp;<label>Paperwall</label> &nbsp; &nbsp;  &nbsp; <HiOutlineLocationMarker/>  &nbsp; &nbsp; <span>In Office :  115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil Nadu.</span>
        </div>
        </div>
        
        <div className="openingscontentsmarket">
        <div className="marketingdetails">
            <label>Marketing Manager </label>
            <span>View Details</span>
        </div>
        <div className="marketingaddress">
            <BsFillPinAngleFill/>&nbsp; &nbsp;  &nbsp;<label>Paperwall</label> &nbsp; &nbsp;  &nbsp; <HiOutlineLocationMarker/>  &nbsp; &nbsp; <span>In Office :  115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil Nadu.</span>
        </div>
        </div>

        <div className="openingscontentservice">
        <div className="servicedetails">
            <label>Customer Service Manager </label>
            <span>View Details</span>
        </div>
        <div className="serviceaddress">
            <BsFillPinAngleFill/>&nbsp; &nbsp;  &nbsp;<label>Paperwall</label> &nbsp; &nbsp;  &nbsp; <HiOutlineLocationMarker/>  &nbsp; &nbsp; <span>In Office :  115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil Nadu.</span>
        </div>
        </div>

        <div className="openingscontentaccountant">
        <div className="accountantdetails">
            <label>Accountant </label>
            <span>View Details</span>
        </div>
        <div className="accountantaddress">
            <BsFillPinAngleFill/>&nbsp; &nbsp;  &nbsp;<label>Paperwall</label> &nbsp; &nbsp;  &nbsp; <HiOutlineLocationMarker/>  &nbsp; &nbsp; <span>In Office :  115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil Nadu.</span>
        </div>
        </div>



        <div className="openingscontenttech">
        <div className="techdetails">
            <label>Tech Assistant </label>
            <span>View Details</span>
        </div>
        <div className="techaddress">
            <BsFillPinAngleFill/>&nbsp; &nbsp;  &nbsp;<label>Paperwall</label> &nbsp; &nbsp;  &nbsp; <HiOutlineLocationMarker/>  &nbsp; &nbsp; <span>In Office :  115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil Nadu.</span>
        </div>
        </div> 
        </div> 

        <div className="careerpolices">
            <label>Our Policies</label><br/><br/>
            </div>
            <div className="careercollab">
            <div className="careerpolicycontents">
            <img src={worklife}/>&nbsp;<span>WORK-LIFE EFFECTIVENESS </span>
            <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. </p>
        </div>

        <div className="careerpolicysupport">
            <img src={supportingfamilies}/>&nbsp;<span>SUPPORTING FAMILIES</span>
            <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. </p>
        </div>
        </div>

        <div className="careercollab2">
            <div className="careerpolicyhealth">
            <img src={careershealth}/>&nbsp;<span>HEALTH AND INSURANCE </span>
            <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. </p>
        </div>

        <div className="careerpolicyeducation">
            <img src={careerseducation}/>&nbsp;<span>CONTINUING EDUCATION </span>
            <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. </p>
        </div>
        </div>
    </div>
    </div>
    );
  };
