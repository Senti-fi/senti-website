import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function LucyFinalCta() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-20 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-senti-navy px-8 py-20 text-center md:px-16 md:py-28">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, #00D9FF 35%, transparent), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 left-1/3 h-[360px] w-[520px] rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, #007BFF 50%, transparent), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.25) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <Stagger className="relative" stagger={0.08}>
              <StaggerItem>
                <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.015em] text-white">
                  Tell Lucy what you want.
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.55] text-white/70">
                  She&rsquo;ll turn it into a clear action, show you the cost, and settle
                  it the moment you approve.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/get-started"
                    className="group inline-flex h-12 items-center gap-2 rounded-button bg-white px-6 text-[15px] font-medium text-ink transition-all duration-200 hover:bg-white/90"
                  >
                    Get started
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </Link>
                  <Link
                    href="/#products"
                    className="inline-flex h-12 items-center gap-2 rounded-button border border-white/20 bg-white/5 px-5 text-[15px] font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
                  >
                    Explore Senti
                    <ArrowUpRight className="h-4 w-4 text-white/70" strokeWidth={2.25} />
                  </Link>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
