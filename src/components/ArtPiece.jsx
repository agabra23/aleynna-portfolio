import React from "react";

const ArtPiece = ({ imgSrc, title, medium, maxWidth = "500px" }) => {
  return (
    <div className="flex flex-col items-center max-w-full">
      <img
        className={`max-w-[${maxWidth}] w-full mb-[30px]`}
        src={imgSrc}
        alt={title}
      />
      <h4 className="text-lg font-medium font-helvetica mb-[10px]">{title}</h4>
      <h6 className="uppercase font-thin font-helvetica text-[16px] mb-[10px]">
        {medium}
      </h6>
    </div>
  );
};

export default ArtPiece;
