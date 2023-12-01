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
import { CustomButton } from "component/Admin/common/CustomButton";
import { DownloadIcon } from "assets/svg/Admin/Common";

const couponListData = [
  {
    No: "1",
    Offer_Name: "SUPER SAVER",
    Coupon_Code: "RGT1209",
    Start_Date: "Oct 18th, 2022",
    End_Date: "Oct 31st, 2022",
    Occasion: "Diwali",
    Status: "Active",
  },
  {
    No: "2",
    Offer_Name: "SUPER SAVER",
    Coupon_Code: "RGT1209",
    Start_Date: "Oct 18th, 2022",
    End_Date: "Oct 31st, 2022",
    Occasion: "Diwali",
    Status: "Active",
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
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Start Date</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">End Date</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
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
  bodyData: {
    No,
    Offer_Name,
    Coupon_Code,
    Start_Date,
    End_Date,
    Occasion,
    Status,
  },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Offer_Name}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Coupon_Code}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Start_Date}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{End_Date}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Occasion}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label d-flex align-items-center">
          {Status === "Active" ? (
            <div className="status-indicator active me-2" />
          ) : (
            <div className="status-indicator inactive me-2" />
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
      <div className="px-5 pt-5 pb-2 d-flex justify-content-end">
        <CustomButton
          startIcon={<DownloadIcon />}
          className="download-csv-button px-3 py-3"
          variant="outlined"
        >
          Download CSV
        </CustomButton>
        <CustomButton
          className="add-new-installer-button ms-3 px-3"
          variant="contained"
        >
          Add New Coupon
        </CustomButton>
      </div>

      <div className="px-5 pt-5">
        <label className="table-title pb-2">Coupon List</label>
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {couponListData?.map((bodyData) => (
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
}
