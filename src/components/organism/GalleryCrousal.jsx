import React from "react";
import Button from "../atoms/button";
import { X } from "lucide-react";

const GalleryCrousal = ({ onClose }) => {
  // revieve the function def, and call it at onClick event
  return (
    <div className="fixed inset-0 bg-[rgba(1,1,1,0.32)] backdrop-blur-[20px] w-screen md:p-2 flex items-end md:items-center justify-center z-100">
      <div className="w-full h-[95dvh] max-w-[160vh] bg-[rgb(255,255,255)] rounded-2xl p-3 backdrop-blur-[20px] md:h-[92%]">
        <Button icon={<X />} onClick={onClose} />
        crousal this will be the image crousal area
      </div>
    </div>
  );
};

export default GalleryCrousal;
