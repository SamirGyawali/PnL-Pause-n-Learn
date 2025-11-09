import { useState } from "react";
import HomeView from "./components/pages/HomeView";
import HomePage from "./components/pages/HomePage";


function App() {
  return (
    <div className="min-h-screen">
    <HomePage />
    <HomeView />
    </div>
  );
}

export default App;
