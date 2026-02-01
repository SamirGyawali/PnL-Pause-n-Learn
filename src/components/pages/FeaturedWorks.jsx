import React from "react";
import Button from "../atoms/button";
import { MoveRight } from "lucide-react";
import MyJustifiedLayout from "../organism/MyJustifiedLayout";
import { useNavigate } from "react-router-dom";

const FeaturedWorks = () => {
  const navigateTO = useNavigate();
  return (
    <div className="hero-crousal mt-5 px-7">
      <div className="pt-3 mb-[60px] flex justify-between items-center border-t border-t-gray-500/50">
        <h1 className="text-2xl text-neutral-900/90">Featured Works</h1>
        <Button
          onClick={() => navigateTO("projects")}
          label="ALL WORKS"
          icon={<MoveRight size={12} />}
        />
      </div>
      {/* <MasonryLayout /> */}
      <MyJustifiedLayout />
    </div>
  );
};

export default FeaturedWorks;
