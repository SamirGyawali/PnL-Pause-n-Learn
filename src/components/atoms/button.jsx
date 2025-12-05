import React from "react";

const Button = ({ label, icon, onClick, className }) => {
  return (
    <button
      className={`px-2.5 py-1.5 bg-neutral-400/20 rounded-lg flex gap-2 items-center hover:cursor-pointer hover:bg-neutral-400/30 w-fit group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {label ? (
        <span className="relative overflow-hidden inline-block">
          <span className="text-[11px] sm:text-[13px] font-ibm-mono-regular block translate-y-0 group-hover:-translate-y-full transition duration-500 ease-in-out">
            {label}
          </span>
          <span className="text-[11px] sm:text-[13px] font-ibm-mono-regular absolute left-0 top-0 translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
            {label}
          </span>
        </span>
      ) : null}
      {icon ? <span className="-translate-y-[1.5px]">{icon}</span> : null}
    </button>
  );
};

export default Button;
