"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Stagger, StaggerItem, Reveal } from "@/components/motion";

const CLOSING_BODY =
  "Whatever path you choose, your money grows the whole time. No hidden fees. No surprise lockups. No “we’ll explain later.”";

export function SaveFinalCta() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-senti-blue/15 bg-surface-tint px-8 py-20 text-center md:px-16 md:py-24">
            {/* Soft ambient wash — light, no dark fill */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-[360px] w-[620px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, #00D9FF 22%, transparent), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-grid-dots opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
            />

            <Stagger className="relative" stagger={0.08}>
              <StaggerItem>
                <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
                  Every plan earns. Every plan is yours.
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.55] text-ink-muted">
                  {CLOSING_BODY}
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/#how-it-works"
                    className="group inline-flex h-12 items-center gap-2 rounded-button bg-senti-blue px-6 text-[15px] font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(0,123,255,0.55)] transition-all duration-200 hover:bg-senti-blue-hover"
                  >
                    See how it all works
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </Link>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
