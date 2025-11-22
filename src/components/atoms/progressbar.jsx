import React from "react";

const ProgressBar = ({ progress, isActive = true, onClick }) => {
  return (
    <div className={`w-[70px] h-[1px] ${isActive ?  'bg-black/30 sm:bg-[#e6e6e6]/60' :'bg-white/30' } overflow-hidden rounded-full hover:cursor-pointer`} onClick={onClick}>
      <div
        className="h-full bg-black sm:bg-white"
        // here the progress bar animates smoothly via state updates,
        style={{ width: isActive ? `${progress}%` : "0%", transition: "ease-out" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
