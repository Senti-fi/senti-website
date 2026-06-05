"use client";

import Link from "next/link";
import { Sparkles, Coins, Landmark, PieChart, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion";

type Suggestion = {
  name: string;
  apy: string;
  icon: LucideIcon;
  color: string;
};

const SUGGESTIONS: Suggestion[] = [
  { name: "USDC Yield Vault", apy: "12.5% APY", icon: Coins, color: "#007BFF" },
  { name: "U.S. Treasury Bill Fund", apy: "8.4% APY", icon: Landmark, color: "#10b981" },
  { name: "Global Balanced Portfolio", apy: "11.2% APY", icon: PieChart, color: "#8B5CF6" },
];

export function LucyBlock() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <Reveal>
          <div
            className="overflow-hidden rounded-3xl border border-senti-blue/15 px-7 py-12 md:px-12 md:py-14"
            style={{ backgroundColor: "rgba(0,123,255,0.06)" }}
          >
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Copy */}
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-senti-blue">
                  Lucy AI
                </span>
                <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink">
                  Not sure where to start? Ask Lucy.
                </h2>
                <p className="mt-5 max-w-md text-[17px] leading-[1.6] text-ink-muted">
                  Lucy looks at your balance, your goals, and your risk comfort,
                  then suggests what actually fits. You approve what makes sense.
                  You skip what doesn&rsquo;t.
                </p>
                <Link
                  href="/lucy"
                  className="group mt-8 inline-flex h-12 items-center gap-2 rounded-button bg-ink px-6 text-[15px] font-medium text-surface transition-colors hover:bg-senti-navy"
                >
                  <Sparkles className="h-4 w-4" strokeWidth={2} />
                  Ask Lucy
                </Link>
              </div>

              {/* Recommendation panel */}
              <div className="rounded-2xl border border-line bg-surface p-6 shadow-[0_24px_60px_-36px_rgba(10,22,40,0.3)]">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-senti-blue to-senti-cyan">
                    <Sparkles className="h-5 w-5 text-white" strokeWidth={2} />
                  </span>
                  <p className="text-[14px] leading-[1.55] text-ink-soft">
                    Based on your goal to grow wealth moderately and your low risk
                    comfort, I recommend:
                  </p>
                </div>

                <div className="mt-5 space-y-2.5">
                  {SUGGESTIONS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={s.name}
                        className="flex items-center gap-3 rounded-xl border border-line-soft bg-surface-soft px-4 py-3"
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                          style={{ backgroundColor: `${s.color}1a` }}
                        >
                          <Icon className="h-4 w-4" strokeWidth={2} style={{ color: s.color }} />
                        </span>
                        <span className="flex-1 text-[14px] font-medium text-ink">
                          {s.name}
                        </span>
                        <span
                          className="text-[14px] font-semibold tabular-nums"
                          style={{ color: s.color }}
                        >
                          {s.apy}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
