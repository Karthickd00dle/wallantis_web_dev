import CustomNavBar from "component/Admin/common/CustomNavBar";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import "./style.scss";
import { CustomButton } from "component/Admin/common/CustomButton";
import { DownloadIcon } from "assets/svg/Admin/Common";
import { history } from "service/helpers";
import CustomTable from "component/Admin/common/CustomTable";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Diamondwallpaper from "assets/images/Admin/Customer/diamond-wallpaper-ico.png";
import {
  InstallerTrackingStepper,
  OrderTrackingStepper,
} from "component/Admin/common/CustomStepper";
import { CustomDialog } from "component/Admin/common/CustomDialog";
import CommonSelect, {
  CustomSelect,
} from "component/Admin/common/CommonSelect";
import { CustomDatePicker } from "component/Admin/common/CustomDateTimePicker";

const installerTrackingData = [
  { id: 1, title: "Installer Assigned", details: "Sun, 9th Oct, 08:30am" },
  { id: 2, title: "Installer on the way", details: "Sun, 10th Oct, 08:30am" },
  { id: 3, title: "Site inspection Completed", details: "" },
  { id: 4, title: "Installation Completed", details: "Expected by 8th Nov’22" },
];

const orderTrackingData = [
  { id: 1, title: "Order Confirmed", details: "Sun, 9th Oct, 08:30am" },
  { id: 2, title: "Shipped", details: "Sun, 11th Oct, 03:00pm" },
  { id: 3, title: "In Transit", details: "Sun, 15th Oct, 11:30am" },
  { id: 4, title: "Delivery", details: "" },
];

const productDetailsData = [
  {
    id: 1,
    image: Diamondwallpaper,
    name: "Diamond Wallpaper",
    quantity: 3,
    unitprice: 350,
    totalprice: 750,
  },
  {
    id: 2,
    image: Diamondwallpaper,
    name: "Diamond Wallpaper",
    quantity: 2,
    unitprice: 350,
    totalprice: 550,
  },
];

const TableDataHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <label className="table-head-cell-label">Product</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Quantity</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Unit Price</label>
        </TableCell>
        <TableCell align="left">
          <label className="table-head-cell-label">Total Price</label>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const TableDataBody = ({
  bodyData: { id, image, name, quantity, unitprice, totalprice },
}) => {
  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        <div>
          <img width="54.08px" height="40px" src={image} alt={name} />
          <label className="ps-2 table-body-cell-label">{name}</label>
        </div>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">{quantity}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">₹{unitprice}</label>
      </TableCell>
      <TableCell align="left">
        <label className="table-body-cell-label">₹{totalprice}</label>
      </TableCell>
    </TableRow>
  );
};

