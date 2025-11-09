import React from "react";

const ProgressBar = ({ progress, isActive = true, onClick }) => {
  return (
    <div className="w-[100px] h-0.5 bg-white/30 overflow-hidden rounded-full hover:cursor-pointer" onClick={onClick}>
      <div
        className="h-full bg-white"
        // here the progress bar animates smoothly via state updates,
        style={{ width: isActive ? `${progress}%` : "0%", transition: "ease" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
