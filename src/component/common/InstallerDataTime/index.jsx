// import React, { useState } from "react";
// import "./style.scss";
// import { conditionalLoad } from "service/helperFunctions";
// import { CustomButton } from "..";

// const installerDateData = [
//   {
//     id: 1,
//     day: "Fri",
//     date: 25,
//     value: "2023-04-25",
//   },
//   {
//     id: 2,
//     day: "Sat",
//     date: 26,
//     value: "2023-04-26",
//   },

//   {
//     id: 3,
//     day: "Sun",
//     date: 27,
//     value: "2023-04-27",
//   },
//   {
//     id: 4,
//     day: "Mon",
//     date: 28,
//     value: "2023-04-28",
//   },
// ];

// const installerTimeData = [
//   {
//     id: 1,
//     label: "09:00 AM - 11:00 AM",
//     value: "09:00 AM - 11:00 AM",
//   },
//   {
//     id: 2,
//     label: "11:00 AM - 01:00 PM",
//     value: "11:00 AM - 01:00 PM",
//   },

//   {
//     id: 3,
//     label: "01:00 PM - 03:00 PM",
//     value: "01:00 PM - 03:00 PM",
//   },
//   {
//     id: 4,
//     label: "03:00 PM - 05:00 PM",
//     value: "03:00 PM - 05:00 PM",
//   },
//   {
//     id: 5,
//     label: "05:00 PM - 07:00 PM",
//     value: "05:00 PM - 07:00 PM",
//   },
//   {
//     id: 6,
//     label: "07:00 PM - 09:00 PM",
//     value: "07:00 PM - 09:00 PM",
//   },
// ];

// const InstallerDateTime = ({
//   installerDate,
//   setInstallerDate,
//   installerTime,
//   setInstallerTime,
//   handleConfirm,
// }) => {
//   return (
//     <div className="select-date-time-container">
//       {console.log(installerDate, installerTime, "date and time")}
//       <label className="title-label">
//         When should the professional arrive ?
//       </label>
//       <div className="date-container">
//         <label className="select-date-label">Select Date</label>
//         <div className="date-selection-container d-flex justify-content-between mt-3">
//           {installerDateData.map(({ id, day, date, value }) => (
//             <div
//               className={`cursor-pointer date-selection ${conditionalLoad(
//                 installerDate === value,
//                 "active"
//               )}`}
//               key={id}
//               onClick={() => setInstallerDate(value)}
//             >
//               <label className="day-label cursor-pointer">{day}</label>
//               <label className="date-label cursor-pointer">{date}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="date-container mt-4">
//         <label className="select-date-label">Select time slot</label>
//         <div className="time-selection-container d-flex justify-content-between mt-3">
//           {installerTimeData.map(({ id, label, value }) => (
//             <div
//               className={`cursor-pointer time-selection ${conditionalLoad(
//                 installerTime === value,
//                 "active"
//               )}`}
//               key={id}
//               onClick={() => setInstallerTime(value)}
//             >
//               <label className="time-label cursor-pointer">{label}</label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="d-flex justify-content-center">
//         <CustomButton
//           className="confirm-date-time-button mt-5 py-3 px-5"
//           onClick={handleConfirm}
//         >
//           Confirm Date & Time
//         </CustomButton>
//       </div>
//     </div>
//   );
// };

// export default InstallerDateTime

import React, { useState } from "react";
import "./style.scss";
import { conditionalLoad } from "service/helperFunctions";
import { CustomButton } from "..";

const installerDateData = [
  {
    id: 1,
    day: "Fri",
    date: 25,
    value: "2023-04-25",
  },
  {
    id: 2,
    day: "Sat",
    date: 26,
    value: "2023-04-26",
  },
  {
    id: 3,
    day: "Sun",
    date: 27,
    value: "2023-04-27",
  },
  {
    id: 4,
    day: "Mon",
    date: 28,
    value: "2023-04-28",
  },
];

const installerTimeData = [
  {
    id: 1,
    label: "09:00 AM - 11:00 AM",
    value: "09:00 AM - 11:00 AM",
  },
  {
    id: 2,
    label: "11:00 AM - 01:00 PM",
    value: "11:00 AM - 01:00 PM",
  },
  {
    id: 3,
    label: "01:00 PM - 03:00 PM",
    value: "01:00 PM - 03:00 PM",
  },
  {
    id: 4,
    label: "03:00 PM - 05:00 PM",
    value: "03:00 PM - 05:00 PM",
  },
  {
    id: 5,
    label: "05:00 PM - 07:00 PM",
    value: "05:00 PM - 07:00 PM",
  },
  {
    id: 6,
    label: "07:00 PM - 09:00 PM",
    value: "07:00 PM - 09:00 PM",
  },
];

const InstallerDateTime = ({
  installerDate,
  setInstallerDate,
  installerTime,
  setInstallerTime,
  handleConfirm,
}) => {
  const firstRow = installerTimeData.slice(0, 3);
  const secondRow = installerTimeData.slice(3, 6);

  return (
    <div className="select-date-time-container">
      {console.log(installerDate, installerTime, "date and time")}
      <label className="title-label">
        When should the professional arrive ?
      </label>
      <div className="date-container">
        <label className="select-date-label">Select Date</label>
        <div className="date-selection-container mt-3">
          {installerDateData.map(({ id, day, date, value }) => (
            <div
              className={`cursor-pointer date-selection ${conditionalLoad(
                installerDate === value,
                "active"
              )}`}
              key={id}
              onClick={() => setInstallerDate(value)}
            >
               <div className="date-info">
              <label className="day-label cursor-pointer">{day}</label>
              <label className="date-label cursor-pointer">{date}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="date-container mt-4">
        <label className="select-date-label">Select time slot</label>
        <div className="time-selection-container d-flex  mt-3">
          {firstRow.map(({ id, label, value }) => (
            <div
              className={`time-selection ${conditionalLoad(
                installerTime === value,
                "active"
              )}`}
              key={id}
              onClick={() => setInstallerTime(value)}
            >
              <label className="time-label cursor-pointer">{label}</label>
            </div>
          ))}
        </div>
        <div className="time-selection-container d-flex justify-content-between mt-3">
          {secondRow.map(({ id, label, value }) => (
            <div
              className={`cursor-pointer time-selection ${conditionalLoad(
                installerTime === value,
                "active"
              )}`}
              key={id}
              onClick={() => setInstallerTime(value)}
            >
              <label className="time-label cursor-pointer">{label}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <CustomButton
          className="confirm-date-time-button mt-5 py-3 px-5"
          onClick={handleConfirm}
           style={{ background: "#a26220" }}
        >
          Confirm Date & Time
        </CustomButton>
      </div>
    </div>
  );
};

export default InstallerDateTime;
