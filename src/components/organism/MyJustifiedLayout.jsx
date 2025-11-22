import React, { useEffect, useRef, useState } from "react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";
import { useImageMeasurement } from "../../hooks/useImageMeasurement";
import JustifiedLayout from "justified-layout";

const items = [
  {
    id: 1,
    title: "Breathing Cells at the Seoul Biennale",
    meta: "2022 • Retreat at Himalayas",
    image: slide1,
  },
  {
    id: 2,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: slide2,
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
];

const MyJustifiedLayout = () => {
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
            const box = layout.boxes[i];
            return (
              <div
                key={item.id}
                className="absolute rounded-xl overflow-hidden cursor-pointer"
                style={{
                  ...box,
                }}
              >
                <img
                  src={item.image}
                  className="w-full h-full object-cover block transition-transform duration-600 ease-out hover:scale-[1.03]"
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MyJustifiedLayout;
