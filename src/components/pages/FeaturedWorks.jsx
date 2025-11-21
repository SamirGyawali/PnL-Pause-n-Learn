import React from "react";
import Button from "../atoms/button";
import { MoveRight } from "lucide-react";
import Card from "../molecules/Card";
import MyJustifiedLayout from "../organism/MyJustifiedLayout";



const FeaturedWorks = () => {
  return (
    <div className="hero-crousal mt-5 px-7">
      <div className="pt-3 mb-[60px] flex justify-between items-center border-t border-t-gray-500/50">
        <h1 className="text-2xl text-neutral-900/90">Featured Works</h1>
        <Button label="VIEW MORE" icon={<MoveRight size={12} />} />
      </div>
      {/* <MasonryLayout /> */}
      <MyJustifiedLayout />
    </div>
  );
};

export default FeaturedWorks;
