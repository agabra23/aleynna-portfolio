import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const VideoCard = ({ videoSrc }) => {
  const [playing, setPlaying] = useState(true);
  const vidRef = useRef(null);

  const togglePlay = () => {
    playing ? vidRef.current.pause() : vidRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div className="relative group">
      <video ref={vidRef} playsInline muted autoPlay loop width="250">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <button
        onClick={togglePlay}
        className="p-[30px] group-hover:opacity-100 opacity-0 transition-all duration-500 bg-black/50 text-white rounded-xl cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default VideoCard;
