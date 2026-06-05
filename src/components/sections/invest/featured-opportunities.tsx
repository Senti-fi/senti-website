"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const BORDER = "#E8EBF0";

type Opp = {
  assetClass: string;
  labelColor: string;
  name: string;
  img: string;
  risk: string;
  riskClass: string;
  value: string;
  unit?: string;
  valueColor: string;
  valueLabel: string;
  tint: string;
};

const OPPS: Opp[] = [
  {
    assetClass: "Stablecoin",
    labelColor: "text-senti-blue",
    name: "USDC Yield Vault",
    img: "/USDC hero.svg",
    risk: "Very Low Risk",
    riskClass: "bg-teal-50 text-teal-700",
    value: "12.5%",
    unit: "APY",
    valueColor: "text-ink",
    valueLabel: "30-day avg. yield",
    tint: "#007BFF",
  },
  {
    assetClass: "Treasury",
    labelColor: "text-emerald-600",
    name: "U.S. Treasury Bill Fund",
    img: "/Treasury bill hero.svg",
    risk: "Low Risk",
    riskClass: "bg-emerald-50 text-emerald-700",
    value: "8.4%",
    unit: "APY",
    valueColor: "text-emerald-600",
    valueLabel: "30-day avg. yield",
    tint: "#10b981",
  },
  {
    assetClass: "Tokenized Stocks",
    labelColor: "text-violet-600",
    name: "Apple Inc. (AAPL)",
    img: "/Apple Hero.svg",
    risk: "Medium Risk",
    riskClass: "bg-violet-50 text-violet-700",
    value: "$182.91",
    valueColor: "text-violet-600",
    valueLabel: "Current price",
    tint: "#64748B",
  },
  {
    assetClass: "Real World Asset",
    labelColor: "text-amber-600",
    name: "Prime Real Estate Income Fund",
    img: "/Real Estate Hero.svg",
    risk: "Medium-Low Risk",
    riskClass: "bg-amber-50 text-amber-700",
    value: "9.7%",
    unit: "APY",
    valueColor: "text-ink",
    valueLabel: "Projected return",
    tint: "#F59E0B",
  },
];

export function FeaturedOpportunities() {
  return (
    <section id="opportunities" className="scroll-mt-24 bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-[20px] font-bold tracking-tight text-ink">
                Featured opportunities
              </h2>
              <p className="mt-1.5 text-[14px] text-ink-muted">
                Handpicked investments across different asset classes.
              </p>
            </div>
            <Link
              href="/get-started"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-senti-blue"
            >
              View all opportunities
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {OPPS.map((o) => (
            <StaggerItem key={o.name} className="h-full">
              <article
                className="flex h-full flex-col rounded-2xl border p-6 shadow-[0_1px_2px_rgba(10,22,40,0.04)]"
                style={{
                  borderColor: BORDER,
                  backgroundColor: `color-mix(in srgb, ${o.tint} 4%, #ffffff)`,
                }}
              >
                {/* Asset logo */}
                <span className="flex aspect-square w-full max-w-[176px] items-center justify-center overflow-hidden">
                  <Image
                    src={o.img}
                    alt={o.name}
                    width={192}
                    height={192}
                    unoptimized
                    className="h-full w-full scale-[1.3] object-contain"
                  />
                </span>

                {/* Asset class label */}
                <span className={cn("mt-5 text-[11px] font-bold uppercase tracking-[0.12em]", o.labelColor)}>
                  {o.assetClass}
                </span>

                {/* Name */}
                <h3 className="mt-1.5 min-h-[3.25rem] text-[18px] font-bold leading-snug tracking-tight text-ink">
                  {o.name}
                </h3>

                {/* Risk badge */}
                <span className={cn("mt-3 inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold", o.riskClass)}>
                  {o.risk}
                </span>

                {/* Value */}
                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className={cn("text-[28px] font-bold leading-none tracking-tight tabular-nums", o.valueColor)}>
                      {o.value}
                    </span>
                    {o.unit && (
                      <span className="text-[14px] font-semibold text-ink-faint">{o.unit}</span>
                    )}
                  </div>
                  <div className="mt-1.5 text-[12px] text-ink-faint">{o.valueLabel}</div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
