import React from "react";
import slide11 from "../../assets/slide11.jpg";
import slide2 from "../../assets/slide2.jpg";
import Button from "../atoms/button";
import { MoveRight } from "lucide-react";

const PnLTeams = () => {
  return (
    <div className="my-30 mx-10">
      <div className="flex flex-col lg:flex-row justify-between mb-10 items-start lg:items-center">
        <span className="font-inter-light text-4xl md:text-5xl lg:ml-9 flex-2 sm:whitespace-nowrap">
          PNL Team
        </span>
        <div className="flex flex-col gap-3 items-start max-w-[820px]">
          <p className="font-inter-regular text-md text-neutral-500 flex-1">
            With office in Pune, PNL is powered by a team of over 150 architects
            and designers from more than 30 regions worldwide. With office in
            Pune, PNL is powered by a team of over.
          </p>
          <Button label="OUR PEOPLE" icon={<MoveRight size={14} />} />
        </div>
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
