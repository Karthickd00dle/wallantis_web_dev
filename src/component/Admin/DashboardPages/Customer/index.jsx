import React, { useEffect, useState } from "react";
import CustomTable from "component/Admin/common/CustomTable";
import {
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
  DeleteIcon,
  EyeIcon,
  PencilIcon,
  StrikedEyeIcon,
} from "assets/svg/Admin/InventoryMangement";
import { DownloadIcon } from "assets/svg/Admin/Common";
import CustomPagination from "component/Admin/common/CustomPagination";
import { CustomButton } from "../../common/CustomButton";
import { connect } from "react-redux";
import { history } from "service/helpers";
import { getCustomerListing } from "action/CustomerAct";
import { bindActionCreators } from "redux";
import { customMomentFormat } from "service/helperFunctions";

const TableDataHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <label className="table-head-cell-label">No</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Customer ID</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Customer Name</label>
        </TableCell>

        <TableCell align="left">
          <label className="table-head-cell-label">Location</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Date</label>
        </TableCell>

        <TableCell align="left">
          <label className="table-head-cell-label">Total Spent</label>
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
    _id,
    customer_id,
    firstName,
    lastName,
    location,
    createdAt,
    total_spent,
  },
}) => {
  return (
    <TableRow key={_id}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{_id}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{customer_id}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">
          {firstName + " " + lastName}
        </label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{location}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">
          {customMomentFormat(createdAt, "MMM Do, YYYY")}
        </label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{`₹${total_spent}`}</label>
      </TableCell>
      <TableCell align="left">
        <CustomListMenu>
          <MenuItem className="d-flex align-items-center">
            <EyeIcon />
            <label
              className="table-cell-menu-item ps-2"
              onClick={() => history.push("/admin/customerDetailPage")}
            >
              View Details
            </label>
          </MenuItem>
        </CustomListMenu>
      </TableCell>
    </TableRow>
  );
};
const CustomerManagementFC = ({ getCustomerListingApiCall }) => {
  const [userList, setUserList] = useState([]);
  const [pageMeta, setPageMeta] = useState({});
  const [pageNo, setPageNo] = useState();
  const handlePagination = (e, value) => {
    setPageNo((prevState) => ({ ...prevState, page: value }));
  };

  const getCustomerListingApi = () => {
    getCustomerListingApiCall().then(({ response }) => {
      setUserList(response.data);
      setPageMeta(response.pageMeta);
    });
  };

  useEffect(() => {
    getCustomerListingApi();
  }, []);

  return (
    <div>
      <CustomNavBar label="Customer" />
      <div className="px-5 pt-5 pb-2 d-flex justify-content-end">
        <CustomButton
          startIcon={<DownloadIcon />}
          className="download-csv-button px-3 py-3"
          variant="outlined"
        >
          Download CSV
        </CustomButton>
      </div>
      <div className="px-5 pt-5">
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {userList?.map((bodyData) => (
              <TableDataBody key={bodyData._id} bodyData={bodyData} />
            ))}
          </TableBody>
        </CustomTable>
      </div>
      <CustomPagination
        pageCount={pageMeta.pageCount}
        currentPage={pageNo}
        onChange={handlePagination}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCustomerListingApiCall: getCustomerListing,
    },
    dispatch
  );
};

const CustomerManagement = connect(
  null,
  mapDispatchToProps
)(CustomerManagementFC);
export default CustomerManagement;
