import React, { useRef, useState } from "react";

const VideoModel = ({ videoSource }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={videoSource}
        controls
        style={{ width: '65%',marginLeft:'170px'  }} 
      >
        Your browser does not support the video tag.
      </video>

      {/* <button onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button> */}
    </div>
  );
};

export default VideoModel;
