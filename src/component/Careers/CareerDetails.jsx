import { CustomButton, NormalInput, NormalNavigate } from "component/common";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import {
  CalendarIcon,
  LocationBlueIcon,
  ShareIcon,
  UploadIcon,
} from "assets/svg/Career";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const jobApplySchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Name must be atleast 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Please enter valid mail id")
    .required("Email is required"),
  summary: yup.string(),
});

const jobDescription = [
  {
    id: 1,
    title: "Genral Manager",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
    type: "Full-Time",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    qualification: [
      "Master’s Degree in or Equilant Field",
      "10+years of  experience required.",
      "Experience managing multiple, competing priorities simultaneously",
      "Experience interpreting data and making business recommendations",
      "Experience building, leading and managing teams.",
    ],
  },
  {
    id: 2,
    title: "Marketing Manager ",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
    type: "Full-Time",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    qualification: [
      "Master’s Degree in or Equilant Field",
      "10+years of  experience required.",
      "Experience managing multiple, competing priorities simultaneously",
      "Experience interpreting data and making business recommendations",
      "Experience building, leading and managing teams.",
    ],
  },
  {
    id: 3,
    title: "Customer Service Manager ",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
    type: "Full-Time",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    qualification: [
      "Master’s Degree in or Equilant Field",
      "10+years of  experience required.",
      "Experience managing multiple, competing priorities simultaneously",
      "Experience interpreting data and making business recommendations",
      "Experience building, leading and managing teams.",
    ],
  },
  {
    id: 4,
    title: "Accountant",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
    type: "Full-Time",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    qualification: [
      "Master’s Degree in or Equilant Field",
      "10+years of  experience required.",
      "Experience managing multiple, competing priorities simultaneously",
      "Experience interpreting data and making business recommendations",
      "Experience building, leading and managing teams.",
    ],
  },
  {
    id: 5,
    title: "Tech Assistant",
    label: "Paperwall",
    address:
      "115/A, Pycraft Garden Road, Nungambakkam, Chennai - 600034, Tamil Nadu.",
    type: "Full-Time",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    qualification: [
      "Master’s Degree in or Equilant Field",
      "10+years of  experience required.",
      "Experience managing multiple, competing priorities simultaneously",
      "Experience interpreting data and making business recommendations",
      "Experience building, leading and managing teams.",
    ],
  },
];

const CareerDetails = () => {
  const { id } = useParams();
  const [jobInfo, setJobInfo] = useState();
  const getJobInformation = () => {
    return jobDescription.filter((data) => data.id === Number(id));
  };
  const inputRef = React.useRef(null);
  useEffect(() => {
    setJobInfo(getJobInformation());
  }, []);

  const applyJob = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(jobApplySchema),
  });
  return (
    <div>
      <NormalNavigate navigationStyle="navigation-style">
        <div className="maincont">
          <label>{jobInfo?.[0]?.title}</label>
        </div>
      </NormalNavigate>
      <div className="job-details-container">
        <div className="job-details-header-container pb-3">
          <label>Become a part of the Wallantics Team </label>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="job-description-header-container pt-3">
          <div className="d-flex justify-content-between">
            <label>{jobInfo?.[0]?.title}</label>
            <div className="d-flex align-items-center cursor-pointer">
              <ShareIcon />
              <label className="ps-2 share-this-job cursor-pointer">
                Share this job
              </label>
            </div>
          </div>
          <div className="d-flex pt-2">
            <div className="d-flex align-items-center">
              <CalendarIcon />
              <label className="ps-2 label-type">Full-Time</label>
            </div>
            <div className="d-flex align-items-center ps-3">
              <LocationBlueIcon />
              <label className="ps-2 label-address">
                In Office : {jobInfo?.[0]?.address}
              </label>
            </div>
          </div>
        </div>
        <div className="about-position-header-container pt-5">
          <label>About the Position </label>
          <p>{jobInfo?.[0]?.jobDescription}</p>
        </div>
        <div className="qualification-header-container pt-5">
          <label>Qualifications</label>
          <ul className="pt-2">
            {jobInfo?.[0]?.qualification.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
        <form>
          <div className="job-input-container mt-5">
            <div className="input-container">
              <div className="input-field">
                <div>
                  <label>First name</label>
                  <label className="ps-1 required-label">*</label>
                </div>
                <NormalInput
                  name="firstName"
                  type="text"
                  className="input-styles mt-2"
                  placeholder="First name"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <span className="error-text">{errors.firstName.message}</span>
                )}
              </div>
              <div className="input-field pt-5">
                <div>
                  <label>Email</label>
                  <label className="ps-1 required-label">*</label>
                </div>
                <NormalInput
                  name="email"
                  className="input-styles mt-2"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="error-text">{errors.email.message}</span>
                )}
              </div>
              <div className="input-field pt-5">
                <label>Summary</label>
                <textarea
                  name="summary"
                  className="input-styles p-3 text-area mt-2"
                  placeholder="Tell us about yourself"
                  {...register("summary")}
                />
                {errors.summary && (
                  <span className="error-text">{errors.summary.message}</span>
                )}
              </div>
              <div className="input-field pt-5">
                <label>Resume</label>
                <div className="upload-resume mt-2" placeholder="Email">
                  <input type="file" ref={inputRef} hidden />
                  <div
                    className="d-flex flex-column align-items-center cursor-pointer "
                    onClick={() => inputRef.current.click()}
                  >
                    <UploadIcon />
                    <label className="pt-2  cursor-pointer">
                      Upload Your Resume
                    </label>
                  </div>
                </div>
              </div>
              <div className="input-field pt-5">
                <CustomButton
                  onClick={handleSubmit(applyJob)}
                  variant="contained"
                  className="apply-button"
                >
                  Apply
                </CustomButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerDetails;
