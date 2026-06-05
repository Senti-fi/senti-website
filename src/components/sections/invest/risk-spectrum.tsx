"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const MARKERS = [
  { name: "USDC Yield Vault", apy: "13.5% APY", pos: 8, color: "#10b981" },
  { name: "U.S. Treasury Bill Fund", apy: "8.4% APY", pos: 28, color: "#14b8a6" },
  { name: "Global Balanced Portfolio", apy: "11.2% APY", pos: 50, color: "#007BFF" },
  { name: "S&P 500 Tokenized Fund", apy: "13.6% APY", pos: 72, color: "#f97316" },
  { name: "AI & Tech Growth Fund", apy: "18.7% APY", pos: 92, color: "#ef4444" },
];

export function RiskSpectrum() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-surface-soft">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-ink">
              Find investments that fit your risk comfort.
            </h2>
            <p className="mt-3 text-[16px] text-ink-muted">
              From low-risk preservation to high-growth potential.
            </p>
          </div>
        </Reveal>

        {/* Desktop spectrum */}
        <Reveal delay={0.05}>
          <div className="mt-16 hidden md:block">
            <div className="flex justify-between text-[12px] font-semibold uppercase tracking-[0.14em]">
              <span className="text-emerald-600">Low risk</span>
              <span className="text-senti-blue">Medium risk</span>
              <span className="text-red-500">High risk</span>
            </div>

            <div className="relative mt-4 px-2">
              <div
                className="h-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #10b981 0%, #14b8a6 25%, #007BFF 50%, #f97316 78%, #ef4444 100%)",
                }}
              />
              {MARKERS.map((m, i) => (
                <div
                  key={m.name}
                  className="absolute top-1 -translate-x-1/2"
                  style={{ left: `${m.pos}%` }}
                >
                  <motion.span
                    className="block h-4 w-4 rounded-full border-[3px] border-surface shadow-[0_2px_6px_rgba(10,22,40,0.25)]"
                    style={{ backgroundColor: m.color }}
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.2 + i * 0.1 }}
                  />
                  <div className="mt-3 w-32 -translate-x-1/2 pl-2 text-center">
                    <div className="text-[12px] font-semibold leading-tight text-ink">
                      {m.name}
                    </div>
                    <div className="mt-0.5 text-[12px] font-medium tabular-nums" style={{ color: m.color }}>
                      {m.apy}
                    </div>
                  </div>
                </div>
              ))}
              {/* spacer to reserve height for absolute labels */}
              <div className="h-20" />
            </div>
          </div>
        </Reveal>

        {/* Mobile list */}
        <div className="mt-12 space-y-3 md:hidden">
          {MARKERS.map((m) => (
            <div key={m.name} className="flex items-center justify-between border-b border-line pb-3">
              <span className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: m.color }} />
                <span className="text-[14px] font-medium text-ink">{m.name}</span>
              </span>
              <span className="text-[13px] font-medium tabular-nums" style={{ color: m.color }}>
                {m.apy}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
