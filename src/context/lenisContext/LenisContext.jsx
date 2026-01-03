import { createContext, useContext } from "react";

export const LenisContext = createContext(null);

export const useLenis = () => {
  const ctx = useContext(LenisContext);

  if (!ctx) {
    throw new Error("useLenis must be inside lenisProvider");
  }
  return ctx;
};
