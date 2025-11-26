import React, { useState } from "react";
import slide2 from "../../assets/slide2.jpg";
import slide11 from "../../assets/slide11.jpg";

const items = [
  { label: "Spritual Retreats", image: slide11 },
  { label: "Online Programs", image: slide11 },
  { label: "Training Programs", image: slide11 },
];

const OurWorks = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="p-8 mt-39 sm:ml-19">
      <span className="text-3xl font-inter-light block sm:mb-7 text-neutral-600">
        Our Works Span
      </span>
      <div className="flex flex-col sm:flex-row mt-2 gap-1.5 aspect-[6/2] cursor-pointer">
        {items.map((item, index) => (
          <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`relative transition-all duration-[900ms] ease-in-out overflow-hidden rounded-xl ${
              hovered === null
                ? "sm:w-[33%]"
                : hovered === index
                ? "sm:w-[70%]"
                : "sm:w-[30%]"
            }`}
            key={index}
          >
            <img
              src={item.image}
              alt=""
              className="object-cover w-full h-full"
            />
            {/* <span className="absolute text-2xl font-inter-light bottom-2 left-2 text-white bg-black/30 backdrop-blur-[1rem] px-3 py-2 rounded-lg">
              {item.label}
              <MoveRight strokeWidth={1.25} className="inline-block ml-2" />
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
