import { useImageMeasurement } from "../../hooks/useImageMeasurement";
import { useMasonryLayout } from "../../hooks/useMasonryLayout";
import ImageCard from "../molecules/ImageCard";
import { useState } from "react";
import FeaturedWorkOverlay from "./FeaturedWorkOverlay";

const MasonryLayout = ({ data }) => {
  const measured = useImageMeasurement(data);
  const { containerRef, positions, containerHeight } =
    useMasonryLayout(measured);

  // need to transport it somewhere, i don't think i can use it here
  // i'm thinking i'm polluting this component here
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

      {selectedWork ? (
        <FeaturedWorkOverlay
          onClose={() => {
            setSelectedWork(null);
          }}
          selectedWork={selectedWork}
        />
      ) : null}
    </div>
  );
};

export default MasonryLayout;
