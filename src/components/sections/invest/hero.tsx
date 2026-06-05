"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Stagger, StaggerItem, Reveal } from "@/components/motion";

type Node = {
  key: string;
  label: string;
  sub?: string;
  badge?: string;
  img: string;
  color: string;
};

const NODES: Node[] = [
  { key: "usdc", label: "USDC", sub: "Stablecoin", img: "/USDC hero.svg", color: "#007BFF" },
  { key: "aapl", label: "Apple Inc.", sub: "AAPL", img: "/Apple Hero.svg", color: "#0A1628" },
  { key: "nvda", label: "NVIDIA", sub: "NVDA", img: "/Nvidia Hero.svg", color: "#10b981" },
  { key: "gold", label: "Gold", sub: "Commodity", img: "/Gold Hero.svg", color: "#D97706" },
  { key: "tbill", label: "Treasury Bill", badge: "Low Risk", img: "/Treasury bill hero.svg", color: "#0EA5E9" },
  { key: "rwa", label: "Real Estate", sub: "RWA", img: "/Real Estate Hero.svg", color: "#8B5CF6" },
];

// Orbit radius as a percentage of the container half-size.
const R = 40;
const ORBIT_SECONDS = 24;

const positions = NODES.map((_, i) => {
  const a = ((-90 + i * (360 / NODES.length)) * Math.PI) / 180;
  return { left: 50 + R * Math.cos(a), top: 50 + R * Math.sin(a) };
});

export function InvestHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid-dots [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[820px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, #007BFF 14%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 pb-24 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pt-24 lg:pb-28">
        <Stagger stagger={0.09}>
          <StaggerItem>
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Senti Invest
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-5 font-serif text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">
              Invest with confidence.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.6] text-ink-muted">
              Stablecoins, tokenized stocks, real-world assets, and more. All from
              one account, with full clarity on what you&rsquo;re getting into.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/get-started"
                className="group inline-flex h-12 items-center gap-2 rounded-button bg-ink px-6 text-[15px] font-medium text-surface transition-colors duration-200 hover:bg-senti-navy"
              >
                Start investing
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </Link>
              <a
                href="#how-we-think"
                className="group inline-flex h-12 items-center gap-1.5 rounded-button px-3 text-[15px] font-medium text-ink transition-colors hover:text-senti-blue"
              >
                How it works
                <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
              </a>
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-8 flex items-start gap-2 text-[13px] leading-[1.5] text-ink-faint">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2} />
              <span>
                <span className="font-medium text-ink-soft">
                  Regulated. Secure. Transparent.
                </span>{" "}
                Your capital is protected with bank-grade security.
              </span>
            </p>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.15}>
          <NetworkGraphic />
        </Reveal>
      </div>
    </section>
  );
}

function NetworkGraphic() {
  const orbit = { duration: ORBIT_SECONDS, repeat: Infinity, ease: "linear" as const };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      {/* Central Orbit Hero (does not spin) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Image
          src="/Orbit Hero.svg"
          alt="Senti"
          width={480}
          height={480}
          unoptimized
          priority
          className="h-full w-full object-contain drop-shadow-[0_18px_40px_rgba(10,22,40,0.4)]"
        />
      </div>

      {/* Revolving group: connecting lines + orbiting cards */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{ transformOrigin: "center" }}
        animate={{ rotate: 360 }}
        transition={orbit}
      >
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          {positions.map((p, i) => {
            const x = p.left * 4;
            const y = p.top * 4;
            return (
              <g key={NODES[i].key}>
                <line x1={200} y1={200} x2={x} y2={y} stroke="#E2E8F0" strokeWidth={1.5} />
                <motion.line
                  x1={200}
                  y1={200}
                  x2={x}
                  y2={y}
                  stroke={NODES[i].color}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeDasharray="1 9"
                  opacity={0.7}
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                />
              </g>
            );
          })}
        </svg>

        {NODES.map((n, i) => (
          <div
            key={n.key}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${positions[i].left}%`, top: `${positions[i].top}%` }}
          >
            {/* Counter-rotate so the card stays upright while it orbits */}
            <motion.div animate={{ rotate: -360 }} transition={orbit}>
              <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 shadow-[0_12px_30px_-14px_rgba(10,22,40,0.3)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={n.img}
                    alt={n.label}
                    width={48}
                    height={48}
                    unoptimized
                    className="h-full w-full scale-[1.45] object-contain"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-semibold leading-tight text-ink">
                    {n.label}
                  </span>
                  {n.sub && (
                    <span className="block text-[10px] leading-tight text-ink-faint">
                      {n.sub}
                    </span>
                  )}
                  {n.badge && (
                    <span className="mt-0.5 inline-block rounded-full bg-emerald-500/12 px-1.5 py-px text-[9px] font-medium uppercase tracking-wide text-emerald-700">
                      {n.badge}
                    </span>
                  )}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
