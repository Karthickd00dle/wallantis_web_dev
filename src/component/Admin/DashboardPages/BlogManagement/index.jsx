import React from "react";
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
import BlogImage from "assets/images/Admin/BlogManagement/blog.png";
import "./style.scss";

const blogManagementData = [
  {
    No: "1",
    Blog_Image: BlogImage,
    Title: "How to choose wallpapers for renovating homes...",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. ",
    Posted_By: "John Doe",
    Date: "Oct 18th, 2022",
  },
  {
    No: "2",
    Blog_Image: BlogImage,
    Title: "How to choose wallpapers for renovating homes...",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. ",
    Posted_By: "John Doe",
    Date: "Oct 18th, 2022",
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
          <label className="table-head-cell-label">Posted By</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Date</label>
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
  bodyData: { No, Blog_Image, Title, Description, Posted_By, Date },
}) => {
  return (
    <TableRow key={No}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{No}</label>
      </TableCell>
      <TableCell align="left">
        <div className="d-flex align-items-center">
          <img src={Blog_Image} height="60px" width="55px" alt="blog_image" />
          <div className="ps-2 d-flex flex-column">
            <label className="table-body-cell-label">{Title}</label>
            <label
              style={{ width: "540px" }}
              className="table-body-cell-description"
            >
              {Description}
            </label>
          </div>
        </div>
      </TableCell>
      <TableCell align="left">
        <label style={{ width: "250px" }} className="table-body-cell-label ">
          {Posted_By}
        </label>
      </TableCell>
      <TableCell align="left">
        <label style={{ width: "200px" }} className="table-body-cell-label">
          {Date}
        </label>
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

export default function BlogManagement() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <CustomNavBar label="Blog Management" />
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
          Add New Blog
        </CustomButton>
      </div>
      <div className="px-5 pt-5">
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {blogManagementData?.map((bodyData) => (
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
