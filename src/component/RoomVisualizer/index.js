import React, { useEffect } from "react";
import "./index.scss";
import uploadImage from "assets/images/uploadImage.png";
import Wall from "assets/images/Wall.png";

export default function RoomVisualizer() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="room-visualizer">
      <h2>Select a Room Space to Visualise</h2>

      <div className="upload-picture">
        <div class="upload-btn-wrapper">
          <img class="btn" src={uploadImage} />
          <input type="file" name="myfile" />
        </div>

        <p>Drag & Drop Or Upload your Room Pic</p>
        <p>Living Room, Kids Room, Dining Room, Bedroom,etc</p>
      </div>

      <div className="grid-main">
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
        <div className="wallpaper-child">
          <img src={Wall} className="wallpaper-image" />
          <p>Living Room</p>
        </div>
      </div>
    </div>
  );
}
