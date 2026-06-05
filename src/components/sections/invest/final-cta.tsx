"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Wallet,
  ShieldCheck,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { Stagger, StaggerItem, Reveal } from "@/components/motion";

type Trust = { icon: LucideIcon; title: string; sub: string };

const TRUST: Trust[] = [
  { icon: Wallet, title: "$10 minimum", sub: "Start investing today" },
  { icon: ShieldCheck, title: "Secure & regulated", sub: "Your security is our priority" },
  { icon: MessageCircle, title: "24/7 support", sub: "We're here for you" },
];

export function InvestFinalCta() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-senti-navy px-8 py-16 md:px-14 md:py-20">
            {/* Ambient orbs */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[620px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, #007BFF 45%, transparent), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 right-0 h-[360px] w-[520px] rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, #00D9FF 40%, transparent), transparent 70%)",
              }}
            />

            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Copy */}
              <Stagger stagger={0.08}>
                <StaggerItem>
                  <h2 className="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-white">
                    Start building your future today.
                  </h2>
                </StaggerItem>
                <StaggerItem>
                  <p className="mt-5 max-w-md text-[17px] leading-[1.6] text-white/60">
                    Start with as little as $10 and join thousands already growing
                    their wealth with Senti.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link
                      href="/get-started"
                      className="group inline-flex h-12 items-center gap-2 rounded-button bg-white px-6 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-white/90"
                    >
                      Get started
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.25} />
                    </Link>
                    <Link
                      href="/#products"
                      className="group inline-flex h-12 items-center gap-1.5 rounded-button px-3 text-[15px] font-medium text-white transition-colors hover:text-white/80"
                    >
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
                    </Link>
                  </div>
                </StaggerItem>
              </Stagger>

              {/* Trust signals */}
              <Reveal delay={0.15}>
                <ul className="flex flex-col gap-4 lg:pl-8">
                  {TRUST.map((t) => {
                    const Icon = t.icon;
                    return (
                      <li key={t.title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <Icon className="h-5 w-5 text-senti-cyan" strokeWidth={2} />
                        </span>
                        <span>
                          <span className="block text-[15px] font-semibold text-white">
                            {t.title}
                          </span>
                          <span className="block text-[13px] text-white/55">
                            {t.sub}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
