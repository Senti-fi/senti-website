import { cn } from "@/lib/utils";

/**
 * Reusable hero backdrop: a thin line grid with a soft radial gradient.
 * Defaults are tuned to Senti's palette and canvas color.
 */
export function GradientBlurBg({
  className,
  gridColor = "rgba(15, 23, 42, 0.06)",
  gridSize = "96px 64px",
  radialColor = "#C5DCFF",
  radialSize = "800px",
  radialPosition = "100% 200px",
}: {
  className?: string;
  gridColor?: string;
  gridSize?: string;
  radialColor?: string;
  radialSize?: string;
  radialPosition?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${gridColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${gridColor} 1px, transparent 1px),
          radial-gradient(circle ${radialSize} at ${radialPosition}, ${radialColor}, transparent)
        `,
        backgroundSize: `${gridSize}, ${gridSize}, 100% 100%`,
      }}
    />
  );
}
