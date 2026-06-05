"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ImagePlaceholder } from "@/components/image-placeholder";

// PLACEHOLDER team — replace names, titles, and portraits with the real team.
const TEAM = [
  { name: "Add name", title: "Co-founder & CEO", file: "/public/about/team-1.jpg" },
  { name: "Add name", title: "Co-founder & CTO", file: "/public/about/team-2.jpg" },
  { name: "Add name", title: "Head of Product", file: "/public/about/team-3.jpg" },
  { name: "Add name", title: "Head of Design", file: "/public/about/team-4.jpg" },
];

export function Leadership() {
  return (
    <section className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            Leadership
          </span>
          <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink">
            The people building it.
          </h2>
        </Reveal>

        <Stagger
          className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8"
          stagger={0.08}
        >
          {TEAM.map((person) => (
            <StaggerItem key={person.title}>
              <div>
                <ImagePlaceholder
                  label="Portrait"
                  swapPath={person.file}
                  className="aspect-[4/5] w-full"
                />
                <div className="mt-4">
                  <div className="text-[15px] font-semibold tracking-tight text-ink">
                    {person.name}
                  </div>
                  <div className="mt-0.5 text-[13px] text-ink-muted">
                    {person.title}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
