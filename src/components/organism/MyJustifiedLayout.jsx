import React, { useEffect, useRef, useState } from "react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg"
import slide11 from "../../assets/slide11.jpg";
import { useImageMeasurement } from "../../hooks/useImageMeasurement";
import JustifiedLayout from "justified-layout";
import Button from "../atoms/button";
import { MoveRight } from "lucide-react";
import ImageCard from "../molecules/ImageCard";
import FeaturedWorkOverlay from "./FeaturedWorkOverlay";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "The Celestial dance",
    meta: "2022 • Retreat at Himalayas",
    image: slide1,
  },
  {
    id: 2,
    title: "The Celestial dance",
    meta: "2023 • Dance",
    image: slide2,
  },
  {
    id: 3,
    title: "The Celestial dance",
    meta: "2024 • Fair Education",
    image: slide3,
  },
  {
    id: 4,
    title: "The Celestial dance",
    meta: "PROJECT • Pause",
    image: slide11,
  },
  {
    id: 5,
    title: "Harbin Opera House",
    meta: "PROJECT • Unlearn",
    image: slide11,
  },
  {
    id: 6,
    title: "The Celestial dance",
    meta: "PROJECT • one",
    image: slide3,
  },
  {
    id: 7,
    title: "Harbin Opera House",
    meta: "PROJECT • two",
    image: slide1,
  },
  {
    id: 8,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • three",
    image: slide1,
  },
  {
    id: 9,
    title: "Shenzhen Bay Culture Dance",
    meta: "PROJECT • four",
    image: slide2,
  },
];

const MyJustifiedLayout = () => {

  const navigateTo = useNavigate();

  const measured = useImageMeasurement(items);

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      // entries = array of elements being watched in our case container ref only
      const width = entries[0].contentRect.width;
      setContainerWidth(width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const layout =
    containerWidth > 0 && measured.length > 0
      ? JustifiedLayout(
          measured.map((item) => item.aspectRatio),
          {
            containerWidth,
            targetRowHeight: 650,
            boxSpacing: 6,
          }
        )
      : null;

  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <>
      <div
        ref={containerRef}
        className="gallery w-full relative [overflow-anchor:none] pt-2"
        style={{
          // width: layout.containerWidth,
          height: layout?.containerHeight,
        }}
      >
        {layout &&
          measured.map((item, i) => {
            // gives the measurements for each item, top, left, right like this
            const boxStyle = layout.boxes[i];
            return (
              <ImageCard
                key={item.id}
                cardStyle={boxStyle}
                data={item}
                onClick={() => setSelectedWork(item)}
              />
            );
          })}
      </div>
      {/* when clicked fetch data, change state, and update the layout */}
      <div className="flex justify-center items-center mt-15 mb-15">
        <Button onClick={()=>navigateTo("projects")} label="All works" icon={<MoveRight strokeWidth={1.25} />} />
      </div>

      {selectedWork ? (
        <FeaturedWorkOverlay
          onClose={() => {
            setSelectedWork(null);
          }}
          selectedWork={selectedWork}
        />
      ) : null}
    </>
  );
};

export default MyJustifiedLayout;
