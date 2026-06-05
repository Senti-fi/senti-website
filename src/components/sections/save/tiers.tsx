"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
  useReducedMotion,
} from "motion/react";
import { ArrowRight, Unlock, Target, Lock, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const MAX_APY = 12;

type Tier = {
  short: string;
  name: string;
  icon: LucideIcon;
  apy: number;
  headline: string;
  body: string;
  yieldNote: string;
  perfectFor: string;
  cta: string;
  href: string;
  ring: string;
  accent: string;
  chip: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    short: "Flexible",
    name: "Flexible Savings",
    icon: Unlock,
    apy: 4,
    headline: "Save without locking yourself out.",
    body: "For when you want your money to earn, but you also want to know you can reach it. Set a savings period. Add to it whenever. Withdraw on scheduled dates that work for you.",
    yieldNote:
      "Earn up to 4% APY while your money sits. More than any regular account. Less than you’d earn by committing longer.",
    perfectFor:
      "rainy-day funds, short-term planning, anyone who wants their money active without commitment.",
    cta: "Open a Flexible Savings",
    href: "/get-started",
    ring: "#007BFF",
    accent: "text-senti-blue",
    chip: "bg-senti-blue/10",
  },
  {
    short: "TargetPlan",
    name: "TargetPlan",
    icon: Target,
    apy: 7,
    headline: "Save toward something you actually want.",
    body: "Whether it’s a home, a wedding, an emergency fund, or the trip you’ve been promising yourself for years. Set the goal, set the timeline, and let Senti help you get there.",
    yieldNote:
      "Your money stays locked toward the target until you reach it. Each deposit moves you closer. Watch progress fill, milestone by milestone, and earn up to 7% APY while you save. You’ve committed to the finish line. Your yield reflects it.",
    perfectFor:
      "home, travel, weddings, school fees, emergency funds, the thing you keep putting off.",
    cta: "Start a TargetPlan",
    href: "/get-started",
    ring: "#0891b2",
    accent: "text-cyan-600",
    chip: "bg-cyan-500/12",
  },
  {
    short: "Strict Vault",
    name: "Strict Vault",
    icon: Lock,
    apy: 12,
    headline: "Save like you mean it.",
    body: "For when you need the system to be stronger than your weakest moment. Lock your money away for the long haul. No withdrawals, no early exits, no second-guessing.",
    yieldNote:
      "Earn up to 12% APY, the highest yield Senti offers. When the term ends, your savings return automatically to your spending account. The version of you that started will thank the version of you that finishes.",
    perfectFor:
      "long-term goals, building wealth quietly, anyone who’s tired of their own willpower.",
    cta: "Open a Strict Vault",
    href: "/get-started",
    ring: "#10b981",
    accent: "text-emerald-600",
    chip: "bg-emerald-500/12",
    featured: true,
  },
];

export function SaveTiers() {
  const [active, setActive] = useState(0);
  const tier = TIERS[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(TIERS.length - 1, a + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    }
  };

  return (
    <section id="tiers" className="relative scroll-mt-24 overflow-hidden bg-surface-soft">
      {/* Ambient wash that shifts with the active tier */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        animate={{
          background: `radial-gradient(closest-side, ${tier.ring}22, transparent 70%)`,
        }}
        transition={{ duration: 0.8, ease: EASE }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
        {/* Relocated narrative */}
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Three ways to save
            </span>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              Save the way that fits your life.
            </h2>
            <p className="mt-5 text-[18px] leading-[1.6] text-ink-muted">
              Every person saves differently. Some want flexibility. Some want a
              goal to chase. Some need to lock themselves out until the right
              moment. Senti lets you choose how, and earn the whole way through.
            </p>
          </div>
        </Reveal>

        {/* Interactive selector */}
        <Reveal delay={0.05}>
          <div
            role="radiogroup"
            aria-label="Choose a savings plan"
            onKeyDown={onKeyDown}
            className="mt-12 inline-flex max-w-full gap-1 rounded-full border border-line bg-surface p-1 shadow-[0_1px_2px_rgba(10,22,40,0.05)] lg:mt-16"
          >
            {TIERS.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.name}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(i)}
                  className="relative h-11 rounded-full px-4 text-[13px] font-medium outline-offset-2 transition-colors sm:px-6 sm:text-[14px]"
                >
                  {isActive && (
                    <motion.span
                      layoutId="plan-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={cn(
                      "relative z-10 whitespace-nowrap transition-colors",
                      isActive ? "text-surface" : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {t.short}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Stage: gauge (left) + morphing copy (right) */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1}>
            <YieldGauge tier={tier} />
          </Reveal>

          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em]",
                    tier.chip,
                    tier.accent,
                  )}
                >
                  <tier.icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                  {tier.name}
                </span>

                <h3 className="mt-5 font-serif text-[clamp(1.75rem,3vw,2.4rem)] font-medium leading-[1.1] tracking-tight text-ink">
                  {tier.headline}
                </h3>
                <p className="mt-4 text-[17px] leading-[1.6] text-ink-muted">
                  {tier.body}
                </p>

                <div className="mt-5 rounded-2xl border border-line bg-surface p-5 text-[15px] leading-[1.6] text-ink-soft">
                  {tier.yieldNote}
                </div>

                <p className="mt-5 text-[14px] leading-[1.6] text-ink-faint">
                  <span className="font-medium text-ink-soft">Perfect for:</span>{" "}
                  {tier.perfectFor}
                </p>

                <Link
                  href={tier.href}
                  className="group mt-7 inline-flex h-12 items-center gap-2 rounded-button bg-senti-blue px-6 text-[15px] font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(0,123,255,0.55)] transition-colors hover:bg-senti-blue-hover"
                >
                  {tier.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function YieldGauge({ tier }: { tier: Tier }) {
  const reduce = useReducedMotion();
  const R = 110;
  const C = 2 * Math.PI * R;
  const frac = tier.apy / MAX_APY;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center">
      <svg viewBox="0 0 260 260" className="h-full w-full">
        <g transform="rotate(-90 130 130)">
          <circle
            cx={130}
            cy={130}
            r={R}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth={14}
          />
          <motion.circle
            cx={130}
            cy={130}
            r={R}
            fill="none"
            stroke={tier.ring}
            strokeWidth={14}
            strokeLinecap="round"
            strokeDasharray={C}
            initial={false}
            animate={{
              strokeDashoffset: C * (1 - frac),
              stroke: tier.ring,
            }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.8, ease: EASE }
            }
          />
        </g>
      </svg>

      {/* Center readout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
          Up to
        </span>
        <div className="flex items-baseline">
          <Tally
            value={tier.apy}
            className="font-serif text-[64px] font-medium leading-none tracking-tight text-ink tabular-nums"
          />
          <span className="font-serif text-[32px] font-medium leading-none text-ink">
            %
          </span>
        </div>
        <span className="mt-1 text-[13px] font-medium uppercase tracking-[0.16em] text-ink-faint">
          APY
        </span>
      </div>
    </div>
  );
}

/** Springs the displayed integer from its current value to the new one. */
function Tally({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(value);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = String(value);
      return;
    }
    const controls = animate(mv, value, { duration: 0.6, ease: EASE });
    const unsub = mv.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, reduce, mv]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