const ViewEditOrderDetailFC = () => {
  const { id } = useParams();
  const [openOrderTrackingDialog, setOpenOrderTrackingDialog] = useState(false);
  const [openInstallerDetailsDialog, setOpenInstallerDetailsDialog] =
    useState(false);
  const [trackingStatus, setTrackingStatus] = useState(1);

  const handleTrackingStatus = (event) => {
    setTrackingStatus(event.target.value);
  };

  return (
    <>
      <CustomNavBar label="Order Detail" />
      <div className="order-detail-container ">
        <div className=" pb-2 d-flex justify-content-between">
          <label className="order-id-label">Order ID #{id}</label>
          <div className="button-container">
            <CustomButton
              startIcon={<DownloadIcon />}
              className="download-csv-button px-3 py-3"
              variant="outlined"
            >
              Download CSV
            </CustomButton>
            <CustomButton
              className="save-button ms-3 px-3"
              variant="contained"
              onClick={() => history.push("/admin/add-edit-product")}
            >
              Save
            </CustomButton>
          </div>
        </div>
        <div className="d-flex mt-5">
          <div>
            <div className=" details-delivery-container">
              <div className="customer-details-container-main">
                <label className="title-label">Customer details</label>
                <div className="p-4 customer-details-container">
                  <label className="name-label">John Alexandar</label>
                  <label className="mobno-label py-2">+91 98232121121</label>
                  <label className="address-label">
                    No 3. Jani Jani khan road, Royapettah, Chennai -14
                  </label>
                  <label className="view-profile-label pt-4 cursor-pointer">
                    View Profile
                  </label>
                </div>
              </div>
              <div className="ms-4 delivery-to-container-main">
                <label className="title-label">Delivery to</label>
                <div className="p-4 delivery-to-container">
                  <label className="address-label">
                    No 3. Jani Jani khan road, Royapettah, Chennai -14
                  </label>
                  <label className="payment-label">
                    Payment : <span>Paid (Google Pay)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="product-details-container-main mt-4">
              <label className="title-label">Product details</label>
              <div className="p-4 product-details-container">
                <CustomTable>
                  <TableDataHeader />
                  <TableBody>
                    {productDetailsData?.map((bodyData) => (
                      <TableDataBody key={bodyData.No} bodyData={bodyData} />
                    ))}
                  </TableBody>
                </CustomTable>
              </div>
            </div>
            <div className="installer-details-container-main mt-4">
              <div className="pb-3">
                <label className="title-label">Installer details</label>
                <CustomButton
                  onClick={() => setOpenInstallerDetailsDialog(true)}
                  className="ms-3 edit-button"
                  variant="outlined"
                >
                  Edit
                </CustomButton>
              </div>
              <div className="p-4 installer-details-container pb-5">
                <div className="customer-details-container">
                  <label className="name-label">John Alexandar</label>
                  <label className="mobno-label py-2">+91 98232121121</label>
                  <label className="address-label">Ambattur, Chennai</label>
                </div>
                <div className="installer-payment-details-container">
                  <label className="heading-label">Installation date :</label>
                  <label className="detail-label">12 Aug 2023</label>
                  <label className="heading-label">Installation Time :</label>
                  <label className="detail-label">12 PM - 1 PM</label>
                  <label className="heading-label">
                    Installation Charges :
                  </label>
                  <label className="detail-label">₹350</label>
                  <label className="heading-label">
                    Installation Payment :
                  </label>
                  <label className="detail-label payment">
                    Paid (Google Pay)
                  </label>
                </div>
                <div className="tracking-details-container">
                  <label className="ps-2 tracking-id-label">
                    Tracking Id : 2123232323232
                  </label>
                  <InstallerTrackingStepper
                    className="pt-3"
                    activeStep={3}
                    data={installerTrackingData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ps-5">
            <div className="p-4 order-tracking-container">
              <label className="title-label">Order Tracking </label>
              <label className="tracking-id-label">
                Tracking Id : 2123232323232
              </label>
              <OrderTrackingStepper
                className="pt-3"
                activeStep={2}
                data={orderTrackingData}
              />
              <CustomButton
                className="mt-4 update-status-button"
                variant="outlined"
                onClick={() => setOpenOrderTrackingDialog(true)}
              >
                Update Status
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <CustomDialog isOpen={openOrderTrackingDialog}>
        <div className="p-5 order-tracking-status-dialog-container">
          <label className="order-tracking-label">Order Tracking </label>
          <div className="mt-3 order-status-container">
            <label className="pb-2 order-status-label">Order Status</label>
            <CustomSelect
              width="350px"
              className="order-select-style"
              value={trackingStatus}
              onChange={handleTrackingStatus}
              menuItems={[
                { label: "Order Confirmed", value: 1 },
                { label: "Shipped", value: 2 },
                { label: "In Transit", value: 3 },
                { label: "Delivery", value: 4 },
              ]}
            />
            <div className="d-flex justify-content-end mt-5">
              <CustomButton
                className="cancel-button"
                variant="outlined"
                onClick={() => setOpenOrderTrackingDialog(false)}
              >
                Cancel
              </CustomButton>
              <CustomButton
                className="ms-3 save-button"
                variant="contained"
                onClick={() => setOpenOrderTrackingDialog(false)}
              >
                Save
              </CustomButton>
            </div>
          </div>
        </div>
      </CustomDialog>
      <CustomDialog isOpen={openInstallerDetailsDialog}>
        <div className="p-5 installer-details-dialog-container">
          <label className="installer-details-label">Installer details</label>
          <div className="mt-3 installer-details-container">
            <div className="installer-details-input-container">
              <label className="title-label">Region</label>
              <CustomSelect
                className="mt-1 tracking-status-select-style"
                width="350px"
                value={trackingStatus}
                onChange={handleTrackingStatus}
                menuItems={[
                  { label: "Order Confirmed", value: 1 },
                  { label: "Shipped", value: 2 },
                  { label: "In Transit", value: 3 },
                  { label: "Delivery", value: 4 },
                ]}
              />
            </div>
            <div className="pt-3 installer-details-input-container">
              <label className="title-label">Installer Name</label>
              <CustomSelect
                className="mt-1 tracking-status-select-style"
                width="350px"
                value={trackingStatus}
                onChange={handleTrackingStatus}
                menuItems={[
                  { label: "Order Confirmed", value: 1 },
                  { label: "Shipped", value: 2 },
                  { label: "In Transit", value: 3 },
                  { label: "Delivery", value: 4 },
                ]}
              />
            </div>
            <div className="pt-3 installer-details-input-container">
              <label className="title-label">Installation Charges</label>
              <CustomSelect
                className="mt-1 tracking-status-select-style"
                width="350px"
                value={trackingStatus}
                onChange={handleTrackingStatus}
                menuItems={[
                  { label: "Order Confirmed", value: 1 },
                  { label: "Shipped", value: 2 },
                  { label: "In Transit", value: 3 },
                  { label: "Delivery", value: 4 },
                ]}
              />
            </div>
            <div className="pt-3 installer-details-input-container d-flex justify-content-between">
              <div>
                <label className="title-label">Installation Date</label>
                <CustomDatePicker />
              </div>
              <div>
                <label className="title-label">Installation TIme</label>
                <CustomSelect
                  className="mt-1 tracking-status-select-style"
                  width="350px"
                  value={trackingStatus}
                  onChange={handleTrackingStatus}
                  menuItems={[
                    { label: "Order Confirmed", value: 1 },
                    { label: "Shipped", value: 2 },
                    { label: "In Transit", value: 3 },
                    { label: "Delivery", value: 4 },
                  ]}
                />
              </div>
            </div>
            <div className="pt-3 installer-details-input-container">
              <label className="title-label">Installer Status</label>
              <CustomSelect
                className="mt-1 tracking-status-select-style"
                width="350px"
                value={trackingStatus}
                onChange={handleTrackingStatus}
                menuItems={[
                  { label: "Order Confirmed", value: 1 },
                  { label: "Shipped", value: 2 },
                  { label: "In Transit", value: 3 },
                  { label: "Delivery", value: 4 },
                ]}
              />
            </div>
            <div className="d-flex justify-content-end mt-5">
              <CustomButton
                className="cancel-button"
                variant="outlined"
                onClick={() => setOpenInstallerDetailsDialog(false)}
              >
                Cancel
              </CustomButton>
              <CustomButton
                className="ms-3 save-button"
                variant="contained"
                onClick={() => setOpenInstallerDetailsDialog(false)}
              >
                Save
              </CustomButton>
            </div>
          </div>
        </div>
      </CustomDialog>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const ViewEditOrderDetail = connect(
  null,
  mapDispatchToProps
)(ViewEditOrderDetailFC);

export default ViewEditOrderDetail;
