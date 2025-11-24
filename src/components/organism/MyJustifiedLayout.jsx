import React, { useEffect, useRef, useState } from "react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";
import { useImageMeasurement } from "../../hooks/useImageMeasurement";
import JustifiedLayout from "justified-layout";
import { hover, motion } from "framer-motion";
import Button from "../atoms/button";
import { MoveRight } from "lucide-react";

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
    meta: "2023 • Retreat",
    image: slide2,
  },
  {
    id: 3,
    title: "Harbin Opera House",
    meta: "2024 • Fair Education",
    image: slide3,
  },
  {
    id: 4,
    title: "Harbin Opera House",
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
    title: "Harbin Opera House",
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
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • three",
    image: slide1,
  },
  {
    id: 9,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • four",
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
              <motion.div
                key={item.id}
                className="absolute rounded-xl overflow-hidden cursor-pointer"
                style={{
                  ...box,
                }}
                whileHover="hover"
              >
                <motion.img
                  src={item.image}
                  variants={{ hover: { scale: 1.03 } }}
                  className="w-full h-full object-cover block transition-transform duration-600 ease-out"
                />
                <div className="overlay absolute inset-0 p-2 flex justify-start items-end">
                  <motion.p
                    initial={{ opacity: 0, x: -15, y: 10 }}
                    variants={{ hover: { x: 0, y: 0, opacity: 1 } }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="text-white font-medium text-2xl text-left bg-black/30 backdrop-blur-[0.5rem] px-3 py-2 rounded-lg"
                  >
                    {item.meta}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
      </div>
      {/* when clicked fetch data, change state, and update the layout */}
      <div className="flex justify-center items-center mt-15 mb-15">
        <Button label="Load More" icon={<MoveRight strokeWidth={1.25} />} />
      </div>
    </>
  );
};

export default MyJustifiedLayout;
