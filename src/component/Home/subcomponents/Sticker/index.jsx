import React from "react";
import "./style.scss";

function Stickercard({ sticker }) {
  return (
    <div className="home-card-sticker-container">
      <img src={sticker} />
      <div className="home-card-sticker-title">Sticker Wallpapers</div>
      <div className="home-card-sticker--title-two">{`Lorem ipsum dolor sit amet, consectetur adipiscing     sed do eiusmod tempor `}</div>
      <button>Shop Now</button>
    </div>
  );
}

export default Stickercard;
