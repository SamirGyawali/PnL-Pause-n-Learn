import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import FeaturedWorks from "./components/pages/FeaturedWorks";
import FounderStatement from "./components/molecules/FounderStatement";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import OurWorks from "./components/molecules/OurWorks";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/organism/Footer";

function App() {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="min-h-screen">
      <HomePage />
      <FeaturedWorks />
      <FounderStatement />
      <OurWorks />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
