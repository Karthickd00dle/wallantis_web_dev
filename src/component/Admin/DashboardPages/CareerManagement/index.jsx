import React, { useCallback, useEffect, useState } from "react";
import CustomTable from "component/Admin/common/CustomTable";
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
import { history } from "service/helpers";
import "./style.scss";
import {
  AscendingDescendingArrow,
  DeleteIcon,
  EyeIcon,
  PencilIcon,
} from "assets/svg/Admin/InventoryMangement";
import CustomPagination from "component/Admin/common/CustomPagination";
import { CustomButton } from "component/Admin/common/CustomButton";
import { DownloadIcon } from "assets/svg/Admin/Common";
import { getAllCareer } from "action/CareerAct"; 
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Toast } from "service/toast";


const TableDataHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <label className="table-head-cell-label">No</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Position</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Date</label>
          <IconButton>
            <AscendingDescendingArrow />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Posted By</label>
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
  bodyData: { _id: id, nameOfTheJob, dateOfPostingJob, postedBy, location, status },
  index
}) => {
  const date = dateOfPostingJob.split('T')
  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{index + 1}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{nameOfTheJob}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{date[0]}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{postedBy}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{location}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label d-flex align-items-center">
          {status === 1 ? (
            <div className="status-indicator active me-2"/>
          ) : (
            <div className="status-indicator inactive me-2"/>
          )}
          {status === 1 ? "Active" : "In Active"}
        </label>
      </TableCell>
      <TableCell align="left">
        <CustomListMenu>
          <MenuItem
            className="d-flex align-items-center"
            onClick={() => history.push(`/admin/careerDetailPage?id=${id}`)}
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

 const CareerManagementFC =({getAllCareerApiCall})=> {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [careerData, setCareerData] = useState();
  const [pageMeta, setPageMeta] = useState({});


  const getAllCareerApi = useCallback(
    (searchData) => {
      let queryParams = {
        // page: 1,
        // pageCount: 1,
        // nextPage: null,
        // pageSize: 10,
        // total: 1,
        // wallPaperType: wallPaperType,
        // search: searchData,
      };

      getAllCareerApiCall({ ...queryParams })
        .then(({ response: { data, pageMeta } }) => {
          setCareerData(data);
          setPageMeta(pageMeta);
        })
        .catch(() => {
          Toast({
            type: "error",
            message: "Something went wrong !",
          });
        });
    },

    [getAllCareerApiCall]
  );

  useEffect(() => {
    getAllCareerApi();
  }, [getAllCareerApi]);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div>
      <CustomNavBar label="Career Management" />
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
          Add New Job
        </CustomButton>
      </div>
      <div className="px-5 pt-5">
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {careerData?.map((bodyData, index) => (
              <TableDataBody key={index} bodyData={bodyData} index={index} />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllCareerApiCall: getAllCareer,
      // createCatalogueApiCall: createCatalogueApi,
    },
    dispatch
  );
};

const CareerManagement = connect(
  null,
  mapDispatchToProps
)(CareerManagementFC);
export default CareerManagement;
