import React from "react";
import "./style.scss";
import { NormalNavigate } from "component/common";
import Dealershipimg from "assets/images/Dealership.png";

export const Dealership = () => {
  return (
    <div>
      <div>
        <NormalNavigate navigationStyle="dealership-head">
          <div className="mainmenuu">Dealership</div>
        </NormalNavigate>
      </div>
      <div>
        <div className="dealershiphead">Why Dealership?</div>
        <div className="dcontentscollab">
          <div className="dealercontents">
            <img src={Dealershipimg} />
          </div>
          <div className="dealerinfo">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              tincidunt amet lorem ultrices iaculis amet, est, commodo purus.
              Est pellentesque amet donec massa sit nisl auctor. Euismod massa
              semper porta feugiat erat non velit bibendum eget. Nisi nullam
              auctor velit euismod volutpat. Iaculis ac nam potenti id. Rhoncus,
              scelerisque at dui id feugiat. Tortor, non scelerisque auctor
              mattis euismod augue cum vestibulum. Tristique dictum eu cras
              mauris nam et. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Et tincidunt amet lorem ultrices iaculis amet, est, commodo
              purus. Est pellentesque amet donec massa sit nisl auctor. Euismod
              massa semper porta feugiat erat non velit bibendum eget. Nisi
              nullam auctor velit euismod volutpat. Iaculis ac nam potenti id.
              Rhoncus, scelerisque at dui id feugiat. Tortor, non scelerisque
              auctor mattis euismod augue cum vestibulum. Tristique dictum eu
              cras mauris nam et. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Et tincidunt amet lorem ultrices iaculis amet,
              est, commodo purus. Est pellentesque amet donec massa sit nisl
              auctor. Euismod massa semper porta feugiat erat non velit bibendum
              eget. Nisi nullam auctor velit euismod volutpat. Iaculis ac nam
              potenti id. Rhoncus, scelerisque at dui id feugiat. Tortor, non
              scelerisque auctor mattis euismod augue cum vestibulum. Tristique
              dictum eu cras mauris nam et. Lorem ipsum dolor sit amet,{" "}
            </p>
          </div>
        </div>

        <div className="getintouch">Get in touch with us</div>
        <div className="d-flex names">
          <div className="first-name">
            <span>First Name* </span><br/>
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
          <div className="last-name">
            <span>Last Name*</span>
            <br />
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
        </div>

        <div className="d-flex enumber">
          <div className="Email">
            <span>Email* </span><br/>
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
          <div className="mobilenumber">
            <span>Mobile Number* </span>
            <br />
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
        </div>

        <div className="d-flex countries">
          <div className="country">
            <span>Country* </span><br/>
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
          <div className="state">
            <span>State*</span>
            <br />
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
        </div>

        <div className="d-flex citycode">
          <div className="city">
            <span>City* </span><br/>
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
          <div className="pincode">
            <span>Pincode*</span>
            <br />
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
        </div>

        <div className="d-flex companyname">
          <div className="companynamecol">
            <span>Company Name</span><br/>
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
          <div className="companyregistration">
            <span>Company Registration Number</span>
            <br />
            <input type="text" placeholder="Enter your Name" name="name" />
          </div>
        </div>

        <div className="message">
          <span>Message</span>
          <br />
          <input type="text" placeholder="Enter Message" name="name" />
        </div>

        <button className="dealer-enquire">Enquire Now </button>

        <div className="dealercontacthead">Contact Us</div>
        <div className="d-flex dealercontactcards">
          <div className="dealeraddress">
            <span>Address</span>
            <p>
              115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil
              Nadu.
            </p>
          </div>

          <div className="dealercontactcall">
            <span>Call On</span>
            <p>For any queries call us on</p>
            <small>+91 5684 64865</small>
            <br />
            <small>+91 65486 32135</small>
          </div>

          <div className="dealercontactemail">
            <span>Email Us</span>
            <p>For any queries write to us on</p>
            <small>Support@gmail.com</small>
          </div>
        </div>
      </div>
    </div>
  );
};
