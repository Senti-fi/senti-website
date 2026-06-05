"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { GradientBlurBg } from "@/components/ui/gradient-blur-bg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <GradientBlurBg />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 pb-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pt-24 lg:pb-28">
        <Stagger className="lg:col-span-6" stagger={0.09}>
          <StaggerItem>
            <h1 className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
              Crypto, made simple.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.55] text-ink-muted">
              One account to spend, save, and invest.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/get-started"
                className="group inline-flex h-12 items-center gap-2 rounded-button bg-senti-blue px-6 text-[15px] font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(0,123,255,0.55)] transition-all duration-200 hover:bg-senti-blue-hover"
              >
                Start with Senti
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </Link>
              <Link
                href="/#products"
                className="inline-flex h-12 items-center gap-2 rounded-button border border-line bg-surface px-5 text-[15px] font-medium text-ink transition-colors hover:border-ink/20 hover:bg-surface-soft"
              >
                Explore products
                <ArrowUpRight className="h-4 w-4 text-ink-muted" strokeWidth={2.25} />
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal className="lg:col-span-6" delay={0.15}>
          <Image
            src="/Hero.svg"
            alt=""
            width={1152}
            height={768}
            priority
            className="h-auto w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
