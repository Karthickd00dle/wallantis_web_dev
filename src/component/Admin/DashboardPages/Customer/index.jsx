import React, { useState } from "react";
import CustomTable from "component/Admin/common/CustomTable";
import {
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomListMenu from "component/Admin/common/CustomListMenu";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import "./style.scss";
import {
  DeleteIcon,
  EyeIcon,
  PencilIcon,
  StrikedEyeIcon,
} from "assets/svg/Admin/InventoryMangement";
import DownloadIcon from "assets/images/DownloadIcon";
import CustomPagination from "component/Admin/common/CustomPagination";
import { CustomButton } from "../../common/CustomButton";
import { connect } from "react-redux";

const customersData = [
  {
    no: 1,
    customer_id: "#98765",
    customer_name: "John Doe",
    location: "Anna Nagar, Chennai",
    date: "Oct 18th, 2022",
    total_spent: 7000,
  },
  {
    no: 2,
    customer_id: "#98765",
    customer_name: "John Doe",
    location: "Anna Nagar, Chennai",
    date: "Oct 18th, 2022",
    total_spent: 7000,
  },
];

const TableDataHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <label className="table-head-cell-label">No</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Customer ID</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Customer Name</label>
        </TableCell>

        <TableCell align="left">
          <label className="table-head-cell-label">Location</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Date</label>
        </TableCell>

        <TableCell align="left">
          <label className="table-head-cell-label">Total Spent</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Action</label>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const TableDataBody = ({
  bodyData: { no, customer_id, customer_name, location, date, total_spent },
}) => {
  return (
    <TableRow key={no}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{no}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{customer_id}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{customer_name}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{location}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{date}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{`₹${total_spent}`}</label>
      </TableCell>
      <TableCell align="left">
        <CustomListMenu>
          <MenuItem className="d-flex align-items-center">
            <EyeIcon />
            <label className="table-cell-menu-item ps-2">View Details</label>
          </MenuItem>
        </CustomListMenu>
      </TableCell>
    </TableRow>
  );
};
const CustomerManagementFC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <CustomNavBar label="Customer" />
      <div className="px-5 pt-5 pb-2 d-flex justify-content-end">
        <CustomButton
          startIcon={<DownloadIcon />}
          className="download-csv-button px-3 py-3"
          variant="outlined"
        >
          Download CSV
        </CustomButton>
      </div>
      <div className="px-5 pt-5">
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {customersData?.map((bodyData) => (
              <TableDataBody key={bodyData.No} bodyData={bodyData} />
            ))}
          </TableBody>
        </CustomTable>
      </div>
      <CustomPagination
        pageCount={10}
        currentPage={currentPage}
        onChange={handlePage}
      />
    </div>
  );
};

const CustomerManagement = connect(null, null)(CustomerManagementFC);
export default CustomerManagement;
