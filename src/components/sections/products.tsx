"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  LineChart,
  PiggyBank,
  Sparkles,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

type Accent = "blue" | "cyan" | "emerald" | "violet";

const ACCENT: Record<Accent, { chip: string; icon: string }> = {
  blue: { chip: "bg-senti-blue/10", icon: "text-senti-blue" },
  cyan: { chip: "bg-cyan-500/12", icon: "text-cyan-600" },
  emerald: { chip: "bg-emerald-500/12", icon: "text-emerald-600" },
  violet: { chip: "bg-violet-500/12", icon: "text-violet-600" },
};

type Product = {
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
  accent: Accent;
  href?: string;
};

const PRODUCTS: Product[] = [
  {
    label: "Senti Spend",
    title: "Spend without limits.",
    body: "Pay anyone, anywhere, instantly. Tap to send, tap to pay — the rails disappear, the money moves.",
    icon: Wallet,
    accent: "blue",
  },
  {
    label: "Senti Save",
    title: "Save with intention.",
    body: "Flexible, fixed, or locked — your money, your terms. Lucy helps you put it where it does the most.",
    icon: PiggyBank,
    accent: "cyan",
    href: "/save",
  },
  {
    label: "Senti Invest",
    title: "Invest with confidence.",
    body: "Access low-risk, vetted yield and grow your wealth — the return and the risk, shown before anything happens.",
    icon: LineChart,
    accent: "emerald",
    href: "/invest",
  },
  {
    label: "Lucy AI",
    title: "Meet Lucy, your CFO.",
    body: "Automates payments, guides decisions, and keeps you on track — in plain words, always waiting for your approval.",
    icon: Sparkles,
    accent: "violet",
    href: "/lucy",
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="relative scroll-mt-24 overflow-hidden bg-[#EFF4FC]"
    >
      {/* Soft background phone — tilted clockwise, faded, partly off-canvas */}
      <Image
        src="/mobile product.svg"
        alt=""
        aria-hidden
        width={768}
        height={768}
        priority={false}
        className="pointer-events-none absolute left-[4%] top-1/2 z-0 hidden w-[640px] max-w-none -translate-y-1/2 rotate-[9deg] opacity-[0.26] lg:block xl:left-[6%] xl:w-[720px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left — label + serif headline, plenty of whitespace */}
          <div className="lg:col-span-5 lg:-mt-6 lg:self-start">
            <Reveal>
              <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink-faint">
                Products
              </span>
              <h2 className="mt-5 max-w-md font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.015em] text-ink">
                One account. Four ways to use it.
              </h2>
            </Reveal>
          </div>

          {/* Right — 2×2 feature cards */}
          <div className="lg:col-span-7">
            <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {PRODUCTS.map((product) => (
                <StaggerItem key={product.label} className="h-full">
                  <FeatureCard product={product} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const accent = ACCENT[product.accent];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line/80 bg-surface p-7 shadow-[0_1px_2px_rgba(10,22,40,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_44px_-26px_rgba(10,22,40,0.22)]">
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl",
          accent.chip,
        )}
      >
        <Icon className={cn("h-[20px] w-[20px]", accent.icon)} strokeWidth={2} />
      </span>

      <span className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
        {product.label}
      </span>
      <h3 className="mt-2 text-[19px] font-semibold leading-snug tracking-tight text-ink">
        {product.title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">
        {product.body}
      </p>

      {product.href && (
        <Link
          href={product.href}
          className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-medium text-senti-blue"
        >
          Learn more
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2.25}
          />
        </Link>
      )}
    </article>
  );
}
