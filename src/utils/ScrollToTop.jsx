import React, { useEffect } from "react";
import { useLenis } from "../context/lenisContext/LenisContext";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const lenisRef = useLenis();

  useEffect(() => {
    lenisRef.current.scrollTo("start");
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
