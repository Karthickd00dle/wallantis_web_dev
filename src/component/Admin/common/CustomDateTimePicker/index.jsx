import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import { CalendarIcon } from "assets/svg/Admin/Common";
import "./style.scss";

export const CustomDatePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer components={["DesktopDatePicker"]}>
        <DesktopDatePicker
          format="DD MMM YYYY"
          className="date-picker-style"
          components={{
            OpenPickerIcon: CalendarIcon,
          }}
          inputFormat="dd-mmm-yyyy"
          defaultValue={moment("12 Aug 2023")}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

// export const CustomTimeRangePicker = () => {
//   return <Datepicker controls={["time"]} select="range" touchUi={false} />;
// };
