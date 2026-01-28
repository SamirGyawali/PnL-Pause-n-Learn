import { createContext, useContext, useState } from "react";
import Button from "../atoms/button";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FilterContext = createContext();

export const ProjectFilters = ({ children, activeFilters, onToggleFilter }) => {
  // internal state track which dropdown is open
  const [openGroup, setOpenGroup] = useState(null);

  const toggleGroup = (groupName) => {
    setOpenGroup(openGroup === groupName ? null : groupName);
  };

  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <FilterContext.Provider
      value={{
        activeFilters,
        onToggleFilter,
        openGroup,
        toggleGroup,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <div className="m-2 p-2 flex flex-col gap-5 mt-6">{children}</div>
    </FilterContext.Provider>
  );
};

ProjectFilters.Tabs = ({ options, selected, setTab }) => {
  return (
    <div className="flex gap-5">
      {options.map((item, index) => (
        <span
          key={`filters-${index}`}
          className={`text-4xl font-inter-light text-neutral-400 hover:text-neutral-900 hover:cursor-pointer transition-colors duration-300 ease-in-out ${
            selected === item ? "text-neutral-900" : null
          }`}
          onClick={() => setTab(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

ProjectFilters.ButtonWithDropdown = ({ label, id, options }) => {
  const { activeFilters, onToggleFilter, openGroup, toggleGroup } =
    useContext(FilterContext);
  const isOpen = openGroup === id;

  return (
    <div className="relative">
      <Button
        label={label}
        icon={
          <Plus
            className={`transition-transform ${isOpen ? "rotate-45" : ""}`}
            size={20}
          />
        }
        onClick={() => toggleGroup(id)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-10 left-0 min-w-[200px] rounded-xl p-3 bg-black/45 backdrop-blur-md z-50 flex flex-col gap-2"
          >
            {options.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center cursor-pointer text-white"
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={activeFilters[id]?.includes(opt.value)}
                  onChange={() => onToggleFilter(id, opt.value)}
                />
                <span
                  className={`text-sm uppercase ${activeFilters[id]?.includes(opt.value) ? "font-bold text-white" : "text-neutral-100"}`}
                >
                  {opt.label}
                </span>
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
