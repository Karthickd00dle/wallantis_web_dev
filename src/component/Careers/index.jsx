import React from "react";
import "./style.scss";
import { CustomButton, NormalNavigate } from "component/common";
import Careerwall from "assets/images/Career/CareerWall.png";
import SalesandMarketing from "assets/images/Career/SalesandMarketing.png";
import Technology from "assets/images/Career/Technology.png";
import EcoFriendly from "assets/images/Career/Eco-Friendly.png";
import worklifeicon from "assets/icons/Career/work-life-icon.png";
import supportingicon from "assets/icons/Career/supporting-icon.png";
import healthicon from "assets/icons/Career/health-icon.png";
import continuingicon from "assets/icons/Career/continuing-icon.png";
import { NormalInput } from "component/common/NormalInput";
import { LocationIcon, PushPinIcon } from "assets/svg/Career";
import { history } from "service/helpers";

const jobDescription = [
  {
    id: 1,
    title: "Genral Manager",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
  },
  {
    id: 2,
    title: "Marketing Manager ",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
  },
  {
    id: 3,
    title: "Customer Service Manager ",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
  },
  {
    id: 4,
    title: "Accountant",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
  },
  {
    id: 5,
    title: "Tech Assistant",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
  },
];

const JobContents = ({ data: { id, title, label, address } }) => {
  return (
    <div className="job-content-container my-4 p-4">
      <div className="d-flex justify-content-between pb-3">
        <label className="position-name">{title}</label>
        <label
          className="view-details cursor-pointer"
          onClick={() => {
            history.push(`/profile/career-detail/${id}`);
          }}
        >
          View Details
        </label>
      </div>
      <div className="d-flex pt-3">
        <div>
          <PushPinIcon />
          <label className="ps-3 pinned-label">{label}</label>
        </div>
        <div className="ps-5">
          <LocationIcon />
          <label className="ps-3 address-label">In Office : {address}</label>
        </div>
      </div>
    </div>
  );
};

