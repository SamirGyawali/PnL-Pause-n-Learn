import Lenis from "lenis";
import { useRef } from "react";
import { LenisContext } from "./LenisContext";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  const lenis = new Lenis();
  lenisRef.current = lenis;

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}
