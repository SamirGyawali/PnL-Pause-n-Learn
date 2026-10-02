import { cn } from "../../lib/utils";

export const ProgressiveBlur = ({ className }) => {
  // Steps of blur intensity (px) and their corresponding mask coverage ranges
  // need to adjust accordingly
  const blurSteps = [
    {
      blur: "20px",
      mask: "linear-gradient(to bottom, #000 0%, #000 20%, transparent 90%)",
    },
    {
      blur: "9px",
      mask: "linear-gradient(to bottom, transparent 5%, #000 15%, transparent 40%)",
    },
    {
      blur: "3px",
      mask: "linear-gradient(to bottom, transparent 25%, #000 38%, transparent 60%)",
    },
    {
      blur: "2px",
      mask: "linear-gradient(to bottom, transparent 38%, #000 50%, transparent 68%)",
    },
    {
      blur: "1px",
      mask: "linear-gradient(to bottom, transparent 50%, #000 62%, transparent 75%)",
    },
  ];
  return (
    <div className={cn("pointer-events-none absolute inset-0 z-0", className)}>
      {blurSteps.map((step, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${step.blur})`,
            WebkitBackdropFilter: `blur(${step.blur})`,
            maskImage: step.mask,
            WebkitMaskImage: step.mask,
          }}
        />
      ))}
    </div>
  );
};
