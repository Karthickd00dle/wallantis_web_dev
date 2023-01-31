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
import CustomTabs, { TabPanel } from "component/Admin/common/CustomTabs";

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
  },
];

const inventoryLabel = ["Total Installers", "Available Installers"];

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
      <TableCell align="left">
        <label className="table-body-cell-label">{Completed_Orders}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Ongoing_Orders}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{`₹${Installer_Cost}`}</label>
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
  const [tabvalue, setTabValue] = React.useState(0);
  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  const handleTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <CustomNavBar label="Inventory Management" />
      <CustomTabs
        tabLabel={inventoryLabel}
        value={tabvalue}
        onChange={handleTabs}
      >
        <TabPanel value={tabvalue} index={0}>
          <CustomTable>
            <TableDataHeader />
            <TableBody>
              {totalInstallersData?.map((bodyData) => (
                <TableDataBody bodyData={bodyData} />
              ))}
            </TableBody>
          </CustomTable>
        </TabPanel>
        <TabPanel value={tabvalue} index={1}>
          <CustomTable>
            <TableDataHeader />
            <TableBody>
              {totalInstallersData?.map((bodyData) => (
                <TableDataBody bodyData={bodyData} />
              ))}
            </TableBody>
          </CustomTable>
        </TabPanel>
      </CustomTabs>
      <CustomPagination
        pageCount={10}
        currentPage={currentPage}
        onChange={handlePage}
      />
    </div>
  );
}
