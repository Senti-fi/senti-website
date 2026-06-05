"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";

export function BuildWithUs() {
  return (
    <section className="border-t border-line-soft bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10 lg:py-40">
        <Stagger stagger={0.08}>
          <StaggerItem>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              Build it with us.
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-[1.6] text-ink-muted">
              We&rsquo;re shipping Senti week by week &mdash; and we&rsquo;re building it
              in public, with the people who&rsquo;ll use it.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-[1.6] text-ink-muted">
              If you hold money in digital dollars and want a financial life built around
              them, get on the waitlist. You&rsquo;ll be the first to use Senti when it
              goes live in your market. And if you&rsquo;re investing, building, or
              partnering in this space, we want to hear from you.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/get-started"
                className="group inline-flex h-12 items-center gap-2 rounded-button bg-senti-blue px-6 text-[15px] font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(0,123,255,0.55)] transition-all duration-200 hover:bg-senti-blue-hover"
              >
                Join the waitlist
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </Link>
              <Link
                href="/partners"
                className="inline-flex h-12 items-center gap-2 rounded-button border border-line bg-surface px-5 text-[15px] font-medium text-ink transition-colors hover:border-ink/20 hover:bg-surface-soft"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 text-ink-muted" strokeWidth={2.25} />
              </Link>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
