import React from 'react';
import './styles.scss';

function HomeCardOne({ wallpaperPng }) {
    return (
      <div className="home-card-one-container">
        <img  src={wallpaperPng} />
        <div className="home-card-one--title">Wallpapers</div>
        <div className="home-card-one--title-two">{`Lorem ipsum dolor sit amet, consectetur adipiscing     sed do eiusmod tempor `}</div>
        <button>Shop Now</button>
      </div>
    );
  }

export default HomeCardOne;