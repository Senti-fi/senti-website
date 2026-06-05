"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const COLUMNS = [
  {
    title: "A home for your money.",
    body: "One account where your money lives, grows, and stays within reach — safe, simple, and yours.",
  },
  {
    title: "Make it feel easy.",
    body: "Know what you have, what it’s doing, and what to do next. No spreadsheets, no research, no finance degree.",
  },
  {
    title: "Give you back your time.",
    body: "Financial freedom isn’t getting rich overnight. It’s not having to think about your money to live your life.",
  },
];

export function WhatWeDo() {
  return (
    <section className="border-t border-line-soft bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            What we do
          </span>
        </Reveal>

        <Stagger
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 lg:mt-16"
          stagger={0.1}
        >
          {COLUMNS.map((col) => (
            <StaggerItem key={col.title}>
              <div className="border-t border-line pt-7">
                <h3 className="font-serif text-[24px] font-medium leading-[1.2] tracking-tight text-ink">
                  {col.title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.65] text-ink-muted">
                  {col.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
