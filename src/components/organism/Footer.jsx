import React from "react";
import logo from "../../../public/logo2.avif";
import Button from "../atoms/button";
import { MoveUp } from "lucide-react";

const Footer = () => {
  return (
    <div className="font-inter-light bg-[rgba(199,199,199,0.38)] w-full h-[70vh] p-9 text-neutral-800">
      <div className="flex flex-col sm:flex-row justify-between gap-4 h-full">
        <div className="flex flex-col justify-between">
          <a
            href="#"
            className="font-extrabold font-sans text-[16px] w-fit h-fit"
          >
            <img src={logo} alt="logo" className={`w-fit object-cover`} />
          </a>
          <div className="flex flex-col text-[12px] font-inter-regular text-neutral-500">
            <span className="p-[2px]">Privacy Policy</span>
            <span className="p-[2px]">Terms of Service</span>
            <span className="p-[2px]">© PNL 2025</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-between gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-inter-medium">Works</span>
              <div className="flex flex-row gap-2">
                <Button label="HOME" />
                <Button label="TRAININGS" />
                <Button label="RETREATS" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-inter-medium">Office</span>
              <div className="flex flex-row gap-2">
                <Button label="TRAININGS" />
                <Button label="ABOUT US" />
                <Button label="OUR TEAM" />
                <Button label="JOIN US" />
                <Button label="CONTACT" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-inter-medium text-sm">PNL Updates</span>
              <div className="flex flex-col gap-2 w-[320px]">
                <input
                  type="text"
                  className="border-1 border-neutral-400 rounded-xl p-2"
                />
                <span className="text-[11px] font-inter-regular text-neutral-500 max-w-[250px] block">
                  By signing up, you consent to receive updates email from PNL
                  and agree to our Privacy Policy.
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 text-neutral-500 font-inter-regular">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Youtube</span>
            <span>X</span>
          </div>
        </div>
        <div>
          <Button icon={<MoveUp size={34} strokeWidth={0.5} />} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
