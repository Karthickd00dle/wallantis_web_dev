import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import "./style.scss";
import { sampleStateList } from "service/actionType";

export const DeleteDialog = ({
  isOpen,
  handleClose,
  deleteReason,
  setDeleteReason = "",
  submit,
  deleteDescription,
}) => {
  const dispatch = useDispatch();
  // Get Deleting Record Details
  const deletingRecordDetails = useSelector(
    (state) => state.commonStore.deletingRecordDetailsStore
  );
  const [isShowError, setIsShowError] = useState(false);
  const handleSubmit = () => {
    setIsShowError(true);
    if (!isShowError && deleteReason.trim().length !== 0) {
      submit();
      dispatch({
        type: sampleStateList.sample1,
        payload: {},
      });
    }
  };

  const showDeletingRecordDetails = (colVal, title, displayValue) => {
    return (
      <div className={`mb-3 ${colVal}`}>
        <label className="delete_title">{title}</label>
        <label className="delete_details">{displayValue}</label>
      </div>
    );
  };

  useEffect(() => {
    if (!isShowError) return;
    if (deleteReason.trim().length === 0) {
      setIsShowError(true);
    } else {
      setIsShowError(false);
    }
  }, [deleteReason, isShowError]);

  const { name = "", location, ipAddress, kimType } = deletingRecordDetails;
  return (
    <div>
      <Dialog className="dialog-container" open={isOpen} onClose={handleClose}>
        {name && (
          <div className="row delete_details_container m-0">
            {showDeletingRecordDetails("col-12", "Kim Server", name)}
            {showDeletingRecordDetails("col-4", "IP Address", ipAddress)}
            {showDeletingRecordDetails("col-4", "Type", kimType)}
            {showDeletingRecordDetails("col-4", "Location", location)}
          </div>
        )}
        <div className="delete_popup">
          <div className="popup-description">Please comment the reason</div>
          <textarea
            value={deleteReason}
            onChange={(e) => setDeleteReason(e.target.value)}
            className="comments"
            placeholder="Comment here"
            name="comments"
            id=""
            cols="40"
            rows="5"
          />
          {isShowError && (
            <div className="error_msg_text delete_error">
              This field is required
            </div>
          )}

          <br />
          <div className="popup-description">{deleteDescription}</div>
          <br />
          <div className="button_area">
            <button className="button_area_Confirm" onClick={handleSubmit}>
              Yes
            </button>
            <button
              onClick={() => {
                handleClose();
                setIsShowError(false);
              }}
              className="button_area_cancel"
            >
              No
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
