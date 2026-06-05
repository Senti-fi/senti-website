import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { LucyChat } from "./lucy-chat";

export function LucyHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid-dots [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[820px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, #00D9FF 20%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 pb-24 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-24 lg:pb-28">
        <Stagger className="lg:col-span-6" stagger={0.09}>
          <StaggerItem>
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Lucy &middot; the AI inside Senti
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-5 font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.02em] text-ink">
              Lucy. Finance that speaks your language.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.55] text-ink-muted">
              The AI inside Senti. Tell her what you want. She turns it into a clear,
              approval-based action &mdash; and settles it instantly.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-9">
              <Link
                href="/get-started"
                className="group inline-flex h-12 items-center gap-2 rounded-button bg-senti-blue px-6 text-[15px] font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(0,123,255,0.55)] transition-all duration-200 hover:bg-senti-blue-hover"
              >
                Get started
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal className="lg:col-span-6" delay={0.15}>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, #007BFF 26%, transparent), color-mix(in oklab, #00D9FF 12%, transparent) 55%, transparent 72%)",
              }}
            />
            <div className="relative">
              <LucyChat
                userMessage="Send $200 to my mum."
                message={
                  <>
                    Send <span className="font-medium text-ink">$200</span> to Mum.
                    Cost <span className="font-medium text-ink">$0.04</span>, settles
                    instantly.
                  </>
                }
                primaryLabel="Approve"
                secondaryLabel="Not now"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
