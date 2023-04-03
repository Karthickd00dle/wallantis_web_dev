import React from "react";
import CustomTable from "component/Admin/common/CustomTable";
import {
  Avatar,
  IconButton,
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
  AscendingDescendingArrow,
  DeleteIcon,
  EyeIcon,
  PencilIcon,
  StrikedEyeIcon,
} from "assets/svg/Admin/InventoryMangement";
import CustomPagination from "component/Admin/common/CustomPagination";
import { CustomButton } from "component/Admin/common/CustomButton";
import { DownloadIcon } from "assets/svg/Admin/Common";
import { ternaryCondition } from "service/helperFunctions";

const totalInstallersData = [
  {
    No: "1",
    Id: "JHD123",
    Installer_Name: "John Doe",
    Mobile_Number: "0987654321",
    Location: "Anna Nagar, Chennai",
    Completed_Orders: 10,
    Ongoing_Orders: 8,
    Installer_Cost: 500,
    Status: false,
  },
  {
    No: "2",
    Id: "JHD123",
    Installer_Name: "John Doe",
    Mobile_Number: "0987654321",
    Location: "Anna Nagar, Chennai",
    Completed_Orders: 10,
    Ongoing_Orders: 8,
    Installer_Cost: 500,
    Status: true,
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
          <label className="table-head-cell-label">ID</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Installer Name</label>
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
          <label className="table-head-cell-label">Location</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Completed Orders</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Ongoing Orders</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Installer Cost</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Status</label>
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
    Id,
    Installer_Name,
    Mobile_Number,
    Location,
    Completed_Orders,
    Ongoing_Orders,
    Installer_Cost,
    Status,
  },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Id}</label>
      </TableCell>
      <TableCell align="left" className="d-flex align-items-center py-4">
        <Avatar
          style={{ width: "30px", height: "30px" }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
        <label className="ps-2 table-body-cell-label">{Installer_Name}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Mobile_Number}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Location}</label>
      </TableCell>
      <TableCell align="center">
        <label className="table-body-cell-label">{Completed_Orders}</label>
      </TableCell>
      <TableCell align="center">
        <label className="table-body-cell-label">{Ongoing_Orders}</label>
      </TableCell>
      <TableCell align="center">
        <label className="table-body-cell-label">{`₹${Installer_Cost}`}</label>
      </TableCell>
      <TableCell align="left">
        <div className="d-flex align-items-center">
          <div
            className={`status-indicator ${ternaryCondition(
              Status,
              "active",
              "inactive"
            )}`}
          />
          <label className="ps-2 table-body-cell-label">{`${ternaryCondition(
            Status,
            "Active",
            "Inactive"
          )}`}</label>
        </div>
      </TableCell>
      <TableCell align="left">
        <CustomListMenu>
          <MenuItem className="d-flex align-items-center">
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

export default function InventoryManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <CustomNavBar label="Inventory Management" />
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
          Add New Installer
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
