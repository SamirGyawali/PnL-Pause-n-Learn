import React, { useEffect, useState } from "react";

// calaulates the aspect ratio of images present in the data
export function useImageMeasurement(data) {
  const [measured, setMeasured] = useState([]);

  function DataFormatter(items) {
    return Promise.all(
      items.map(
        (item, index) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () =>
              resolve({ ...item, aspectRatio: img.width / img.height });
            img.src = item.image;
          }),
      ),
    );
  }

  useEffect(() => {
    (async function () {
      if (!data) return;
      const result = await DataFormatter(data);
      setMeasured(result);
    })();
  }, [data]);

  return measured;
}
