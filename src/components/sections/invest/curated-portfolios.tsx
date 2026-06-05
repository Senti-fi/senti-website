"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

type Segment = { label: string; value: number; color: string };

type Portfolio = {
  name: string;
  description: string;
  range: string;
  segments: Segment[];
};

const C_BLUE = "#007BFF";
const C_EMERALD = "#10b981";
const C_ORANGE = "#f97316";
const C_VIOLET = "#8B5CF6";

const PORTFOLIOS: Portfolio[] = [
  {
    name: "Conservative",
    description: "Focus on capital preservation and stable returns.",
    range: "8.5-10.5% APY",
    segments: [
      { label: "Stablecoins", value: 80, color: C_BLUE },
      { label: "Treasuries", value: 10, color: C_EMERALD },
      { label: "Stocks", value: 10, color: C_ORANGE },
    ],
  },
  {
    name: "Balanced",
    description: "A mix of growth and stability for steady wealth growth.",
    range: "11-14% APY",
    segments: [
      { label: "Stocks", value: 40, color: C_ORANGE },
      { label: "Stablecoins", value: 30, color: C_BLUE },
      { label: "Treasuries", value: 20, color: C_EMERALD },
      { label: "Real Assets", value: 10, color: C_VIOLET },
    ],
  },
  {
    name: "Growth",
    description: "Higher growth potential with more exposure to equities.",
    range: "15-20% APY",
    segments: [
      { label: "Stocks", value: 70, color: C_ORANGE },
      { label: "Real Assets", value: 20, color: C_VIOLET },
      { label: "Stablecoins", value: 10, color: C_BLUE },
    ],
  },
];

export function CuratedPortfolios() {
  return (
    <section id="portfolios" className="scroll-mt-24 bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink">
                Curated portfolios
              </h2>
              <p className="mt-3 text-[16px] text-ink-muted">
                Professionally managed portfolios for every type of investor.
              </p>
            </div>
            <Link
              href="/get-started"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-senti-blue"
            >
              View all portfolios
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
          {PORTFOLIOS.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-[0_1px_2px_rgba(10,22,40,0.04)]">
                <h3 className="text-[20px] font-semibold tracking-tight text-ink">
                  {p.name}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-muted">
                  {p.description}
                </p>

                <div className="mt-7 flex items-center gap-6">
                  <Donut segments={p.segments} />
                  <ul className="flex-1 space-y-1.5">
                    {p.segments.map((s) => (
                      <li key={s.label} className="flex items-center justify-between text-[13px]">
                        <span className="flex items-center gap-2 text-ink-soft">
                          <span className="h-2.5 w-2.5 rounded-[3px]" style={{ backgroundColor: s.color }} />
                          {s.label}
                        </span>
                        <span className="font-medium tabular-nums text-ink-muted">{s.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-t border-line pt-5">
                  <div className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                    Expected return
                  </div>
                  <div className="mt-1 text-[20px] font-semibold tabular-nums text-senti-blue">
                    {p.range}
                  </div>
                </div>

                <Link
                  href="/get-started"
                  className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors hover:text-senti-blue"
                >
                  Invest now
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.25} />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Donut({ segments }: { segments: Segment[] }) {
  const r = 42;
  const C = 2 * Math.PI * r;
  // Prefix sum of preceding segment values (no mutation during render).
  const offsets = segments.map((_, i) =>
    segments.slice(0, i).reduce((sum, s) => sum + s.value, 0),
  );

  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24 shrink-0" role="img" aria-label="Asset allocation">
      <g transform="rotate(-90 50 50)">
        <circle cx={50} cy={50} r={r} fill="none" stroke="var(--color-line)" strokeWidth={14} />
        {segments.map((s, i) => {
          const dash = (s.value / 100) * C;
          return (
            <circle
              key={s.label}
              cx={50}
              cy={50}
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={14}
              strokeDasharray={`${dash} ${C - dash}`}
              strokeDashoffset={-(offsets[i] / 100) * C}
            />
          );
        })}
      </g>
    </svg>
  );
}
