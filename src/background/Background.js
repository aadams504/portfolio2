import React from "react";
import "../styles/background.css";
import videoBg from "../assets/background.mp4";
import fallbackImage from "../assets/fallback-image.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={videoBg} type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
