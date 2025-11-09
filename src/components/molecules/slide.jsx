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

      {/* Overlay info */}
      <div className="absolute bottom-10 left-10 text-white space-y-2 z-20 bg-white/10 backdrop-blur-md backdrop-saturate-80 rounded-xl min-w-[250px] p-2">
        <p className="text-sm opacity-80">{slide.meta}</p>
        <h2 className="text-sm md:text-sm font-bold max-w-lg leading-tight">
          {slide.title}
        </h2>
        <a
          href="#" // Replace with actual link
          className="text-sm border-b border-white pb-2px hover:opacity-70 transition"
        >
          VIEW
        </a>
      </div>
    </div>
  );
};

export default Slide;
