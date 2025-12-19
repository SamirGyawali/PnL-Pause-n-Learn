import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../atoms/button";
import { Grip, List, Plus } from "lucide-react";
import MasonryLayout from "../organism/MasonryLayout";
import ProjectListTable from "../organism/ProjectsListTable";
import AboutUs from "./AboutUs";
import NewsGrid from "../organism/NewsGrid";

const Projects = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");

  const [listView, setListView] = useState(true);
  return (
    <div className="w-full px-3 pt-[49px] pb-3">
      <div className="m-2 p-2 flex flex-col gap-5 mt-6">
        <div className="flex gap-5">
          <span
            className={`text-4xl font-inter-light text-neutral-400 hover:cursor-pointer hover:text-neutral-900 transition-colors duration-300 ease-in-out ${
              category === "All" ? "text-neutral-900" : null
            }`}
          >
            All
          </span>
          <span
            className={`text-4xl font-inter-light text-neutral-400 hover:cursor-pointer hover:text-neutral-900 transition-colors duration-300 ease-in-out ${
              category === "Retreats" ? "text-neutral-900" : null
            }`}
          >
            Retreats
          </span>
          <span
            className={`text-4xl font-inter-light text-neutral-400 hover:cursor-pointer hover:text-neutral-900 transition-colors duration-300 ease-in-out ${
              category === "Online" ? "text-neutral-900" : null
            }`}
          >
            Online
          </span>
          <span
            className={`text-4xl font-inter-light text-neutral-400 hover:text-neutral-900 hover:cursor-pointer transition-colors duration-300 ease-in-out ${
              category === "Trainings" ? "text-neutral-900" : null
            }`}
          >
            Trainings
          </span>
        </div>
        <div className="flex gap-5">
          <Button label="LOCATION" icon={<Plus strokeWidth={1} size={20} />} />
          <Button label="STATUS" icon={<Plus strokeWidth={1} size={20} />} />
          <Button
            label="TYPOGRAPHY"
            icon={<Plus strokeWidth={1} size={20} />}
          />
          <Button
            onClick={() => setListView(!listView)}
            icon={
              listView ? (
                <Grip strokeWidth={2} size={18} />
              ) : (
                <List strokeWidth={2} size={18} />
              )
            }
          />
        </div>
      </div>
      <div className="m-2 p-2 mt-9">
        {listView ? <ProjectListTable /> : <MasonryLayout />}
        {<AboutUs />}
      </div>
      <div className="m-2 p-11">
        {/* if there is other list things show them in the grid layout. */}
        <p className="text-4xl font-inter-light md:text-5xl">PNL News</p>
        <NewsGrid />
      </div>
    </div>
  );
};

export default Projects;
