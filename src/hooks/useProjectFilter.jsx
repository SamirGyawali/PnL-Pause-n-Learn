import { useMemo, useState } from "react";

export const useProjectFilter = (initialProjects) => {
  const [activeFilters, setActiveFilters] = useState({
    location: [],
    status: [],
    year: [],
  });

  const toggleFilter = (type, value) => {
    setActiveFilters((prev) => {
      const categoryValues = prev[type];

      const newValues = categoryValues.includes(value)
        ? categoryValues.filter((item) => item !== value) // Remove
        : [...categoryValues, value]; // Add

      return {
        ...prev,
        [type]: newValues,
      };
    });
  };

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      return Object.entries(activeFilters).every(([type, selectedOptions]) => {
        // 1. Safety check: Ensure selectedOptions is always an array
        const options = selectedOptions ?? [];

        // 2. If no options selected for this category, let the project through
        if (options.length === 0) return true;

        // 3. Match project data to filter.
        // Note: Make sure project[type] exists (e.g., project.location)
        const projectValue = project[type];

        return projectValue && options.includes(projectValue);
      });
    });
  }, [activeFilters, initialProjects]);

  return { activeFilters, filteredProjects, toggleFilter };
};
