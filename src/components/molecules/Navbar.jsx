import React, { useState } from "react";
import Button from "../atoms/button";
import { EyeClosed, PhoneIcon, Search, UserRound } from "lucide-react";
import logo from "../../assets/logonav.png";
import { SearchMenu } from "../organism/SearchMenu";
import { ProgressiveBlur } from "../atoms/ProgessiveBlur";

const Navbar = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="fixed top-0 z-99 w-full pt-2 pb-1 px-9 flex justify-between">
      <ProgressiveBlur />
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

          <SearchMenu>
            <SearchMenu.TriggerButton
              upperLabel={<Search size={16} />}
              lowerLabel={<EyeClosed size={16} />}
            />
            <SearchMenu.Content>
              <SearchMenu.Input placeholder="Search..." />
              <SearchMenu.Suggestions
                suggestons={["Components", "Hooks", "Theming", "Framer"]}
              />
              <SearchMenu.SearchResults />
            </SearchMenu.Content>
          </SearchMenu>

          <Button icon={<PhoneIcon size={15} />} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
