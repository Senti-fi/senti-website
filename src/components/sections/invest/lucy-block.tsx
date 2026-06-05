"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion";

const VIOLET = "#7B61FF";

type Rec = { name: string; apy: string; img: string };

const RECS: Rec[] = [
  { name: "USDC Yield Vault", apy: "12.5% APY", img: "/USDC hero.svg" },
  { name: "U.S. Treasury Bill Fund", apy: "8.4% APY", img: "/Treasury bill hero.svg" },
  { name: "Global Balanced Portfolio", apy: "11.2% APY", img: "/Curated portfolio pie chart.svg" },
];

export function LucyBlock() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[20px] p-7 md:p-10"
            style={{ backgroundColor: "#F0EFFF" }}
          >
            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-8">
              {/* Left — copy */}
              <div>
                <span className="text-[11px] font-semibold uppercase" style={{ color: VIOLET, letterSpacing: "2px" }}>
                  Lucy AI
                </span>
                <h2 className="mt-1 font-serif text-[clamp(1.6rem,3vw,2rem)] font-semibold leading-[1.2] text-ink">
                  Not sure where to start? Ask Lucy.
                </h2>
                <p className="mt-4 max-w-xs text-[14px] leading-[1.6] text-ink-muted">
                  Lucy analyzes the market and your goals to recommend the right
                  investments for you.
                </p>
                <Link
                  href="/lucy"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-senti-navy"
                >
                  <span aria-hidden className="text-[13px]">✦</span>
                  Ask Lucy
                </Link>
              </div>

              {/* Center — recommendation panel */}
              <div className="rounded-2xl bg-surface p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <p className="text-[13px] leading-[1.5] text-ink-muted">
                  Based on your goal to grow wealth moderately and your low risk
                  comfort, I recommend:
                </p>
                <div className="mt-4 space-y-4">
                  {RECS.map((r) => (
                    <div key={r.name} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-soft">
                        <Image
                          src={r.img}
                          alt={r.name}
                          width={32}
                          height={32}
                          unoptimized
                          className="h-full w-full scale-[1.2] object-contain"
                        />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[14px] font-bold leading-tight text-ink">
                          {r.name}
                        </div>
                        <div className="text-[13px] text-ink-muted">{r.apy}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Lucy illustration. Scaled up visually without growing
                  the card: the in-flow footprint stays column-sized, the image
                  scales over it (the card clips any bleed). */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[240px] lg:-translate-x-[12%]">
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-[170%] w-[170%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(123,97,255,0.18), transparent 70%)" }}
                  />
                  <Image
                    src="/Lucy.svg"
                    alt="Lucy"
                    width={240}
                    height={240}
                    unoptimized
                    className="relative h-auto w-full origin-center scale-[2.6] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
