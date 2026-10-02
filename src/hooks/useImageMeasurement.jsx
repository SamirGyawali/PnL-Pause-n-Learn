import React, { useEffect, useState } from "react";

// calaulates the aspect ratio of images present in the data
export function useImageMeasurement(data) {
  const [measured, setMeasured] = useState([]);

  function DataFormatter(items) {
    return Promise.all(
      items.map(
        (item, index) =>
          new Promise((resolve) => {
            const src = item.images?.[0];
            if (!src) {
              // if image list is empty
              resolve({ ...item, aspectRatio: 1 });
              return;
            }
            const img = new Image();
            img.onload = () => resolve({ ...item, aspectRatio: img.width / img.height });
            img.onerror = () => resolve({ ...item, aspectRatio: 1 });
            img.src = src
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
