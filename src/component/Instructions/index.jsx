import { CustomDialog } from "component/common";
import React from "react";
import VideoPlayer from "react-video-js-player";
import Car from "assets/video/car.mp4";
import InstructionsImage from "assets/images/Instructions";
import { BiDownload } from "react-icons/bi";
import Pdf from "assets/images/Pdf";
import "./style.scss";

export const Instructions = ({ isOpen, handleClose }) => {
  return (
    <>
      <CustomDialog isOpen={isOpen} handleClose={handleClose}>
        <div className="Instructions">
          <div className="verticalblinds d-flex justify-content-center">
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
              <InstructionsImage />
            </div>
          </div>
          <div className="downloadpdf">
            {/* <a href={InstructionsImage} download={InstructionsImage}> */}
            <a>
              <Pdf width="20" />
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
          <div className="d-flex justify-content-center">
            <VideoPlayer
              className="customvideo"
              src={Car}
              width="750"
              height="400"
            />
          </div>
        </div>
      </CustomDialog>
    </>
  );
};
