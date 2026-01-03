import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/pages/Projects";
import Layout from "./components/templates/Layout";
import LandingPage from "./components/templates/LandingPage";
import EachArticle from "./components/pages/EachBlog";
import EachNews from "./components/pages/EachNews";
import ScrollToTop from "./utils/ScrollToTop";
import LenisProvider from "./context/lenisContext/LenisProvider";
import EachBlog from "./components/pages/EachBlog";

function App() {
  // useEffect(() => {
  //   // Initialize Lenis
  //   const lenis = new Lenis();

  //   // Use requestAnimationFrame to continuously update the scroll
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => lenis.destroy();
  // }, []);

  return (
    // lenis is initialized here. LenisProvider
    <LenisProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="article" element={<EachArticle />} />
            <Route path="blog/:id" element={<EachBlog />}/>
            <Route path="news/:id" element={<EachNews />} />
          </Route>
        </Routes>
      </Router>
    </LenisProvider>
  );
}

export default App;
