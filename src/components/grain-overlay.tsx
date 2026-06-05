import { cn } from "@/lib/utils";

// Fractal-noise texture as an inline SVG data URI — no asset file needed.
const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Whisper-subtle grain that kills the flat-digital feel.
 * Multiply blend so it reads as fine texture on light surfaces.
 */
export function GrainOverlay({
  className,
  opacity = 0.045,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `url("${NOISE}")`,
        backgroundSize: "160px 160px",
        opacity,
        mixBlendMode: "multiply",
      }}
    />
  );
}
