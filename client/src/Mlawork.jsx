import React from "react";
import "./ResponsiveComponent.css";
import SanjayData from "./sanjaydata.jpeg";
import Sanjayworks from "./sanjayworks.jpeg";
import sanjayvid from "./sanjayvid.mp4";
const ResponsiveComponent = () => (
  <div className="responsive-container">
    <div className="image-container">
      <img src={SanjayData} alt="Image 1" className="responsive-image" />
    </div>
    <div className="image-container">
      <img src={Sanjayworks} alt="Image 2" className="responsive-image" />
    </div>
    <div className="video-container">
      <iframe
        title="Video"
        width="100%"
        height="100%"
        src={sanjayvid}
        allowFullScreen
        style={{ border: "none" }} // Use inline style to remove border
      ></iframe>
    </div>
  </div>
);

export default ResponsiveComponent;
