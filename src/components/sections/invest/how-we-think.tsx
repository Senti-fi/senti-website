"use client";

import { Eye, Layers, Globe, Wallet, type LucideIcon } from "lucide-react";
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
  {
    icon: Wallet,
    title: "One account",
    body: "Manage all your money and investments in one simple account.",
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

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-[0_1px_2px_rgba(10,22,40,0.04)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-senti-blue/10">
                    <Icon className="h-6 w-6 text-senti-blue" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 text-[20px] font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted">
                    {p.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
