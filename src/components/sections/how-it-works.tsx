import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const STEPS = [
  {
    n: "01",
    title: "Open one Senti account.",
    body: "A single sign-up. One balance to see and use.",
  },
  {
    n: "02",
    title: "Choose Spend, Save, or Invest.",
    body: "Pick where your money should sit and what it should do.",
  },
  {
    n: "03",
    title: "Review, approve, and settle instantly.",
    body: "Lucy proposes the action, with cost and outcome shown. You approve. It settles.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              How it works
            </span>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              Three steps, then your money just works.
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
