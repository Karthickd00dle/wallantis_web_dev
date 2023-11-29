import React, { useEffect, useState } from "react";
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
import { CustomButton } from "component/common";
import { DownloadIcon } from "assets/svg/Admin/Common";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllProductsApi } from "action/ProductsAct";
import { customMomentFormat } from "service/helperFunctions";

const totalInstallersData = [
  {
    No: 1,
    Title: "Diamond Wallpaper",
    Date: "Oct 18th, 2022",
    Customer_Name: "John Doe",
    Location: "Anna Nagar, Chennai",
    Amount: "₹3500",
    Category: "Customized Wallpaper",
  },
  {
    No: 2,
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
          <label className="table-head-cell-label">Created By</label>
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
          <label className="table-head-cell-label">Sub Category</label>
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
  bodyData: {
    _id,
    title,
    images,
    createdAt,
    createdBy,
    price,
    categoryId,
    subCategoryId,
  },
}) => {
  return (
    <TableRow key={_id}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{_id}</label>
      </TableCell>
      <TableCell align="left">
        <div>
          <img src={images[0]} height="65px" width="65px" alt="prod_img" />
          <label className="ps-2 table-body-cell-label">{title}</label>
        </div>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">
          {customMomentFormat(createdAt, "MMM Do, YYYY")}
        </label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{createdBy}</label>
      </TableCell>

      <TableCell align="left">
        <label className="table-body-cell-label">₹{price}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{categoryId.category}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">
          {subCategoryId.subCategory}
        </label>
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
          <MenuItem
            className="d-flex align-items-center"
            onClick={() => history.push("/admin/edit-product")}
          >
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

function ProductManagementFC({ getAllProductsApiCall }) {
  const [productList, setProductList] = useState([]);
  const [pageMeta, setPageMeta] = useState({});
  const [pageNo, setPageNo] = useState();

  const handlePagination = (e, value) => {
    setPageNo((prevState) => ({ ...prevState, page: value }));
  };

  const getCustomerListingApi = () => {
    getAllProductsApiCall().then(({ response }) => {
      setProductList(response.data);
      setPageMeta(response.pageMeta);
    });
  };

  useEffect(() => {
    getCustomerListingApi();
  }, []);

  console.log(productList, "prod list");

  return (
    <div className="product-management">
      <CustomNavBar label="Product Management" />
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
          onClick={() => history.push("/admin/add-product")}
        >
          Add New Product
        </CustomButton>
      </div>
      <div className="custom-table">
        <CustomTable>
          <TableDataHeader />
          <TableBody>
            {productList?.map((bodyData) => (
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
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllProductsApiCall: getAllProductsApi,
    },
    dispatch
  );
};

const ProductManagement = connect(
  null,
  mapDispatchToProps
)(ProductManagementFC);
export default ProductManagement;