export const Careers = () => {
  return (
    <div>
      <div>
        <NormalNavigate navigationStyle="navigation-style">
          <div className="maincont">
            <label>Careers at Paperwall</label>
          </div>
        </NormalNavigate>
      </div>
      <div>
        <div className="banner-container-main">
          <div className="banner-container mt-4">
            <div className="banner-content-container ps-5">
              <label>Grow with Wallantics</label>
              <p>
                Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque
                mauris faucibus enim id sed feugiat amet, pharetra. Cras odio
                vivamus gravida felis bibendum in tellus. Diam velit sed arcu in
                nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id in turpis libero odio varius proin lectus.
                Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in
                cursus. Massa vitae, ut eget fermentum ut nunc. Aliquam elit
                enim, cras est tortor in et nunc varius. Odio eget gravida sem
                at.
              </p>
            </div>

            <img
              src={Careerwall}
              className="careerwall-image"
              alt="career_wall"
            />
          </div>
        </div>
        <div className="opportunities-header my-5">
          <label>Your Opportunities</label>
        </div>
        <div className="opportunities-container px-5">
          <div className="sales-and-marketing-container-main">
            <div className="sales-image-container">
              <img
                className="sales-img"
                src={SalesandMarketing}
                alt="sales_image"
              />
            </div>

            <div className="sales-and-marketing-container">
              <label className="pt-5 pb-4">Sales & Marketing</label>
              <p>
                Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque
                mauris faucibus enim id sed feugiat amet, pharetra. Cras odio
                vivamus gravida felis bibendum in tellus. Diam velit sed arcu in
                nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id in turpis libero
              </p>
            </div>
          </div>

          <div className="technology-container-main">
            <div className="tech-image-container">
              <img className="tech-img" src={Technology} alt="tech_image" />
            </div>
            <div className="technology-container">
              <label className="pt-5 pb-4">Technology</label>
              <p>
                Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque
                mauris faucibus enim id sed feugiat amet, pharetra. Cras odio
                vivamus gravida felis bibendum in tellus. Diam velit sed arcu in
                nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id in turpis libero
              </p>
            </div>
          </div>

          <div className="ecofriendly-container-main">
            <div className="eco-image-container">
              <img className="eco-img" src={EcoFriendly} alt="eco_image" />
            </div>
            <div className="ecofriendly-container">
              <label className="pt-5 pb-4">Eco-friendly</label>
              <p>
                Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque
                mauris faucibus enim id sed feugiat amet, pharetra. Cras odio
                vivamus gravida felis bibendum in tellus. Diam velit sed arcu in
                nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id in turpis libero
              </p>
            </div>
          </div>
        </div>
        <div className="current-openings-container-main">
          <div className="current-openings-header-container pt-5">
            <label>Current Openings</label>
          </div>
          <div className="current-openings-container">
            <div className="input-container">
              <div className="designation-input pe-2">
                <NormalInput
                  className="input-styles"
                  placeholder="Keyskills, Designation"
                />
              </div>
              <div className="location-input px-2">
                <NormalInput className="input-styles" placeholder="Location" />
              </div>
              <div className="experience-input px-2">
                <NormalInput
                  className="input-styles"
                  placeholder="Experience"
                />
              </div>
              <div className="min-ctc-input px-2">
                <NormalInput className="input-styles" placeholder="Min CTC" />
              </div>
              <div className="max-input px-2">
                <NormalInput className="input-styles" placeholder="Max CTC" />
              </div>
              <div className="search-button-container ps-2">
                <CustomButton variant="contained" className="search-button">
                  Search
                </CustomButton>
              </div>
            </div>
            <div className="mt-5">
              {jobDescription.map((data) => (
                <JobContents key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
        <div className="policies-container-main py-5">
          <div className="career-policy-header-container">
            <label>Our Policies</label>
          </div>
          <div className="policies-container">
            <div className="career-policy-content">
              <div className="d-flex align-items-center">
                <img src={worklifeicon} alt="work-life-effectiveness" />
                <label className="ps-2">WORK-LIFE EFFECTIVENESS </label>
              </div>
              <p className="pt-1">
                Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque
                mauris faucibus enim id sed feugiat amet, pharetra. Cras odio
                vivamus gravida felis bibendum in tellus. Diam velit sed arcu in
                nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id in turpis libero odio varius proin lectus.{" "}
              </p>
            </div>

            <div className="career-policy-content">
              <div className="d-flex align-items-center">
                <img src={supportingicon} alt="supporting-families" />
                <label className="ps-2">SUPPORTING FAMILIES</label>
              </div>

              <p className="pt-1">
                Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque
                mauris faucibus enim id sed feugiat amet, pharetra. Cras odio
                vivamus gravida felis bibendum in tellus. Diam velit sed arcu in
                nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id in turpis libero odio varius proin lectus.{" "}
              </p>
            </div>

            <div className="career-policy-content">
              <div className="d-flex align-items-center">
                <img src={healthicon} alt="health-insurance" />
                <label className="ps-2">HEALTH AND INSURANCE </label>
              </div>

              <p className="pt-1">
                Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque
                mauris faucibus enim id sed feugiat amet, pharetra. Cras odio
                vivamus gravida felis bibendum in tellus. Diam velit sed arcu in
                nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id in turpis libero odio varius proin lectus.{" "}
              </p>
            </div>

            <div className="career-policy-content">
              <div className="d-flex align-items-center">
                <img src={continuingicon} alt="continuing-education" />
                <label className="ps-2">CONTINUING EDUCATION </label>
              </div>
              <p className="pt-1">
                Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque
                mauris faucibus enim id sed feugiat amet, pharetra. Cras odio
                vivamus gravida felis bibendum in tellus. Diam velit sed arcu in
                nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Id in turpis libero odio varius proin lectus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
