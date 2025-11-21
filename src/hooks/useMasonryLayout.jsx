import { useCallback, useEffect, useRef, useState } from "react";

// calculates the position of each item in layout
export function useMasonryLayout(formattedData) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [containerHeight, setContainerHeight] = useState(0);

  const calculateLayout = useCallback(function (data) {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const gap = 7;
    const columnCount = window.innerWidth < 768 ? 1 : 3; // Responsive columns
    const columnWidth =
      (containerWidth - gap * (columnCount - 1)) / columnCount;
    const columnHeights = Array(columnCount).fill(0);
    const newPositions = [];

    data.forEach((item) => {
      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );

      // Calculate item height based on aspect ratio
      const itemHeight = columnWidth / item.aspectRatio;

      // Calculate position
      const position = {
        top: columnHeights[shortestColumnIndex],
        left: shortestColumnIndex * (columnWidth + gap),
        width: columnWidth,
        height: itemHeight,
      };

      newPositions.push(position);

      // Update column height (add gap for next item)
      columnHeights[shortestColumnIndex] += itemHeight + gap;
    });

    setPositions(newPositions);
    // Set container height to accommodate tallest column
    setContainerHeight(Math.max(...columnHeights));
  });
  
  // keep the layout updated, recalculate when screen changes
  useEffect(() => {
    calculateLayout(formattedData);

    const handleResize = () => {
      calculateLayout(formattedData);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [formattedData]);

  return {containerRef, positions, containerHeight}
}
