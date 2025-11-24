import React from "react";
import Button from "../atoms/button";
import { MoveRight } from "lucide-react";
import slide2 from "../../assets/slide2.jpg";
import slide11 from "../../assets/slide11.jpg";

const AboutUs = () => {
  return (
    <div className="mt-19 p-9 flex flex-col lg:flex-row justify-center items-center">
      <div className="sm:mx-10 p-4">
        <p className="font-inter-extralight text-4xl md:text-5xl p-4 w-3/5">
          Rooted in Wisdom, Shared with Purpose
        </p>
        <p className="font-inter-regular text-md text-neutral-500 mt-12 pl-4 pb-8 max-w-3/4">
          Founded in 2017 in Pune, Pause n Learn offers scientific and spiritual
          programs inspired by Ankur and Manjari's decade of study in the
          Himalayas. Through our Kharadi and Wagholi studios, we help people
          restore balance and wellbeing in everyday life.
        </p>
        <div className="px-3 inline-block">
          <Button label="ABOUT US" icon={<MoveRight size={14} />} />
        </div>
      </div>
      <div className="lg:mt-40">
        <img
          src={slide2}
          alt=""
          className="AboutUs rounded-xl w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
