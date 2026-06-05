"use client";

import { motion } from "motion/react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { GrainOverlay } from "@/components/grain-overlay";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface via-surface-soft to-surface-soft">
      {/* Living ambient auras — slow drift, very low opacity */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-8 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, #007BFF 15%, transparent), transparent 70%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -28, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-36 bottom-0 h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, #00D9FF 13%, transparent), transparent 70%)",
        }}
        animate={{ x: [0, -34, 0], y: [0, 26, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      {/* Grain texture */}
      <GrainOverlay />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-32">
        <Stagger className="lg:col-span-7">
          <StaggerItem>
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              The problem
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              DeFi should not feel complicated.
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-ink-muted">
              Senti brings spending, saving, and earning into one account built for
              modern onchain finance.
            </p>
          </StaggerItem>
        </Stagger>

        <Reveal className="mt-12 lg:col-span-5 lg:mt-0" delay={0.15}>
          <ProblemDiagram />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Visual: shows the "5 apps" reality on the left collapsing into one Senti
 * account on the right. Pure CSS — no images, no Lottie.
 */
function ProblemDiagram() {
  const apps = ["Wallet", "Swap", "Bridge", "Yield", "Off-ramp"];
  return (
    // Gradient hairline border + layered shadow for depth
    <div className="relative rounded-2xl bg-gradient-to-b from-white/90 via-line/30 to-line/50 p-px shadow-[0_40px_90px_-45px_rgba(10,22,40,0.3),0_4px_12px_-4px_rgba(10,22,40,0.08)]">
      <div className="relative overflow-hidden rounded-[15px] border border-white/70 bg-surface/85 p-6 backdrop-blur-sm">
        {/* Inner top highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        />
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5">
          <div className="flex flex-col gap-2">
            {apps.map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-line bg-surface-soft px-3 py-2 text-[12px] font-medium text-ink-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-line" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex h-full items-center" aria-hidden>
            <svg
              width="36"
              height="100%"
              viewBox="0 0 36 200"
              preserveAspectRatio="none"
            >
              <path
                d="M0 20 C 18 20, 18 100, 36 100"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-line"
              />
              <path
                d="M0 60 C 18 60, 18 100, 36 100"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-line"
              />
              <path
                d="M0 100 L 36 100"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-line"
              />
              <path
                d="M0 140 C 18 140, 18 100, 36 100"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-line"
              />
              <path
                d="M0 180 C 18 180, 18 100, 36 100"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-line"
              />
            </svg>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-xl border border-senti-blue/30 bg-gradient-to-br from-senti-blue to-senti-cyan p-[1px] shadow-[0_20px_50px_-20px_rgba(0,123,255,0.6)]">
              <div className="rounded-[11px] bg-surface px-5 py-4 text-center">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  One account
                </div>
                <div className="mt-1 font-serif text-[20px] font-medium text-ink">
                  Senti
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
