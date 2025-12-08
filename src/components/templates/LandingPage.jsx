import React from "react";
import FeaturedWorks from "../pages/FeaturedWorks";
import FounderStatement from "../molecules/FounderStatement";
import OurWorks from "../molecules/OurWorks";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";

const LandingPage = () => {
  return (
    <>
      <Home />
      <FeaturedWorks />
      <FounderStatement />
      <OurWorks />
      <AboutUs />
    </>
  );
};

export default LandingPage;
