import React from "react";
import CustomTable from "component/Admin/common/CustomTable";
import "./index.scss";
import {
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import CommonButton from "component/Admin/common/CommonButton";
import downloadIcon from "assets/icons/Admin/downloadIcon.png";
import { LeadColumnValues } from "component/Admin/Data/staticDatas";
import { AscendingDescendingArrow } from "assets/svg/Admin/InventoryMangement";
import { history } from "service/helpers";
import CustomPagination from "component/Admin/common/CustomPagination";

const TableDataHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <label className="table-head-cell-label">No</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Order ID</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Date</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Customer Name</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Location </label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Amount</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">No. of Orders</label>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const TableDataBody = ({
  bodyData: { No, CustomerName, Message, MobileNumber, EmailAddress, Status },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{CustomerName}</label>
      </TableCell>
      <TableCell align="left" className="d-flex align-items-center py-5">
        <label className="ps-2 table-body-cell-label">{Message}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{MobileNumber}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{EmailAddress}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Status}</label>
      </TableCell>
    </TableRow>
  );
};

export default function DeliveredOrders() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="newOrder-management">
      <div className="custom-table">
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {LeadColumnValues?.map((bodyData) => (
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
