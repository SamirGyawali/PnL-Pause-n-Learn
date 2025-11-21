import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import FeaturedWorks from "./components/pages/FeaturedWorks";
import FounderStatement from "./components/molecules/FounderStatement";


function App() {
  return (
    <div className="min-h-screen">
    <HomePage />
    <FeaturedWorks />
    <FounderStatement />
    </div>
  );
}

export default App;
