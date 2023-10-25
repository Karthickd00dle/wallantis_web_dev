import React, { useEffect, useState } from "react";
import "./index.scss";
import uploadImage from "assets/images/uploadImage.png";
import brownWall from "assets/images/visualizer/brown-wall.png";
import dayDreamWall from "assets/images/visualizer/daydream-wall.png";
import diamondWall from "assets/images/visualizer/diamond-wall.png";
import greenWall from "assets/images/visualizer/green-wall.png";
import illusionWall from "assets/images/visualizer/illusion-wall.png";
import slickWeaveWall from "assets/images/visualizer/slik-weave-wall.png";
import arrowBack from "assets/svg/visualizer/arrow-left.svg";
import Wall from "assets/images/Wall.png";
import { useHistory } from "react-router-dom";

export default function RoomVisualizer() {
  const history = useHistory();
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
    };

    reader.readAsDataURL(file);

  
  };
  const handleWallImageClick = (image) => {
    setUploadedImage(image);
  };
  return (
    <React.Fragment>
      <div className="room-visualizer">
        {uploadedImage ? (
          <div className="visualizer-module-container">
            <div className="visualizer-module-content">
              <img
                src={uploadedImage}
                alt="UploadedWallImage"
                className="wallpaper-image"
              />
            </div>
            <div className="visulaizer-module-sidebar">
              <div className="v-m-siderbar-head">
                <img
                  src={arrowBack}
                  alt="arrowBack"
                  onClick={() => setUploadedImage(null)}
                />
                <p>Textues</p>
              </div>
              <div className="textures-container">
                <div className="texture-image-box">
                  <img
                    className="texture-img"
                    src={diamondWall}
                    alt="diamondWall"
                  />
                  <p>Diamond Wallpaper</p>
                </div>
                <div className="texture-image-box">
                  <img
                    className="texture-img"
                    src={brownWall}
                    alt="brownWall"
                  />
                  <p>Brown Wallpaper</p>
                </div>
                <div className="texture-image-box">
                  <img
                    className="texture-img"
                    src={dayDreamWall}
                    alt="dayDreamWall"
                  />
                  <p>Daydreamer Wallpaper</p>
                </div>
                <div className="texture-image-box">
                  <img
                    className="texture-img"
                    src={illusionWall}
                    alt="illusionWall"
                  />
                  <p>Illusion Wallpaper</p>
                </div>
                <div className="texture-image-box">
                  <img
                    className="texture-img"
                    src={slickWeaveWall}
                    alt="slickWeaveWall"
                  />
                  <p>Silk Weave Wallpaper</p>
                </div>
                <div className="texture-image-box">
                  <img
                    className="texture-img"
                    src={greenWall}
                    alt="greenWall"
                  />
                  <p>Green Wallpaper</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment>
            <h2>Select a Room Space to Visualise</h2>

            <div className="upload-picture">
              <div class="upload-btn-wrapper">
                <img class="btn" alt="uploadBtn" src={uploadImage} />
                <input type="file" name="myfile" onChange={handleImageUpload} />
              </div>

              <p>Drag & Drop Or Upload your Room Pic</p>
              <p>Living Room, Kids Room, Dining Room, Bedroom,etc</p>
            </div>

            <div className="grid-main">
              <div className="wallpaper-child">
              <div onClick={() => handleWallImageClick(Wall)}>
                <img src={Wall} className="wallpaper-image" alt="wallImage"  />
                </div>
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <img src={Wall} className="wallpaper-image" alt="wallImage" />
                <p>Living Room</p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
