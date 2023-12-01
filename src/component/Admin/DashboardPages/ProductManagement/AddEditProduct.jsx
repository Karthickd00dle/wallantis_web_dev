import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";
import { CKEditorInput, CommonInput } from "component/Admin/common/CommonInput";
import { CustomButton } from "component/Admin/common/CustomButton";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./style.scss";

import DragDropfiles from "component/Admin/common/DragDropfiles";
import { MuiChipsInput } from "mui-chips-input";
import { DeleteIcon } from "assets/svg/Admin/InventoryMangement";
import CustomChipInput from "component/Admin/common/CustomChipInput";
import CommonSelect, {
  CustomSelect,
} from "component/Admin/common/CommonSelect";
import { CustomDialog } from "component/Admin/common/CustomDialog";
import AddEditColor from "./AddEditColor";
import { getAllColorApi } from "action/ColorAct";

export const AddEditProductFC = ({ getAllColorApi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorData, setColorData] = useState([]);
  const [productData, setProductData] = useState({
    title: "",
    categoryId: "",
    subCategoryId: "",
    roomId: "",
    collectionId: "",
    price: null,
    description: "",
    features: "",
    date: "",
    status: 0,
    colors: [
      {
        colorId: "",
        quantity: null,
        images: [],
      },
    ],
  });

  const handleAddMore = () => {
    setProductData((prevData) => ({
      ...prevData,
      colors: [
        ...prevData.colors,
        {
          colorId: "",
          quantity: null,
          images: [],
        },
      ],
    }));
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name && name.startsWith && name.startsWith("colorId")) {
      // Handle changes for colorId in the colors array
      setProductData((prevData) => ({
        ...prevData,
        colors: prevData.colors.map((color, i) =>
          i === index ? { ...color, colorId: value } : color
        ),
      }));
    } else {
      // Handle changes for other inputs
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const getAllColorAPI = () => {
    getAllColorApi().then(({ response }) => setColorData(response.data));
  };

  const colorOptions = colorData.map((color) => ({
    value: color._id,
    Component: (
      <div className="d-flex align-items-center">
        <div
          style={{
            backgroundColor: color.colorCode,
            width: "25px",
            height: "25px",
          }}
        />
        <label className="ps-2 text-capitalize">{color.colorName}</label>
      </div>
    ),
  }));

  useEffect(() => {
    getAllColorAPI();
  }, []);

  return (
    <>
      <CustomNavBar label="Product Management" />
      <CommonHistoryNavigation label="Add New Product" />
      <div className="add-edit-installer-container">
        <div className="add-edit-installer-inner-container">
          <div className="row">
            <div className="col-6 pb-2">
              <label className="input-label">Category</label>
              <CommonInput
                name="categoryId"
                value={productData.categoryId}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 pb-2">
              <label className="input-label">Sub Category</label>
              <CommonInput
                name="subCategoryId"
                value={productData.subCategoryId}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Title</label>
              <CommonInput
                name="title"
                value={productData.title}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Price</label>
              <CommonInput
                name="price"
                value={productData.price}
                onChange={handleChange}
              />
            </div>
            {productData.colors.map(({ colorId, quantity, images }, index) => (
              <>
                <div className="d-flex flex-column col-6 py-4">
                  <div>
                    <label className="input-label pb-2">Color</label>
                    <CustomSelect
                      name={`colorId-${index}`}
                      value={productData.colors[index].colorId}
                      onChange={(e) => handleChange(e, index)}
                      menuItems={colorOptions}
                      className="w-100"
                    />
                  </div>
                  <label className="input-label mt-4 pb-1">Quantity</label>
                  <CommonInput
                    name="quantity"
                    value={quantity}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 py-4">
                  <label className="input-label pb-2">Image Upload</label>
                  <DragDropfiles />
                </div>
              </>
            ))}
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between w-50">
                <div>
                  {productData.colors.length < 0 && (
                    <label className="underlined-button cursor-pointer">
                      Delete
                    </label>
                  )}
                </div>
                <CustomButton
                  className="download-csv-button w-25 px-3 py-3 me-3"
                  variant="outlined"
                  onClick={handleAddMore}
                >
                  Add More
                </CustomButton>
              </div>
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Collection</label>
              <CommonInput
                name="collectionId"
                value={productData.collectionId}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 py-4">
              <label className="input-label">Rooms</label>
              <CommonInput
                name="subCategoryId"
                value={productData.subCategoryId}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 py-4">
              <label className="input-label">Date</label>
              <CommonInput
                name="date"
                value={productData.date}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 pt-2">
              <label className="input-label">Description</label>
              <CKEditorInput placeholder="Type here" />
            </div>
            <div className="col-6 pt-2">
              <label className="input-label">Features</label>
              <CKEditorInput placeholder="Type here" />
            </div>
            <div className="col-12 py-4"></div>
          </div>
          <div className="button-container mt-5">
            <CustomButton variant="outlined" className="cancel-button">
              Cancel
            </CustomButton>
            <CustomButton variant="contained" className="ms-4 save-button">
              Save & Publish
            </CustomButton>
          </div>
        </div>
        <CustomDialog isOpen={isOpen} handleClose={() => setIsOpen(false)}>
          <AddEditColor />
        </CustomDialog>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllColorApi: getAllColorApi,
    },
    dispatch
  );
};

const AddEditProduct = connect(null, mapDispatchToProps)(AddEditProductFC);

export default AddEditProduct;
