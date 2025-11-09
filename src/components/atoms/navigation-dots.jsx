import React from "react";

const NavigationDots = ({slides, active, goTo}) => {
  return (
    <div className="flex gap-2">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`w-3 h-3 rounded-full border border-white transition hover:cursor-pointer ${
            i === active ? "bg-white" : "bg-transparent"
          }`}
        ></button>
      ))}
    </div>
  );
};

export default NavigationDots;
