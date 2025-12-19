import React from "react";
import FeaturedWorks from "../pages/FeaturedWorks";
import FounderStatement from "../molecules/FounderStatement";
import OurWorks from "../molecules/OurWorks";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import PnLTeams from "../pages/PnLTeams";

const LandingPage = () => {
  return (
    <>
      <Home />
      <FeaturedWorks />
      <FounderStatement />
      <OurWorks />
      <AboutUs />
      <PnLTeams />
    </>
  );
};

export default LandingPage;
