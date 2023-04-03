import React from "react";
import CustomTable from "component/Admin/common/CustomTable";
import "./style.scss";
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
import {
  AscendingDescendingArrow,
  DeleteIcon,
  EyeIcon,
  PencilIcon,
} from "assets/svg/Admin/InventoryMangement";
import { history } from "service/helpers";
import CustomPagination from "component/Admin/common/CustomPagination";
import { CustomButton } from "component/common";
import DownloadIcon from "assets/images/DownloadIcon";

const totalInstallersData = [
  {
    no: 1,
    id: "#12345",
    date: "Oct 18th, 2022",
    customer_name: "John Doe",
    location: "Anna Nagar, Chennai",
    amount: 3500,
    order_status: 1,
  },
  {
    no: 2,
    id: "#12345",
    date: "Oct 18th, 2022",
    customer_name: "John Doe",
    location: "Anna Nagar, Chennai",
    amount: 3500,
    order_status: 2,
  },
  {
    no: 3,
    id: "#12345",
    date: "Oct 18th, 2022",
    customer_name: "John Doe",
    location: "Anna Nagar, Chennai",
    amount: 3500,
    order_status: 3,
  },
];

const getOrderStatus = (status) => {
  switch (status) {
    case 1:
      return { color: "pending", value: "New Order" };
    case 2:
      return { color: "ongoing", value: "On the way" };
    case 3:
      return { color: "completed", value: "Delivered" };
    default:
      return null;
  }
};

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
          <label className="table-head-cell-label">Order status</label>
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
  bodyData: { no, id, date, customer_name, location, amount, order_status },
}) => {
  return (
    <TableRow key={no}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{no}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{id}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{date}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{customer_name}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{location}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{`₹${amount}`}</label>
      </TableCell>
      <TableCell align="left">
        <div
          className={`status-container ${getOrderStatus(order_status).color}`}
        >
          <div
            className={`status-indicator ${getOrderStatus(order_status).color}`}
          />
          <label
            className={`ps-2 order-status-label ${
              getOrderStatus(order_status).color
            }`}
          >
            {getOrderStatus(order_status).value}
          </label>
        </div>
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

export default function OrderManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="product-management">
      <CustomNavBar label="Order Management" />
      <div className="px-5 pt-5 pb-2 d-flex justify-content-end">
        <CustomButton
          startIcon={<DownloadIcon />}
          className="download-csv-button px-3 py-3"
          variant="outlined"
        >
          Download CSV
        </CustomButton>
      </div>
      <div className="custom-table">
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
