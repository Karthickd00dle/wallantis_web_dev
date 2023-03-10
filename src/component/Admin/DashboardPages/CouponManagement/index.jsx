import React from "react";
import CustomTable from "component/Admin/common/CustomTable";
import {
  IconButton,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomListMenu from "component/Admin/common/CustomListMenu";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import CommonButton from "component/Admin/common/CommonButton";
import { history } from "service/helpers";
import downloadIcon from "assets/icons/Admin/downloadIcon.png";
import "./style.scss";
import {
  AscendingDescendingArrow,
  DeleteIcon,
  EyeIcon,
  PencilIcon,
} from "assets/svg/Admin/InventoryMangement";
import CustomPagination from "component/Admin/common/CustomPagination";

const totalInstallersData = [
  {
    No: "1",
    Title: "SUPER SAVER",
    Date: "Oct 18th, 2022",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Amount: "₹3500",
    Status: "Active",
  },
  {
    No: "2",
    Title: "SUPER SAVER",
    Date: "Oct 18th, 2022",
    Customer_Name: "Derik",
    Location: "Anna Nagar, Chennai",
    Amount: "₹3500",
    Status: "Inactive",
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
          <label className="table-head-cell-label">Offer Name</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Coupon Code</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Start Date</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">End Date</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Occasion</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Status</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Action</label>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const TableDataBody = ({
  bodyData: { No, Title, Date, Customer_Name, Location, Amount, Status },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Title}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Date}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Customer_Name}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Location}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Amount}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">
          {Status === "Active" ? (
            <div className="dot green"></div>
          ) : (
            <div className="dot red"></div>
          )}
          {Status}
        </label>
      </TableCell>
      <TableCell align="left">
        <CustomListMenu>
          <MenuItem
            className="d-flex align-items-center"
            onClick={() => history.push("/admin/productDetailPage")}
          >
            <EyeIcon />
            <label className="table-cell-menu-item ps-2">View Details</label>
          </MenuItem>
          <MenuItem className="d-flex align-items-center">
            <PencilIcon />
            <label className="table-cell-menu-item ps-2">Edit</label>
          </MenuItem>
          <MenuItem className="d-flex align-items-center">
            <DeleteIcon />
            <label className="table-cell-menu-item ps-2">Delete</label>
          </MenuItem>
        </CustomListMenu>
      </TableCell>
    </TableRow>
  );
};

export default function CouponManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="coupon-management">
      <CustomNavBar label="Coupon Management" />
      <div className="button-group">
        <CommonButton title="Download CSV" icon={downloadIcon} />

        <button
          className="purple-filled"
          onClick={() => history.push("/admin/add-coupon")}
        >
          Add New Coupon{" "}
        </button>
      </div>

      <div className="custom-table">
        <div className="sub-heading">
          <h4>Coupon List</h4>
        </div>
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {totalInstallersData?.map((bodyData) => (
              <TableDataBody bodyData={bodyData} />
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
}
