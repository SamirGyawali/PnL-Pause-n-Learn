import React from "react";
import Button from "../atoms/button";
import { X } from "lucide-react";

const FeaturedWorkOverlay = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(1,1,1,.4)] backdrop-blur-[20px] flex items-center justify-center z-100">
      <div className="bg-[rgb(255,255,255)] backdrop-blur-[20px] p-3">
        featured work
        <Button icon={<X strokeWidth="0.9"/>} onClick={onClose} />
      </div>
    </div>
  );
};

export default FeaturedWorkOverlay;
