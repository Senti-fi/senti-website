import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const STEPS = [
  {
    n: "01",
    title: "You say what you want.",
    body: "In plain words. “Send $200 to my mum.” “Move my savings somewhere safe.” “Invest this in stablecoin yield.”",
  },
  {
    n: "02",
    title: "Lucy proposes the action.",
    body: "In human terms, with the cost and outcome shown up front. Nothing moves until you say yes.",
  },
  {
    n: "03",
    title: "It settles instantly.",
    body: "No gas, no bridges, no waiting. Done the moment you approve.",
  },
];

export function HowLucyWorks() {
  return (
    <section className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              How Lucy works
            </span>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              Say it. Approve it. Done.
            </h2>
          </div>
        </Reveal>

        <Stagger
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3"
          stagger={0.1}
        >
          {STEPS.map((s) => (
            <StaggerItem key={s.n} className="h-full">
              <div className="flex h-full flex-col bg-surface p-8 lg:p-10">
                <span className="font-serif text-[32px] font-medium tracking-tight text-senti-blue">
                  {s.n}
                </span>
                <h3 className="mt-6 text-[18px] font-semibold leading-[1.3] tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-ink-muted">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
