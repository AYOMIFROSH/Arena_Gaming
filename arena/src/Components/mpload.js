// MpLoad.js

import React, { useState, useEffect } from "react";
import MP from '../assets/arenaMP.mp4';

const MpLoad = ({ onVideoEnd }) => {
  const [videoDuration, setVideoDuration] = useState(5.6); // Set initial duration

  useEffect(() => {
    const video = document.getElementById("myVideo");
    video.addEventListener("loadedmetadata", () => {
      setVideoDuration(video.duration);
    });

    // Trigger onVideoEnd after 5.6 seconds
    setTimeout(() => {
      onVideoEnd();
    }, videoDuration * 1000); // Convert seconds to milliseconds
  }, [onVideoEnd, videoDuration]);

  return (
    <div  className="MpLoad">
      <video id="myVideo" autoPlay muted>
        <source src={MP} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MpLoad;
