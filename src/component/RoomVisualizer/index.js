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

import LivingRoom1 from "assets/images/visualizer/rooms/living-room-sofa.png";
import LivingRoom2 from "assets/images/visualizer/rooms/living-room-sofa-2.png";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function RoomVisualizer() {
  const history = useHistory();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [activeTexture, setActiveTexture] = useState(null);
  const TextureBackground = styled.div`
    background: url(${(props) => props.url}) center/cover no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  `;

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
            <div className="visualizer-module-content d-flex align-items-end m-5">
              <TextureBackground url={activeTexture}>
                <img
                  src={uploadedImage}
                  alt="UploadedWallImage"
                  className="wallpaper-image"
                />
              </TextureBackground>
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
                <div
                  className="texture-image-box"
                  onClick={() => setActiveTexture(diamondWall)}
                >
                  <img
                    className="texture-img"
                    src={diamondWall}
                    alt="diamondWall"
                  />
                  <p>Diamond Wallpaper</p>
                </div>
                <div
                  className="texture-image-box"
                  onClick={() => setActiveTexture(brownWall)}
                >
                  <img
                    className="texture-img"
                    src={brownWall}
                    alt="brownWall"
                  />
                  <p>Brown Wallpaper</p>
                </div>
                <div
                  className="texture-image-box"
                  onClick={() => setActiveTexture(dayDreamWall)}
                >
                  <img
                    className="texture-img"
                    src={dayDreamWall}
                    alt="dayDreamWall"
                  />
                  <p>Daydreamer Wallpaper</p>
                </div>
                <div
                  className="texture-image-box"
                  onClick={() => setActiveTexture(illusionWall)}
                >
                  <img
                    className="texture-img"
                    src={illusionWall}
                    alt="illusionWall"
                  />
                  <p>Illusion Wallpaper</p>
                </div>
                <div
                  className="texture-image-box"

onClick={() => setActiveTexture(slickWeaveWall)}
                >
                  <img
                    className="texture-img"
                    src={slickWeaveWall}
                    alt="slickWeaveWall"
                  />
                  <p>Silk Weave Wallpaper</p>
                </div>
                <div
                  className="texture-image-box"
                  onClick={() => setActiveTexture(greenWall)}
                >
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
                <div
                  className="wallpaper-image-container"
                  onClick={() => handleWallImageClick(LivingRoom1)}
                >
                  <img
                    src={LivingRoom1}
                    className="wallpaper-image"
                    alt="wallImage"
                  />
                </div>
                <p>Living Room</p>
              </div>
              <div className="wallpaper-child">
                <div
                  className="wallpaper-image-container"
                  onClick={() => handleWallImageClick(LivingRoom2)}
                >
                  <img
                    src={LivingRoom2}
                    className="wallpaper-image"
                    alt="wallImage"
                  />
                  <p>Hall Room</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}