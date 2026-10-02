import { createContext, useContext, useState } from "react";
import { SliderButton } from "../atoms/button";
import { EyeClosed, Search } from "lucide-react";
import {
  motion,
  AnimatePresence,
  backOut,
  backIn,
  easeOut,
  easeInOut,
  backInOut,
  easeIn,
} from "motion/react";

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
  const { isActive, setIsActive } = useContext(SearchMenuContext);
  const menuVariant = {
    open: {
      opacity: 1,
      width: 580, // need to make this responsive
      height: "90vh",
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
        <motion.div
          className="fixed w-screen h-screen inset-0 z-40 bg-[rgba(1,1,1,0.06)]"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(5px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          onClick={() => setIsActive(false)}
        >
          <motion.div
            key="menu"
            className="menu fixed top-13 right-7 bg-[#f8f8f8] rounded-xl shadow-2xl shadow-black/30 ring-4 ring-black/10 z-50 p-4"
            variants={menuVariant}
            animate={isActive ? "open" : "closed"}
            initial="closed"
            exit="closed"
            transition={{ duration: 0.5, ease: easeIn }}
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
