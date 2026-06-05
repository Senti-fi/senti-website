import { Reveal } from "@/components/motion";

export function TrustBand() {
  return (
    <section className="border-y border-line-soft bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
            <p className="text-[13px] font-medium tracking-tight text-ink">
              Trusted by everyday crypto users.
            </p>
            <p className="text-[12px] uppercase tracking-[0.12em] text-ink-faint">
              Clear approvals
              <span className="mx-3 text-line">·</span>
              Instant settlement
              <span className="mx-3 text-line">·</span>
              Built for simplicity
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
