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
import CommonButton from "component/Admin/common/CommonButton";
import downloadIcon from "assets/icons/Admin/downloadIcon.png";
import {
  AscendingDescendingArrow,
  DeleteIcon,
  EyeIcon,
  PencilIcon,
} from "assets/svg/Admin/InventoryMangement";
import { history } from "service/helpers";
import CustomPagination from "component/Admin/common/CustomPagination";

const totalInstallersData = [
  {
    No: "1",
    Id: "JHD123",
    Date: "Oct 18th, 2022",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Amount: "₹3500",
    Order_status: "New Order",
  },
  {
    No: "2",
    Id: "JHD123",
    Date: "Oct 18th, 2022",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Amount: "₹3500",
    Order_status: "New Order",
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
          <label className="table-head-cell-label">Order status </label>
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
  bodyData: { No, Id, Date, Customer_Name, Location, Amount, Order_status },
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
      <TableCell align="left" className="table-order-neworder">
        <ul>
          <li className="table-body-cell-label">{Order_status}</li>
        </ul>
      </TableCell>
      <TableCell align="left">
        <CustomListMenu>
          <MenuItem
            className="d-flex align-items-center"
            onClick={() => history.push("/admin/orderDetailPage")}
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
    <div className="order-management">
      <CustomNavBar label="Order Management" />
      <div className="download-csv">
        <CommonButton title="Download CSV" icon={downloadIcon} />
      </div>
      <div className="custom-table">
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
