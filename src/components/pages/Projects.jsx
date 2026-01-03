import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../atoms/button";
import { Grip, List, Plus } from "lucide-react";
import MasonryLayout from "../organism/MasonryLayout";
import ProjectListTable from "../organism/ProjectsListTable";
import AboutUs from "./AboutUs";
import NewsGrid from "../organism/NewsGrid";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";

// projects api
export const projects = [
  {
    id: 1,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
    image: slide1,
  },
  {
    id: 2,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide2,
  },
  {
    id: 3,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
    image: slide3,
  },
  {
    id: 4,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide11,
  },
  {
    id: 5,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
    image: slide1,
  },
  {
    id: 6,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide3,
  },
  {
    id: 7,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
    image: slide1,
  },
  {
    id: 8,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide1,
  },
  {
    id: 9,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
    image: slide2,
  },
  {
    id: 10,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide3,
  },
  {
    id: 11,
    title: "Project Aurora",
    category: "Branding",
    client: "Cosmos Media",
    year: "2024",
    image: slide1,
  },
  {
    id: 12,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide11,
  },
  {
    id: 13,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide2,
  },
  {
    id: 14,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide11,
  },
  {
    id: 15,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide2,
  },
  {
    id: 16,
    title: "Nebula CMS",
    category: "Web App",
    client: "Nebula Inc",
    year: "2023",
    image: slide1,
  },
];

// fetch the news data over here
const news = [
  {
    id: 1,
    title: "The Celestial dance",
    meta: "2022 • Retreat at Himalayas",
    image: slide1,
  },
  {
    id: 2,
    title: "The Celestial dance",
    meta: "2023 • Dance",
    image: slide2,
  },
  {
    id: 3,
    title: "The Celestial dance",
    meta: "2024 • Fair Education",
    image: slide3,
  },
  {
    id: 4,
    title: "The Celestial dance",
    meta: "PROJECT • Pause",
    image: slide11,
  },
  {
    id: 5,
    title: "Harbin Opera House",
    meta: "PROJECT • Unlearn",
    image: slide11,
  },
  {
    id: 6,
    title: "The Celestial dance",
    meta: "PROJECT • one",
    image: slide3,
  },
  {
    id: 7,
    title: "Harbin Opera House",
    meta: "PROJECT • two",
    image: slide1,
  },
  {
    id: 8,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • three",
    image: slide1,
  },
  {
    id: 9,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • four",
    image: slide2,
  },
  {
    id: 10,
    title: "The Celestial dance",
    meta: "PROJECT • one",
    image: slide3,
  },
  {
    id: 11,
    title: "Harbin Opera House",
    meta: "PROJECT • two",
    image: slide1,
  },
  {
    id: 12,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • three",
    image: slide1,
  },
  {
    id: 13,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • four",
    image: slide2,
  },
];

const Projects = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");

  const [listView, setListView] = useState(false);
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
        {listView ? (
          <ProjectListTable data={projects} />
        ) : (
          <MasonryLayout data={projects} />
        )}
        {<AboutUs />}
      </div>
      <div className="m-2 p-11">
        {/* if there is other list things show them in the grid layout. */}
        <p className="text-4xl font-inter-light md:text-5xl">PNL News</p>
        <NewsGrid>
          <NewsGrid.Cards data={news}/>
          <NewsGrid.Controls data={news}/>
        </NewsGrid>
      </div>
    </div>
  );
};

export default Projects;
