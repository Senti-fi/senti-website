import { Stagger, StaggerItem } from "@/components/motion";

export function Audience() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <Stagger>
          <StaggerItem>
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Who it&rsquo;s for
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-4 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              Built for ordinary people, not just crypto experts.
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.6] text-ink-muted">
              Senti makes onchain finance approachable for people who care about
              simplicity, clarity, and control. Use crypto the way you use any modern
              financial app — without learning a new language.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
