import React from "react";
import Button from "../atoms/button";
import { MoveRight } from "lucide-react";
import slide2 from "../../assets/slide2.jpg";
import slide11 from "../../assets/slide11.jpg";
import myVideo from "../../assets/radhe.mp4";

const AboutUs = () => {
  return (
    <>
      <div className="mt-19 p-9 flex flex-col lg:flex-row justify-center items-center">
        <div className="sm:mx-10 p-4">
          <p className="font-inter-light text-4xl md:text-5xl p-4 max-w-[500px]">
            Rooted in Wisdom, Shared with Purpose
          </p>
          <p className="font-inter-regular text-md text-neutral-500 mt-12 pl-4 pb-8 sm:max-w-3/4">
            Founded in 2017 in Pune, Pause n Learn offers scientific and
            spiritual programs inspired by Ankur and Manjari's decade of study
            in the Himalayas. Through our Kharadi and Wagholi studios, we help
            people restore balance and wellbeing in everyday life.
          </p>
          <div className="px-3 inline-block">
            <Button label="ABOUT US" icon={<MoveRight size={14} />} />
          </div>
        </div>
        <div className="lg:mt-40 w-[100vw] lg:h-[900px] overflow-hidden rounded-3xl">
          <video
            controls
            autoPlay
            loop
            src={myVideo}
            alt=""
            className="AboutUs rounded-3xl object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
