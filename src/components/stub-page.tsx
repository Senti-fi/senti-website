import { Reveal } from "@/components/motion";

export function StubPage({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-3xl px-6 py-32 lg:px-10 lg:py-40">
        <Reveal>
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-[18px] leading-[1.6] text-ink-muted">
            {body}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-10 text-[13px] text-ink-faint">Page in progress.</p>
        </Reveal>
      </div>
    </section>
  );
}
