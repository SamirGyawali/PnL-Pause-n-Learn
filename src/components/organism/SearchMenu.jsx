import { createContext, useContext, useState } from "react";
import { SliderButton } from "../atoms/button";
import { EyeClosed, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SearchMenuContext = createContext();

export const SearchMenu = ({ children }) => {
  // states to share
  const [isActive, setIsActive] = useState(false);

  return (
    <SearchMenuContext.Provider value={{ isActive, setIsActive }}>
      <div>{children}</div>
    </SearchMenuContext.Provider>
  );
};

SearchMenu.TriggerButton = () => {
  const { isActive, setIsActive } = useContext(SearchMenuContext);

  return (
    <div className="relative z-50">
      <SliderButton
        upperLabel={<Search size={16} />}
        lowerLabel={<EyeClosed size={16} />}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
};

SearchMenu.Content = ({ children }) => {
  const { isActive } = useContext(SearchMenuContext);
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

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div className="fixed w-screen h-screen inset-0 z-40 bg-[rgba(1,1,1,0.37)] backdrop-blur-[20px]">
          <motion.div
            key="menu"
            className="menu fixed top-13 right-7 h-[650px] w-[480px] bg-[#f8f8f8] rounded-xl shadow-2xl shadow-black/30 ring-4 ring-black/10 z-50 p-4"
            variants={menuVariant}
            animate={isActive ? "open" : "closed"}
            initial="closed"
            exit="closed"
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

SearchMenu.Input = ({ ...props }) => (
  <input
    className="w-full p-3 text-5xl text-black font-inter-extralight placeholder:text-neutral-500 placeholder:text-5xl outline-none focus:border-white/50 placeholder:font-inter-extralight"
    {...props}
  />
);

SearchMenu.Suggestions = ({ suggestons }) => (
  <div className="flex gap-2 py-2">
    {suggestons.map((item) => (
      <span
        key={item}
        className="font-inter-regular text-lg text-neutral-400 cursor-pointer hover: hover:text-black"
      >
        {item}
      </span>
    ))}
  </div>
);

SearchMenu.SearchResults = ({ data }) => (
  <div className="mt-8">
    <h4 className="text-black text-lg mb-4 font-inter-light">Popular</h4>
    <div className="text-black bg-neutral-200/70 p-4 rounded-lg">
      <div>data 1</div>
      <div>data 2</div>
    </div>
  </div>
);
