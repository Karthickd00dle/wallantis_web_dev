import React from "react";
import CustomTable from "component/Admin/common/CustomTable";
import "./style.scss";
import {
  Avatar,
  IconButton,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomNavBar from "component/Admin/common/CustomNavBar";
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
import CustomListMenu from "component/Admin/common/CustomListMenu";
import { ternaryCondition } from "service/helperFunctions";
import CustomTabs, { TabPanel } from "component/Admin/common/CustomTabs";

const leadManagementUserData = [
  {
    No: "1",
    Name: "John Doe",
    Message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Mobile_Number: "0987654321",
    Email_Address: "johndoe@gmail.com",
    Status: "New Lead",
  },
  {
    No: "2",
    Name: "Derik",
    Message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Mobile_Number: "0987654321",
    Email_Address: "johndoe@gmail.com",
    Status: "Not contacted",
  },
];

const leadManagementCompanyData = [
  {
    No: "1",
    Name: "Manglam Prints",
    Message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Mobile_Number: "0987654321",
    Email_Address: "johndoe@gmail.com",
    Status: "New Lead",
  },
  {
    No: "2",
    Name: "Manglam Prints",
    Message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Mobile_Number: "0987654321",
    Email_Address: "johndoe@gmail.com",
    Status: "Not contacted",
  },
];
const tabLabel = ["User", "Merchant/Companies"];

const TableDataHeaderOne = () => {
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

const TableDataHeaderTwo = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <label className="table-head-cell-label">No</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Company Name</label>
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
  bodyData: { No, Name, Message, Mobile_Number, Email_Address, Status },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Name}</label>
      </TableCell>
      <TableCell align="left" className="d-flex align-items-center py-4">
        <label className="ps-2 table-body-cell-label">{Message}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Mobile_Number}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Email_Address}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{Status}</label>
      </TableCell>
    </TableRow>
  );
};

export default function LeadManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [tabValue, setTabValue] = React.useState(0);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  const handleTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <CustomNavBar label="Lead Management" />
      <div className="px-5 pt-5 pb-2 d-flex justify-content-end">
        <CustomButton
          startIcon={<DownloadIcon />}
          className="download-csv-button px-3 py-3"
          variant="outlined"
        >
          Download CSV
        </CustomButton>
      </div>

      <CustomTabs tabLabel={tabLabel} value={tabValue} onChange={handleTabs}>
        <TabPanel value={tabValue} index={0}>
          <CustomTable>
            <TableDataHeaderOne />
            <TableBody>
              {leadManagementUserData?.map((bodyData) => (
                <TableDataBody key={bodyData.No} bodyData={bodyData} />
              ))}
            </TableBody>
          </CustomTable>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <CustomTable>
            <TableDataHeaderTwo />
            <TableBody>
              {leadManagementCompanyData?.map((bodyData) => (
                <TableDataBody key={bodyData.No} bodyData={bodyData} />
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
