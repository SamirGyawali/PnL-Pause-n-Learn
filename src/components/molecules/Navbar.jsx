import React, { useState } from "react";
import Button from "../atoms/button";
import { PhoneIcon, Search, UserRound } from "lucide-react";
import logo from "../../assets/logonav.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-99 backdrop-blur-[3.50px] w-full pt-2 pb-1 px-9 flex justify-between overflow-hidden">
      <a href="#" className="font-extrabold font-sans text-[16px]">
        <img
          src={logo}
          alt="logo"
          className={`w-[20px] mr-9 object-cover scale-220 translate-y-1`}
        />
      </a>
      <div className="flex gap-3">
        <Button
          label="UPDATES"
          icon={
            <div className="w-1.5 h-1.5 bg-green-400 rounded-lg animate-pulse"></div>
          }
         />
        <Button label="BLOGS" />
        <Button label="LOGIN" icon={<UserRound size={15} />} />
        <Button icon={<Search size={15} />} />
        <Button icon={<PhoneIcon size={15} />} />
      </div>
    </div>
  );
};

export default Navbar;
