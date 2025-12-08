import React from "react";
import HomePage from "../pages/HomePage";
import FeaturedWorks from "../pages/FeaturedWorks";
import FounderStatement from "../molecules/FounderStatement";
import OurWorks from "../molecules/OurWorks";
import AboutUs from "../pages/AboutUs";

const LandingPage = () => {
  return (
    <>
      <HomePage />
      <FeaturedWorks />
      <FounderStatement />
      <OurWorks />
      <AboutUs />
    </>
  );
};

export default LandingPage;
