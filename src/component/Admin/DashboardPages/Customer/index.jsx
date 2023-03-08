import React from "react";
import CustomTable from "component/Admin/common/CustomTable";
import {
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import DownloadIcon from "assets/images/DownloadIcon";
import CustomListMenu from "component/Admin/common/CustomListMenu";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import "./style.scss";
import { EyeIcon } from "assets/svg/Admin/InventoryMangement";
import CustomPagination from "component/Admin/common/CustomPagination";

const customersData = [
  {
    No: "1",
    Customer_ID: "#98765",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Date: "Oct 18th, 2022",
    Total_Spent: "₹7000",
  },
  {
    No: "2",
    Customer_ID: "#98765",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Date: "Oct 18th, 2022",
    Total_Spent: "₹7000",
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
  bodyData: { No, Customer_ID, Customer_Name, Location, Date, Total_Spent },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Customer_ID}</label>
      </TableCell>
      <TableCell align="left" className="d-flex align-items-center py-5">
        <label className="ps-2 table-body-cell-label">{Customer_Name}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Location}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Date}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Total_Spent}</label>
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

export default function CustomerManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <CustomNavBar label="Customer" />

      <div className="customer-dwnld-btn">
        <Button
          style={{ color: "#5D5FEF", borderColor: "#5D5FEF" }}
          variant="outlined"
          startIcon={<DownloadIcon />}
        >
          Doenload CSV
        </Button>
      </div>

      <CustomTable>
        <TableDataHeader />
        <TableBody>
          {customersData?.map((bodyData) => (
            <TableDataBody bodyData={bodyData} />
          ))}
        </TableBody>
      </CustomTable>

      <CustomPagination
        pageCount={10}
        currentPage={currentPage}
        onChange={handlePage}
      />
    </div>
  );
}
