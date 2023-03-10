import React from "react";
import CustomTable from "component/Admin/common/CustomTable";
import "./style.scss";
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
          <label className="table-head-cell-label">Name</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Message</label>
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
          <label className="table-head-cell-label">Status</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
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

export default function LeadManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="lead-management">
      <CustomNavBar label="Lead Management" />
      <div className="download-csv">
        <CommonButton title="Download CSV" icon={downloadIcon} />
      </div>
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
