"use client";

import Link from "next/link";
import { ArrowUpRight, LineChart, Sparkles, BookOpen } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function HowWeDoIt() {
  return (
    <section className="border-t border-line-soft bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            How we do it
          </span>
          <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink">
            Three ways we make it real.
          </h2>
        </Reveal>

        <Stagger
          className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2"
          stagger={0.1}
        >
          {/* Feature card — tall, left */}
          <StaggerItem className="lg:row-span-2">
            <FeatureCard
              icon={Sparkles}
              eyebrow="Lucy AI"
              title="Meet Lucy."
              body="The AI behind Senti. She translates what you want into clear, simple action — so you can focus on living, not managing."
              cta="Learn about Lucy"
              href="/lucy"
            />
          </StaggerItem>

          {/* Wide card — top right */}
          <StaggerItem className="lg:col-span-2">
            <WideCard
              icon={BookOpen}
              title="Why we built Senti."
              body="The story behind the system we’re building, and the people we built it for."
              cta="Read our story"
              href="/about"
            />
          </StaggerItem>

          {/* Wide card — bottom right */}
          <StaggerItem className="lg:col-span-2">
            <WideCard
              icon={LineChart}
              title="What you can do."
              body="Spend, save, send, grow — everything Senti makes possible from one account."
              cta="Explore the product"
              href="/#products"
            />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  body,
  cta,
  href,
}: {
  icon: typeof Sparkles;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-senti-blue/8 via-surface to-senti-cyan/8 p-8 transition-all duration-300 hover:border-ink/15 hover:shadow-[0_30px_60px_-30px_rgba(10,22,40,0.18)]"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-senti-blue to-senti-cyan text-white">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>

      <div>
        <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-faint">
          {eyebrow}
        </div>
        <h3 className="mt-2 font-serif text-[30px] font-medium leading-[1.1] tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">{body}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-senti-blue">
          {cta}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2.25}
          />
        </span>
      </div>
    </Link>
  );
}

function WideCard({
  icon: Icon,
  title,
  body,
  cta,
  href,
}: {
  icon: typeof Sparkles;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:border-ink/15 hover:shadow-[0_30px_60px_-30px_rgba(10,22,40,0.18)]"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-[26px] font-medium leading-[1.15] tracking-tight text-ink">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-ink-muted">
            {body}
          </p>
        </div>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-ink-muted">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
      </div>

      <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-senti-blue">
        {cta}
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={2.25}
        />
      </span>
    </Link>
  );
}
