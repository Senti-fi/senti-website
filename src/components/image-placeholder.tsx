import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Calm placeholder for an image asset that hasn't been sourced yet.
 * Swap the whole element for a <next/image> when the real photo exists.
 * `swapPath` documents where the asset should live.
 */
export function ImagePlaceholder({
  label,
  swapPath,
  className,
  rounded = true,
}: {
  label?: string;
  swapPath?: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-surface-muted",
        rounded && "rounded-2xl",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgb(15 23 42 / 0.025) 25%, transparent 25%, transparent 50%, rgb(15 23 42 / 0.025) 50%, rgb(15 23 42 / 0.025) 75%, transparent 75%, transparent)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center text-ink-faint">
        <ImageIcon className="h-7 w-7" strokeWidth={1.5} />
        {label && <span className="text-[12px] font-medium">{label}</span>}
        {swapPath && (
          <span className="font-mono text-[10px] text-ink-faint/70">{swapPath}</span>
        )}
      </div>
    </div>
  );
}
