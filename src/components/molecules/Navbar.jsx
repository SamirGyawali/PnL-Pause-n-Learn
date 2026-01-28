import React, { useState } from "react";
import Button, { SliderButton } from "../atoms/button";
import { EyeClosed, PhoneIcon, Search, UserRound } from "lucide-react";
import logo from "../../assets/logonav.png";
import { motion, AnimatePresence } from "motion/react";

const menuVariant = {
  open: {
    opacity: 1,
    width: 580,
    height: 650,
  },
  closed: {
    opacity: 0,
    width: 300,
    height: 200,
  },
};
const Navbar = () => {
  const [active, setActive] = useState(null);
  return (
    <div className="fixed top-0 z-99 backdrop-blur-[3.50px] w-full pt-2 pb-1 px-9 flex justify-between">
      <a href="#" className="font-extrabold font-sans text-[16px]">
        <img
          src={logo}
          alt="logo"
          className={`w-[20px] mr-9 object-cover scale-220 translate-y-1`}
        />
      </a>
      <div className="flex gap-3 relative">
        <Button
          label="UPDATES"
          icon={
            <div className="w-1.5 h-1.5 bg-green-400 rounded-lg animate-pulse"></div>
          }
        />
        <Button label="BLOGS" />
        <Button label="LOGIN" icon={<UserRound size={15} />} />
        <SliderButton
          upperLabel={<Search size={16} />}
          lowerLabel={<EyeClosed size={16} />}
          isActive={active}
          setIsActive={setActive}
        />
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key="menu"
              className="menu absolute top-13 right-7 h-[650px] w-[480px] fixed bg-[#169edd] rounded-xl z-50 p-4"
              variants={menuVariant}
              animate={active ? "open" : "closed"}
              initial="closed"
              exit="closed"
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              hello world
            </motion.div>
          )}
        </AnimatePresence>
        <Button icon={<PhoneIcon size={15} />} />
      </div>
    </div>
  );
};

export default Navbar;
