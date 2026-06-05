"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";

export function SaveHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid-dots [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, #00D9FF 18%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-10 lg:pt-32 lg:pb-28">
        <Stagger className="max-w-3xl" stagger={0.09}>
          <StaggerItem>
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Senti Save
            </span>
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-5 font-serif text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
              Save with intention.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.55] text-ink-muted">
              Flexible, fixed, or locked. Your money, your terms, your gains.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/get-started"
                className="group inline-flex h-12 items-center gap-2 rounded-button bg-senti-blue px-6 text-[15px] font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(0,123,255,0.55)] transition-all duration-200 hover:bg-senti-blue-hover"
              >
                Start saving
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex h-12 items-center gap-2 rounded-button border border-line bg-surface px-5 text-[15px] font-medium text-ink transition-colors hover:border-ink/20 hover:bg-surface-soft"
              >
                How it works
                <ArrowDown className="h-4 w-4 text-ink-muted" strokeWidth={2.25} />
              </Link>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
