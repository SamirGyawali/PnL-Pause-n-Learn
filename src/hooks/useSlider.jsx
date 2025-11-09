import { useEffect, useState } from "react";

export default function useSlider(slides, duration = 6000) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, duration);

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p < 100) {
          return p + 100 / (duration / 100);
        }
        return 100;
      });
    }, 100);

    return () => {
      clearInterval(slideTimer);
      clearInterval(progressTimer);
    };
  }, [active]);

  function goTo(index) {
    setActive(index);
    setProgress(0);
  }

  return {active, goTo, progress}
}
