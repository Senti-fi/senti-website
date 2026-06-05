"use client";

import { Eye, Layers, Globe, type LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Eye,
    title: "Transparency",
    body: "You see exactly what you're getting into before you commit. Risk level, expected return, minimum investment, liquidity terms. Everything upfront. No fine print, no surprises.",
  },
  {
    icon: Layers,
    title: "Simplicity",
    body: "Every asset class, one account. Stablecoins, tokenized stocks, real-world assets, commodities. No five apps, no protocols to learn. You just need to know what you want.",
  },
  {
    icon: Globe,
    title: "Access",
    body: "Asset classes that were previously out of reach, like fractional real estate, tokenized equities, and Treasury Bills, now available from the same account you use to pay rent. Investing should not be a privilege.",
  },
];

export function HowWeThink() {
  return (
    <section id="how-we-think" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-ink">
            How we think about investing.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12" stagger={0.1}>
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-senti-blue/10">
                  <Icon className="h-6 w-6 text-senti-blue" strokeWidth={2} />
                </span>
                <h3 className="mt-6 text-[20px] font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted">
                  {p.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
