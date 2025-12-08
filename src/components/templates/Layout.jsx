import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../organism/Footer";
import Navbar from "../molecules/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
