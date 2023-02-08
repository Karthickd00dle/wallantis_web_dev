import React from "react";
import "./style.scss";
import { NormalNavigate } from "component/common";
import Chatmessage1 from "assets/images/Chatmessage1";

export const Contactus = () => {
  return (
    <div className="contact-us">
      <div>
        <NormalNavigate navigationStyle="contactus-head">
          <div className="mainmenu">
            <label>Contact Us</label>
          </div>
        </NormalNavigate>
      </div>
      <div className="contacthead">We’d love to hear from you</div>
      <div className="d-flex contactcards">
        <div className="address">
          <span>Address</span>
          <p>
            115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600 034, Tamil
            Nadu.
          </p>
        </div>

        <div className="contactcall">
          <span>Call On</span>
          <p>For any queries call us on</p>
          <small>+91 5684 64865</small>
          <br />
          <small>+91 65486 32135</small>
        </div>

        <div className="contactemail">
          <span>Email Us</span>
          <p>For any queries write to us on</p>
          <small>Support@gmail.com</small>
        </div>
        <Chatmessage1 className="contactmessage" />
      </div>

      <div className="getdirections">GET DIRECTIONS</div>
      <div className="needhelp">Need help in choosing products</div>
      <div className="d-flex names">
        <div className="first-Name">
          <span>First Name* </span>
          <input type="text" placeholder="Enter your Name" name="name" />
        </div>
        <div className="last-Name">
          <span>Last Name*</span>
          <br />
          <input type="text" placeholder="Enter your Name" name="name" />
        </div>
      </div>

      <div className="d-flex enumber">
        <div className="contact-email">
          <span>Email* </span>
          <input type="text" placeholder="Enter your Name" name="name" />
        </div>
        <div className="contact-mobilenumber">
          <span>Mobile Number* </span>
          <br />
          <input type="text" placeholder="Enter your Name" name="name" />
        </div>
      </div>

      <div className="d-flex countries">
        <div className="contact-country">
          <span>Country* </span>
          <input type="text" placeholder="Enter your Name" name="name" />
        </div>
        <div className="contact-state">
          <span>State*</span>
          <br />
          <input type="text" placeholder="Enter your Name" name="name" />
        </div>
      </div>

      <div className="d-flex citycode">
        <div className="contact-city">
          <span>City* </span>
          <input type="text" placeholder="Enter your Name" name="name" />
        </div>
        <div className="contact-pincode">
          <span>Pincode*</span>
          <br />
          <input type="text" placeholder="Enter your Name" name="name" />
        </div>
      </div>

      <div className="companyname">
        <span>Company Name (optional) </span>
        <br />
        <input type="text" placeholder="Enter your Company name" name="name" />
      </div>

      <div className="contact-message">
        <span>Message</span>
        <br />
        <input type="text" placeholder="Enter Message" name="name" />
      </div>

      <button className="contact-Enquire">Enquire Now </button>
    </div>
  );
};
