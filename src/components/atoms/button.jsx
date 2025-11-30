import React from "react";

const Button = ({ label, icon, onClick, className }) => {
  return (
    <button
      className={`px-2.5 py-1.5 bg-neutral-400/20 rounded-lg flex gap-2 items-center hover:cursor-pointer hover:bg-neutral-400/30 w-fit ${className}`}
      onClick={() => onClick}
    >
      {label ? (
        <span className="text-[11px] sm:text-[13px] font-ibm-mono-regular">{label}</span>
      ) : null}
      {icon ? <span className="-translate-y-[1.5px]">{icon}</span> : null}
    </button>
  );
};

export default Button;
