"use client";

import { Stagger, StaggerItem } from "@/components/motion";

export function AboutHero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20 text-center lg:px-10 lg:pt-44 lg:pb-28">
        <Stagger stagger={0.1}>
          <StaggerItem>
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink-faint">
              About Senti
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mx-auto mt-8 max-w-3xl font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
              We&rsquo;re giving people the financial freedom they deserve.
            </h1>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
