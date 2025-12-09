import React, { useState } from "react";
import slide3 from "../../assets/park.jpg";
import slide4 from "../../assets/snow.jpg";
import slide5 from "../../assets/kailash.jpg";

import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Retreats", image: slide3 },
  { label: "Online", image: slide4 },
  { label: "Trainings", image: slide5 },
];

const OurWorks = () => {
  const navigateTo = useNavigate();

  const [hovered, setHovered] = useState(null);
  return (
    <div className="p-8 mt-39 sm:ml-19 mx-15">
      <span className="text-3xl font-inter-light block text-neutral-900 sm:mb-7">
        Our work spans
      </span>
      <div className="flex flex-col sm:flex-row mt-2 gap-12 md:gap-1.5 aspect-[6/2] cursor-pointer">
        {items.map((item, index) => (
          <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`relative transition-all duration-[600ms] ease-in-out ${
              hovered === null
                ? "sm:w-[33%]"
                : hovered === index
                ? "sm:w-[70%]"
                : "sm:w-[30%]"
            }`}
            key={index}
            onClick={() =>
              navigateTo(`projects?category=${encodeURIComponent(item.label)}`)
            }
          >
            <img
              src={item.image}
              alt=""
              className="object-cover w-full h-[calc(100%-10px)] rounded-xl"
            />
            <span
              className={`whitespace-nowrap absolute transition-opacity duration-300 ease-in-out md:text-xl lg:text-4xl font-inter-light left-0 p-2 rounded-lg ${
                hovered === null
                  ? "opacity-100"
                  : hovered === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {item.label}
              <MoveRight
                strokeWidth={1.25}
                className={`inline-block ml-2 -translate-y-1 transition-opacity duration-300 ease-in-out ${
                  hovered === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
