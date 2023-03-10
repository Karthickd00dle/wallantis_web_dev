import React, { useState } from "react";
import { CommonDatePicker } from "component/Admin/common/CommonDatePicker";
import CommonButton from "component/Admin/common/CommonButton";
import downloadIcon from "assets/icons/Admin/downloadIcon.png";
import CommonSelect from "component/Admin/common/CommonSelect";
import ExcelIcon from "assets/icons/Admin/excelIcon.png";
import PdfIcon from "assets/icons/Admin/pdfIcon.png";
import { history } from "service/helpers";
import "./index.scss";

export default function Reports() {
  const [datepicker, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <div className="dashboard-main">
      <div className="header-background">
        <p>Reports</p>
      </div>

      <div className="manage-reports">
        <div className="single-col justify-content-SB manage-reports">
          <p>Manage Your reports</p>
          <CommonButton title="Download CSV" icon={downloadIcon} />
        </div>

        <div className="single-col align-items date-picker-container">
          <div className="single-col align-items justify-content-SB">
            <div>
              <p>Filter by Date</p>
            </div>
            <div className="single-col">
              <CommonDatePicker
                startDate={datepicker?.startDate}
                setStartDate={(date) =>
                  setDate({ ...datepicker, startDate: date })
                }
                placeholderText="From date"
              />
              <CommonDatePicker
                startDate={datepicker?.endDate}
                setStartDate={(date) =>
                  setDate({ ...datepicker, endDate: date })
                }
                placeholderText="To date"
              />
            </div>

            <div className="select-option">
              <CommonSelect
                options={["Weekly", "Monthly", "Yearly", "Daily"]}
              />
            </div>
          </div>
        </div>

        <div className="cards-grid-main cards-section">
          <div
            className="report-card"
            onClick={() => history.push("/admin/new-order")}
          >
            <p>Order Report</p>

            <div className="icons">
              <img src={ExcelIcon} />
              <img src={PdfIcon} />
            </div>
            <div className="single-col align-items justify-content-SB">
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
            </div>
          </div>
          <div
            className="report-card"
            onClick={() => history.push("/admin/new-order")}
          >
            <p>Order Report</p>
            <div className="icons">
              <img src={ExcelIcon} />
              <img src={PdfIcon} />
            </div>
            <div className="single-col align-items justify-content-SB">
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
            </div>
          </div>
          <div
            className="report-card"
            onClick={() => history.push("/admin/new-order")}
          >
            <p>Order Report</p>
            <div className="icons">
              <img src={ExcelIcon} />
              <img src={PdfIcon} />
            </div>
            <div className="single-col align-items justify-content-SB">
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
              <div className="orders">
                <p className="amount">258</p>
                <p className="number">No.of Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
