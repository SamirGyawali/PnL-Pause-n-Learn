import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../atoms/button";
import { Grip, List, Plus } from "lucide-react";
import MasonryLayout from "../organism/MasonryLayout";
import ProjectListTable from "../organism/ProjectsListTable";

const Projects = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");

  const [listView, setListView] = useState(false);
  return (
    <div className="w-full px-3 pt-[49px] pb-3">
      <div className="m-2 p-2 flex flex-col gap-5 mt-6">
        <div className="flex gap-5">
          <span className="text-4xl font-inter-light text-neutral-400 hover:cursor-pointer hover:text-neutral-900 transition-colors duration-300 ease-in-out">
            All
          </span>
          <span className="text-4xl font-inter-light text-neutral-400 hover:cursor-pointer hover:text-neutral-900 transition-colors duration-300 ease-in-out">
            Retreats
          </span>
          <span className="text-4xl font-inter-light text-neutral-400 hover:cursor-pointer hover:text-neutral-900 transition-colors duration-300 ease-in-out">
            Online
          </span>
          <span className="text-4xl font-inter-light text-neutral-400 hover:text-neutral-900 hover:cursor-pointer transition-colors duration-300 ease-in-out">
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
        <span>{category}</span>
        <br />
        {listView ? <ProjectListTable /> : <MasonryLayout />}
      </div>
    </div>
  );
};

export default Projects;
