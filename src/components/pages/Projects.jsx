import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MasonryLayout from "../organism/MasonryLayout";
import ProjectListTable from "../organism/ProjectsListTable";
import AboutUs from "./AboutUs";
import NewsGrid from "../organism/NewsGrid";
import { useProjectFilter } from "../../hooks/useProjectFilter";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";

import danceVideo from "../../assets/dance02.mp4";
import danceVideo02 from "../../assets/dance03.mp4";
import { ProjectFilters } from "../organism/ProjectFilters";
import Button from "../atoms/button";
import { Grip, List } from "lucide-react";

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

// projects api
export const projects = [
  {
    id: 1,
    title: "Project Aurora",
    category: "Retreats",
    location: "Nepal Himalayas",
    status: "Ongoing",
    year: "2024",
    image: slide1,
    video: danceVideo,
  },
  {
    id: 2,
    title: "Nebula CMS",
    category: "Online",
    location: "Haridwar india",
    status: "Completed",
    year: "2023",
    image: slide2,
    video: danceVideo02,
  },
  {
    id: 3,
    title: "Project Aurora",
    category: "Trainings",
    location: "Vrindavan india",
    status: "Completed",
    year: "2024",
    image: slide3,
    video: danceVideo,
  },
  {
    id: 4,
    title: "Nebula CMS",
    category: "Online",
    location: "Vrindavan india",
    status: "Ongoing",
    year: "2023",
    image: slide11,
    video: danceVideo02,
  },
  {
    id: 5,
    title: "Project Aurora",
    category: "Trainings",
    location: "Nepal Himalayas",
    status: "Ongoing",
    year: "2024",
    image: slide1,
    video: danceVideo,
  },
  {
    id: 6,
    title: "Nebula CMS",
    category: "Retreats",
    location: "Nepal Himalayas",
    status: "Completed",
    year: "2023",
    image: slide3,
    video: danceVideo,
  },
  {
    id: 7,
    title: "Project Aurora",
    category: "Trainings",
    location: "Vrindavan india",
    status: "Completed",
    year: "2024",
    image: slide1,
    video: danceVideo02,
  },
  {
    id: 8,
    title: "Nebula CMS",
    category: "Retreats",
    location: "Haridwar india",
    status: "Ongoing",
    year: "2023",
    image: slide1,
    video: danceVideo,
  },
  {
    id: 9,
    title: "Project Aurora",
    category: "Retreats",
    location: "Vrindavan india",
    status: "Ongoing",

    year: "2024",
    image: slide2,
    video: danceVideo,
  },
  {
    id: 10,
    title: "Nebula CMS",
    category: "Retreats",
    location: "Nepal Himalayas",
    status: "Completed",
    year: "2023",
    image: slide3,
    video: danceVideo02,
  },
  {
    id: 11,
    title: "Project Aurora",
    category: "Retreats",
    location: "Vrindavan india",
    status: "Ongoing",
    year: "2024",
    image: slide1,
    video: danceVideo,
  },
  {
    id: 12,
    title: "Nebula CMS",
    category: "Retreats",
    location: "Haridwar india",
    status: "Ongoing",
    year: "2023",
    image: slide11,
    video: danceVideo02,
  },
  {
    id: 13,
    title: "Nebula CMS",
    category: "Online",
    location: "Haridwar india",
    status: "Ongoing",
    year: "2023",
    image: slide2,
    video: danceVideo,
  },
  {
    id: 14,
    title: "Nebula CMS",
    category: "Online",
    location: "Vrindavan india",
    status: "Completed",
    year: "2023",
    image: slide11,
    video: danceVideo,
  },
  {
    id: 15,
    title: "Nebula CMS",
    category: "Online",
    location: "Haridwar india",
    status: "Ongoing",
    year: "2023",
    image: slide2,
    video: danceVideo,
  },
  {
    id: 16,
    title: "Nebula CMS",
    category: "Trainings",
    location: "Haridwar india",
    status: "Completed",
    year: "2023",
    image: slide1,
    video: danceVideo02,
  },
];

// i should make this filters dynamically from the dataset.
// const filter = ["LOCATION", "STATUS", "YEAR"];
const filters = [
  {
    id: "location",
    label: "LOCATION",
    options: [
      { value: "Nepal Himalayas", label: "Nepal Himalayas" },
      { value: "Haridwar india", label: "Haridwar" },
    ],
  },
  {
    id: "status",
    label: "STATUS",
    options: [
      { value: "Ongoing", label: "Ongoing" },
      { value: "Completed", label: "Completed" },
    ],
  },
  {
    id: "year",
    label: "YEAR",
    options: [
      { value: "2022", label: "2022" },
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
    ],
  },
];

const Projects = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const querySelectedCategory = params.get("category");
  const [selectedCateogry, setSelectedCategory] = useState(
    querySelectedCategory,
  );

  // if selected category changes we need to fetch the data of that category.
  // need to manage this too.

  const { filteredProjects, activeFilters, toggleFilter } =
    useProjectFilter(projects);

  const [listView, setListView] = useState(false);

  return (
    <div className="w-full px-3 pt-[49px] pb-3">
      <ProjectFilters
        activeFilters={activeFilters}
        onToggleFilter={toggleFilter}
      >
        <ProjectFilters.Tabs
          options={["All", "Online", "Retreats", "Trainings"]}
          selected={selectedCateogry}
          setTab={setSelectedCategory}
        />
        <div className="flex gap-5">
          {filters.map((item) => (
            <ProjectFilters.ButtonWithDropdown
              key={item.id}
              label={item.label}
              id={item.id}
              options={item.options}
            />
          ))}
          <Button
            icon={listView ? <Grip size={20} /> : <List size={20} />}
            onClick={() => setListView(!listView)}
          />
        </div>
      </ProjectFilters>
      <div className="m-2 p-2 mt-9">
        {listView ? (
          <ProjectListTable data={filteredProjects} />
        ) : (
          <MasonryLayout data={filteredProjects} />
        )}
        {<AboutUs />}
      </div>
      <div className="m-2 p-11">
        <p className="text-4xl font-inter-light md:text-5xl">PNL News</p>
        <NewsGrid>
          <NewsGrid.Cards data={news} />
          <NewsGrid.Controls data={news} />
        </NewsGrid>
      </div>
    </div>
  );
};

export default Projects;
