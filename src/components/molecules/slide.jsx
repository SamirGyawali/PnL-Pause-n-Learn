import React from "react";

const Slide = ({ slide, isActive }) => {
  return (
    <div
      key={slide.id}
      className={`stacked-player absolute inset-0 transition-opacity duration-1000 ease-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        // Image takes full width/height of its parent (stacked-player div)
        /* 
            width, height: 100% = stretch the image to fill the parent container
            object-cover: fill the image with the container, croping as necessary
            bg-cover and bg-center = for div with background image, for achieving the same thing as object-cover: control how background image fills inside the container div
        */
        className="w-full h-full object-cover rounded-xl bg-cover bg-center"
      />


    </div>
  );
};

export default Slide;
