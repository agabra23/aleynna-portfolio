import React from "react";

const VideoCard = ({ videoSrc }) => {
  return (
    <video controls width="250">
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default VideoCard;
