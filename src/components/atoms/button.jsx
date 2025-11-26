import React from "react";

const Button = ({ label, icon, onClick }) => {
  return (
    <div
      className="px-2.5 py-1.5 bg-neutral-400/20 text-[10px] sm:text-[14px] rounded-lg flex gap-2 items-center hover:cursor-pointer hover:bg-neutral-400/30 font-mono w-fit"
      onClick={() => onClick}
    >
      {label ? <span>{label}</span> : null}
      {icon ? <span className="-translate-y-[1.5px]">{icon}</span> : null}
    </div>
  );
};

export default Button;
