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
    Date: "Oct 18th, 2022",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Amount: "₹3500",
    Ongoing_Orders: 8,
    Installer_Cost: 500,
  },
  {
    No: "2",
    Id: "JHD123",
    Date: "Oct 18th, 2022",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Amount:"₹3500",
    Ongoing_Orders: 8,
    Installer_Cost: 500,
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
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Date</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Customer Name</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Location</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Amount</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
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
    Date,
    Customer_Name,
    Location,
    Amount,
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
      <TableCell align="left" className="d-flex align-items-center py-5">
        <label className="ps-2 table-body-cell-label">{Date}</label>
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

export default function OrderManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [value, setValue] = React.useState(0);
  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <CustomNavBar label="Order Management" />
        <TabPanel value={value} index={0}>
          <CustomTable>
            <TableDataHeader />
            <TableBody>
              {totalInstallersData?.map((bodyData) => (
                <TableDataBody bodyData={bodyData} />
              ))}
            </TableBody>
          </CustomTable>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CustomTable>
            <TableDataHeader />
            <TableBody>
              {totalInstallersData?.map((bodyData) => (
                <TableDataBody bodyData={bodyData} />
              ))}
            </TableBody>
          </CustomTable>
        </TabPanel>
      <CustomPagination
        pageCount={10}
        currentPage={currentPage}
        onChange={handlePage}
      />
    </div>
  );
}
