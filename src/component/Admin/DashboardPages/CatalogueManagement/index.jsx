import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import CustomTable from "component/Admin/common/CustomTable";
import {
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
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
import { bindActionCreators } from "redux";
import { createCatalogueApi, getAllCatalogue } from "action/CatalogueAct";
import { connect } from "react-redux";
import { Toast } from "service/toast";
import { customMomentFormat, ternaryCondition } from "service/helperFunctions";
import { CommonInput } from "component/Admin/common/CommonInput";
import CommonSelect from "component/Admin/common/CommonSelect";
import CommonRadio from "component/Admin/common/CommonRadio";
import { CustomButton } from "component/Admin/common/CustomButton";
import { DownloadIcon } from "assets/svg/Admin/Common";

const options = [
  { name: "Customized Wallpaper", value: 1 },
  { name: "Sticker Wallpaper", value: 2 },
  { name: "Normal Wallpaper", value: 3 },
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
  console.log(inputData, "input data");
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
              <label className="mb-1">Wallpaper Type</label>
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
                  files={image}
                  id="upload"
                  hidden
                  onChange={({ target: { files } }) =>
                    setInputData({
                      ...inputData,
                      image: URL.createObjectURL(files[0]),
                    })
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
            <div dangerouslySetInnerHTML={{ __html: description }} />
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
  const [wallPaperType, setWallPaperType] = useState(1);

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
        wallPaperType: wallPaperType,
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

    [getAllCatalogueApiCall, wallPaperType]
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
        <div className="catalogue-management">
          <CustomNavBar label="Catalogue Management " />
          <div className="button-group">
            <div className="px-5 pt-5 pb-2 d-flex justify-content-between">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                className=""
                name="controlled-radio-buttons-group"
                value={wallPaperType}
                onChange={({ target: { value } }) => setWallPaperType(value)}
              >
                <div className="d-flex">
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Customized Wallpaper"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Sticker Wallpaper"
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    label="Normal Wallpaper"
                  />
                </div>
              </RadioGroup>
              <div className="d-flex">
                <CustomButton
                  startIcon={<DownloadIcon />}
                  className="download-csv-button px-3 py-3"
                  variant="outlined"
                >
                  Download CSV
                </CustomButton>
                <CustomButton
                  onClick={() => setShowAddCatalogue(true)}
                  className="add-new-installer-button ms-3 px-3"
                  variant="contained"
                >
                  Add New Catalogue
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="px-5 pt-5">
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
