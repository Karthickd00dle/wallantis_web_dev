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
import { history } from "service/helpers";
import "./style.scss";
import {
  AscendingDescendingArrow,
  DeleteIcon,
  EyeIcon,
  PencilIcon,
  StrikedEyeIcon,
} from "assets/svg/Admin/InventoryMangement";
import CustomPagination from "component/Admin/common/CustomPagination";
import { CustomButton } from "component/Admin/common/CustomButton";
import { DownloadIcon } from "assets/svg/Admin/Common";
import CustomTabs, { TabPanel } from "component/Admin/common/CustomTabs";

const totalInstallersData = [
  {
    No: "1",
    Customer_Name: "John Doe",
    Mobile_Number: "0987654321",
    Email_Address: "johndoe@gmail.com",
    Location: "Anna Nagar, Chennai",
    Privileges: "Customer, Product Management +2",
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
          <label className="table-head-cell-label">Customer Name</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Mobile Number</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Email Address</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Location </label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Privileges</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
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
    Customer_Name,
    Mobile_Number,
    Email_Address,
    Location,
    Privileges,
  },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Customer_Name}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Mobile_Number}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Email_Address}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Location}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Privileges}</label>
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
          <MenuItem className="d-flex align-items-center">
            <StrikedEyeIcon />
            <label className="table-cell-menu-item ps-2">
              Mark as Inactive
            </label>
          </MenuItem>
        </CustomListMenu>
      </TableCell>
    </TableRow>
  );
};

export default function StaffManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <CustomNavBar label="Staff Management" />
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
          Add New Staff
        </CustomButton>
      </div>
      <div className="px-5 pt-5">
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {totalInstallersData?.map((bodyData) => (
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
