import React from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");
  return (
    <div className="h-[calc(85svh-.75rem)] md:h-[calc(100svh-.75rem)] w-full px-3 pt-[49px] pb-3">
      <span className="text-9xl font-inter-thin">{category}</span>
      <br />
      <span>shri ramana maharshi</span>
      <span>{category}</span>
    </div>
  );
};

export default Projects;
