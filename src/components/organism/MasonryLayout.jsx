import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";
import { useImageMeasurement } from "../../hooks/useImageMeasurement";
import { useMasonryLayout } from "../../hooks/useMasonryLayout";
import ImageCard from "../molecules/ImageCard";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Breathing Cells at the Seoul Biennale",
    meta: "UPDATE • INSTALLATION",
    image: slide2,
  },
  {
    id: 2,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: slide1,
  },
  {
    id: 3,
    title: "Harbin Opera House",
    meta: "PROJECT • ARCHITECTURE",
    image: slide3,
  },
  {
    id: 4,
    title: "Harbin Opera House",
    meta: "PROJECT • ARCHITECTURE",
    image: slide11,
  },
  {
    id: 5,
    title: "Harbin Opera House",
    meta: "PROJECT • ARCHITECTURE",
    image: slide11,
  },
  {
    id: 6,
    title: "Harbin Opera House",
    meta: "PROJECT • ARCHITECTURE",
    image: slide3,
  },
  {
    id: 7,
    title: "Harbin Opera House",
    meta: "PROJECT • ARCHITECTURE",
    image: slide1,
  },
  {
    id: 8,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: slide1,
  },
  {
    id: 9,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: slide2,
  },
  {
    id: 10,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: slide1,
  },
  {
    id: 11,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: slide1,
  },
  {
    id: 12,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: slide1,
  },
];

const MasonryLayout = () => {
  const measured = useImageMeasurement(items);
  const { containerRef, positions, containerHeight } =
    useMasonryLayout(measured);

  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div
      ref={containerRef}
      className="masonry-container relative w-full"
      style={{ height: `${containerHeight}px` }}
    >
      {measured.map((item, i) => {
        const style = {
          width: positions[i]?.width,
          top: positions[i]?.top,
          left: positions[i]?.left,
          height: positions[i]?.height,
        };
        return (
          <ImageCard
            key={i}
            cardStyle={style}
            data={item}
            onClick={() => setSelectedWork(item)}
          />
        );
      })}
    </div>
  );
};

export default MasonryLayout;
