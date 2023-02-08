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
} from "assets/svg/Admin/InventoryMangement";
import CustomPagination from "component/Admin/common/CustomPagination";

const AdminDiamond = React.lazy(() => import("assets/images/AdminDiamond"));

const totalInstallersData = [
  {
    No: "1",
    Title: "Diamond Wallpaper",
    Date: "Oct 18th, 2022",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Amount: "₹3500",
    Category: "Customized Wallpaper",
  },
  {
    No: "2",
    Title: "Diamond Wallpaper",
    Date: "Oct 18th, 2022",
    Customer_Name: "Derik",
    Location: "Anna Nagar, Chennai",
    Amount: "₹3500",
    Category: "Wallpaper",
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
          <label className="table-head-cell-label">Title</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Date</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Customer Name</label>
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
          <label className="table-head-cell-label">Category</label>
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
  bodyData: { No, Title, Date, Customer_Name, Location, Amount, Category },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left" className="d-flex align-items-center py-4">
        <Avatar
          style={{ width: "40px", height: "40px", radius: "3px" }}
          alt="Remy Sharp"
          src={<AdminDiamond />}
        />
        <label className="ps-2 table-body-cell-label">{Title}</label>
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
        <label className="table-body-cell-label">{Category}</label>
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
        </CustomListMenu>
      </TableCell>
    </TableRow>
  );
};

export default function ProductManagement() {
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
      <CustomNavBar label="Product Management" />
      <CustomTable>
        <TableDataHeader />
        <TableBody>
          {totalInstallersData?.map((bodyData) => (
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
