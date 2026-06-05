"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

type Category = {
  name: string;
  description: string;
  count: string;
  img: string;
};

const CATEGORIES: Category[] = [
  {
    name: "Stablecoins",
    description: "Earn yield in stable cryptocurrencies.",
    count: "8 assets",
    img: "/Stablecoin asset type.svg",
  },
  {
    name: "Tokenized Stocks",
    description: "Invest in top companies from around the world.",
    count: "36 assets",
    img: "/Tokenized stocks asset type.svg",
  },
  {
    name: "Real World Assets",
    description: "Own a piece of income-generating real assets.",
    count: "12 assets",
    img: "/Real Estate asset type.svg",
  },
  {
    name: "Commodities",
    description: "Diversify with precious metals and more.",
    count: "5 assets",
    img: "/Commodities asset type.svg",
  },
  {
    name: "Curated Portfolios",
    description: "Professionally managed portfolios for every goal.",
    count: "6 portfolios",
    img: "/Curated portfolio pie chart.svg",
  },
];

export function AssetTypes() {
  return (
    <section id="asset-types" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-ink">
              Explore by asset type
            </h2>
            <Link
              href="/get-started"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-senti-blue"
            >
              See all assets
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.name} className="h-full">
              <Link
                href="/get-started"
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-senti-blue"
              >
                <h3 className="text-[16px] font-semibold tracking-tight text-ink">
                  {c.name}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-muted">
                  {c.description}
                </p>
                <div className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                  {c.count}
                </div>
                <span className="mt-auto flex w-full justify-center pt-6">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={280}
                    height={280}
                    unoptimized
                    className="h-auto w-full max-w-[280px] object-contain"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
