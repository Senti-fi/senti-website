import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely.
 *
 * - `clsx` handles conditional class composition (booleans, arrays, objects).
 * - `tailwind-merge` resolves conflicting Tailwind utilities so the last one wins
 *   (e.g. `cn("p-2", "p-4")` → `"p-4"`).
 *
 * Use this in every component instead of string concatenation.
 *
 * @example
 * <button className={cn("px-4 py-2", isActive && "bg-primary", className)} />
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
