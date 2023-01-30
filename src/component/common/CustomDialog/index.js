import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import "./style.scss";
import VideoPlayer from "react-video-js-player";
import { sampleStateList } from "service/actionType";
import Car from "../../../assets/video/car.mp4";
import Instructions from "../../../assets/images/Instructions.svg";
import { BiDownload } from "react-icons/bi";
import pdf from "../../../assets/images/pdf.svg";

export const CustomDialog = ({
  isOpen,
  handleClose,
  deleteReason,
  setDeleteReason = "",
  submit,
  deleteDescription,
}) => {
  return (
    <div>
      <Dialog className="dialog-container" open={isOpen} onClose={handleClose}>
        <div className="Instructions">
          <div className="verticalblinds">
            <h5>Vertical Blinds Installation Process</h5>
          </div>
          <div className="Instructions-collab">
            <div className="Inst-start">
              <div className="instruction-mountinginside">
                <label>1 .Mounting inside the window Frame :</label>
                <ul>
                  <li> Screw holes into the valance</li>
                  <li> Mark the bracket location on the frame </li>
                  <li> attach the components</li>
                  <li> snap in the headrail</li>
                  <li> Attach the vanes</li>
                </ul>
              </div>
            </div>

            <div className="inst-download">
              <img src={Instructions} />
            </div>
          </div>
          <div className="downloadpdf">
            <a href={Instructions} download={Instructions}>
              <img src={pdf} width="20" />
              <span>View.pdf</span>
            </a>
            <BiDownload size="30" color="white" />
          </div>

          <div className="instruction-mountingoutside">
            <label>2 .Mounting outside the window Frame :</label>
            <ul>
              <li> Screw holes into the valance</li>
              <li> Mark the bracket location on the frame </li>
              <li> Attach the components</li>
              <li> Snap in the headrail</li>
              <li> Attach the vanes</li>
            </ul>
          </div>

          <div className="instruction-attaching">
            <label>3. attaching the vanes :</label>
            <ul>
              <li> Space the vanes</li>
              <li>Rotate the stems</li>
              <li> Attach the vanes</li>
              <li> Attach the rest of the vanes to the stems</li>
            </ul>
          </div>
          <VideoPlayer
            className="customvideo"
            src={Car}
            width="750"
            height="400"
          />
          <div className="www"></div>
        </div>
      </Dialog>
    </div>
  );
};
