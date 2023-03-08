import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
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
import CommonButton from "component/Admin/common/CommonButton";
import { history } from "service/helpers";
import downloadIcon from "assets/icons/Admin/downloadIcon.png";
import "./style.scss";
import {
  AscendingDescendingArrow,
  DeleteIcon,
  EyeIcon,
  PencilIcon,
} from "assets/svg/Admin/InventoryMangement";
import CustomPagination from "component/Admin/common/CustomPagination";
import { bindActionCreators } from "redux";
import { createCatalogueApi, getAllCatalogue } from "action/CatalogueAct";
import { connect } from "react-redux";
import { Toast } from "service/toast";
import { customMomentFormat, ternaryCondition } from "service/helperFunctions";
import { CommonInput } from "component/Admin/common/CommonInput";
import CommonSelect from "component/Admin/common/CommonSelect";

const options = [
  { name: "Normal Wallpaper", value: 1 },
  { name: "Sticker Wallpaper", value: 2 },
  { name: "Customized Wallpaper", value: 3 },
];

const AddNewCatalogue = ({
  setShowAddCatalogue,
  createCatalogueApiCall,
  getAllCatalogueApi,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    wallPaperType: 1,
    image: "",
  });
  const { title, wallPaperType, image } = inputData;

  const addCatalogue = () => {
    let body = {
      ...inputData,
    };

    createCatalogueApiCall(body).then(() => {
      getAllCatalogueApi();
    });
  };

  return (
    <div className="add-catalogue">
      <div className="header-background">
        <p>Catalogue Management</p>
      </div>

      <div className="add-catalogue-main">
        <div className="add-catalogue-inner">
          <label className="add-catalogue-label mb-4">Add New Catalogue</label>
          <div className="add-catalogue-inner-container">
            <div className="mb-4">
              <label>Title</label>
              <CommonInput
                value={title}
                onChange={({ target: { value } }) =>
                  setInputData({ ...inputData, title: value })
                }
              />
            </div>
            <div className="mb-4">
              <label>Wallpaper Type</label>
              <CommonSelect
                value={wallPaperType}
                onChange={({ target: { value } }) =>
                  setInputData({ ...inputData, wallPaperType: Number(value) })
                }
                className="catalogue-type"
                options={options}
              />
            </div>
            <label className="add-catalogue-description mb-2">
              Description
            </label>
            <ReactQuill
              theme="snow"
              onChange={(input) =>
                setInputData({ ...inputData, description: input })
              }
            />
            <div className="image-upload mt-4">
              <label className="my-2">Image Upload</label>

              <div className="image-upload-box">
                <p>Drag an image here</p>
                <p>Or</p>
                <label className="purple-filled" for="upload">
                  Choose File
                </label>
                <input
                  accept="image/*"
                  type="file"
                  value={image}
                  id="upload"
                  hidden
                  onChange={({ target: { value } }) =>
                    setInputData({ ...inputData, image: value })
                  }
                />
              </div>
            </div>
            <div className="mt-5 action-btns">
              <button
                className="white-filled"
                onClick={() => setShowAddCatalogue(false)}
              >
                Cancel
              </button>
              <button className="purple-filled" onClick={addCatalogue}>
                Save & Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Action </label>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const TableDataBody = ({
  bodyData: { _id: id, title, image, description, postedBy, createdAt },
  index,
}) => {
  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        <label className="table-body-cell-label">{index + 1}</label>
      </TableCell>
      <TableCell align="left">
        <div className="d-flex align-items-center">
          <img height="46px" width="54" src={image} alt={title} />
          <div className="ps-2">
            <label className="table-body-cell-label">{title}</label>
            <p>{description}</p>
          </div>
        </div>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{postedBy}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">
          {customMomentFormat(createdAt, "MMM Do, YYYY")}
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

const CatalogueManagementFC = ({
  getAllCatalogueApiCall,
  createCatalogueApiCall,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [catalogueData, setCatalogueData] = useState();
  const [pageMeta, setPageMeta] = useState({});
  const [showAddCatalogue, setShowAddCatalogue] = useState(false);
  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  const getAllCatalogueApi = useCallback(
    (searchData) => {
      let queryParams = {
        page: 1,
        pageCount: 1,
        nextPage: null,
        pageSize: 10,
        total: 1,
        wallPaperType: 1,
        search: searchData,
      };

      getAllCatalogueApiCall({ ...queryParams })
        .then(({ response: { data, pageMeta } }) => {
          setCatalogueData(data);
          setPageMeta(pageMeta);
        })
        .catch(() => {
          Toast({
            type: "error",
            message: "Something went wrong !",
          });
        });
    },

    [getAllCatalogueApiCall]
  );

  useEffect(() => {
    getAllCatalogueApi();
  }, [getAllCatalogueApi]);

  return (
    <>
      {ternaryCondition(
        showAddCatalogue,
        <AddNewCatalogue
          setShowAddCatalogue={setShowAddCatalogue}
          createCatalogueApiCall={createCatalogueApiCall}
          getAllCatalogueApi={getAllCatalogueApi}
        />,
        <div className="product-management">
          <CustomNavBar label="Catalogue Management " />
          <div className="button-group">
            <CommonButton title="Download CSV" icon={downloadIcon} />

            <button
              className="purple-filled"
              onClick={() => setShowAddCatalogue(true)}
            >
              Add New Catalogue
            </button>
          </div>
          <div className="custom-table">
            <CustomTable>
              <TableDataHeader />
              <TableBody>
                {catalogueData?.map((bodyData, index) => (
                  <TableDataBody bodyData={bodyData} index={index} />
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
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllCatalogueApiCall: getAllCatalogue,
      createCatalogueApiCall: createCatalogueApi,
    },
    dispatch
  );
};

const CatalogueManagement = connect(
  null,
  mapDispatchToProps
)(CatalogueManagementFC);
export default CatalogueManagement;
