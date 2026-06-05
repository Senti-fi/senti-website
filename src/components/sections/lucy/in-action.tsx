import { Reveal } from "@/components/motion";
import { LucyChat } from "./lucy-chat";

export function LucyInAction() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* Intelligent, never autonomous */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Intelligent, never autonomous
            </span>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-[-0.015em] text-ink">
              Lucy makes finance simple, not opaque. Every action waits for your
              approval &mdash;{" "}
              <span className="text-ink-muted">
                Lucy never moves your money on her own. You stay in control of every
                cent.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Example 1 — recurring payment, chat left / caption right */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <LucyChat
              message="You've been paying rent on the 5th for the last three months. Want me to automate that?"
              primaryLabel="Yes, automate it"
              secondaryLabel="Not yet"
            />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <h3 className="font-serif text-[24px] font-medium leading-[1.2] tracking-tight text-ink">
              She notices the patterns you don&rsquo;t.
            </h3>
            <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-ink-muted">
              Lucy notices recurring payments and suggests automating them. You approve
              once, and she handles it every month &mdash; or you skip it if timing
              changes.
            </p>
          </Reveal>
        </div>

        {/* Example 2 — idle funds, caption left / chat right */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <h3 className="font-serif text-[24px] font-medium leading-[1.2] tracking-tight text-ink">
              She puts idle money to work &mdash; if you let her.
            </h3>
            <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-ink-muted">
              Lucy spots idle funds and suggests safe ways to grow them. She shows
              expected returns, risk level, and liquidity &mdash; so you can decide if
              it makes sense for you.
            </p>
          </Reveal>
          <Reveal className="order-1 lg:order-2 lg:col-span-6" delay={0.1}>
            <LucyChat
              message="You've got $500 sitting idle for 2 weeks. Want to put it in a low-risk pool earning 8% until you need it?"
              details={[
                "Expected return: $0.15/week",
                "Risk: Low",
                "Withdraw anytime",
              ]}
              primaryLabel="Invest $500"
              secondaryLabel="Maybe later"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
