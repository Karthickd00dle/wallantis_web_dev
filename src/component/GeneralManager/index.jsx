import React from "react";
import "./style.scss";
import { NormalNavigate } from "component/common";
import { BiShareAlt } from "react-icons/bi";
import Calendar from "assets/images/Calendar";
import { CiLocationOn } from "react-icons/ci";

export const GeneralManager = () => {
  return (
    <div>
      <div>
        <NormalNavigate navigationStyle="detail-head">
          <div className="mainmenu">
            <label>General Manager</label>
          </div>
        </NormalNavigate>
      </div>
      <div>
        <div className="wallanticsteam">
          <label>Become a part of the Wallantics Team</label>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
        <div className="generalcombine">
          <div className="GM">
            <label>General Manager</label>
          </div>
          <div className="generalhead">
            <BiShareAlt className="shareicon" />
            <label className="sharejob">Share this job</label>
          </div>
        </div>
        <div className="gmcontents">
          <Calendar /> &nbsp;<label>Full-Time</label> &nbsp;{" "}
          <CiLocationOn className="locationicon" size={22} />
          &nbsp;{" "}
          <span>
            In Office : 115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600
            034, Tamil Nadu.
          </span>
        </div>
        <div className="aboutposition">
          <label>About the Position </label>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        <div className="qualifications">
          <label>Qualifications</label>
          <ul>
            <p>
              <li>Master’s Degree in or Equilant Field</li>
            </p>
            <p>
              <li>10+years of experience required.</li>
            </p>
            <p>
              <li>
                Experience managing multiple, competing priorities
                simultaneously
              </li>
            </p>
            <p>
              <li>
                Experience interpreting data and making business recommendations
              </li>
            </p>
            <p>
              <li>Experience building, leading and managing teams.</li>
            </p>
          </ul>
        </div>

        <div className="gmentries">
          <div className="gmfname">
            <label>First name *</label>
            <br />
            <input type="text" id="fname" placeholder="First name" />
          </div>

          <div className="gmlname">
            <label>Last name *</label>
            <br />
            <input type="text" id="lname" placeholder="Last name" />
          </div>

          <div className="gmsummary">
            <label>Summary</label>
            <br />
            <input
              type="text"
              id="lname"
              placeholder="Tell us about yourself"
            />
          </div>

          <div className="gmresume">
            <label>Resume</label>
            <br />
            <input
              type="text"
              id="lname"
              placeholder="Tell us about yourself"
            />
          </div>
          <button className="gm-apply">Apply</button>
        </div>
        <div className="gm-h"></div>
      </div>
    </div>
  );
};
