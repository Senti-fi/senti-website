"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
  type Variants,
} from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Senti motion standard.
 * Calm, never bouncy. Reveals on scroll, once. Smooth expo-out easing.
 */
const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 0.7;
const STAGGER = 0.07;
const Y_OFFSET = 16;
const VIEW_AMOUNT = 0.25;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: Y_OFFSET },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  y = Y_OFFSET,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: VIEW_AMOUNT }}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: DURATION, ease: EASE, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = STAGGER,
  delayChildren = 0,
  amount = VIEW_AMOUNT,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/**
 * Counts a number up to its target when scrolled into view.
 * Uses ease-out so the value settles, not springs.
 */
export function AnimatedNumber({
  value,
  format,
  duration = 1.4,
  className,
}: {
  value: number;
  format?: (n: number) => string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration, ease: EASE });
    const unsubscribe = mv.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format
          ? format(latest)
          : Math.round(latest).toString();
      }
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, value, duration, format, mv]);

  return (
    <span ref={ref} className={className}>
      {format ? format(0) : "0"}
    </span>
  );
}

/**
 * Subtle parallax float — the element drifts vertically as you scroll past it.
 * Range: ±range px. Kept small (default 24) so it reads as depth, not motion.
 */
export function ParallaxFloat({
  children,
  range = 24,
  className,
}: {
  children: React.ReactNode;
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/** Hover-lift utility for cards. Subtle: 2px translate + soft shadow swap. */
export const hoverLift = {
  whileHover: { y: -2, transition: { duration: 0.25, ease: EASE } },
  transition: { duration: 0.25, ease: EASE },
} as const;
