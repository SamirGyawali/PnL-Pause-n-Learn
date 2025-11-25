import React from "react";
import slide11 from "../../assets/slide11.jpg";
import slide2 from "../../assets/slide2.jpg";

const PnLTeams = () => {
  return (
    <div className="my-30 mx-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <span className="font-inter-light text-4xl md:text-5xl sm:ml-9 mb-10 flex-2">
          PNL Team
        </span>
        <p className="font-inter-regular text-md text-neutral-500 mb-7 flex-1 ">
          With office in Pune, PNL is powered by a team of over 150 architects
          and designers from more than 30 regions worldwide.
        </p>
      </div>
      <div className="overflow-hidden lg:w-[96vw] lg:h-[900px]">
        <img
          src={slide2}
          alt=""
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default PnLTeams;
