"use client";

import { Reveal } from "@/components/motion";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function PullQuote() {
  return (
    <section className="bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <figure>
              <blockquote className="font-serif text-[clamp(1.75rem,3.4vw,2.875rem)] font-medium leading-[1.2] tracking-[-0.015em] text-ink">
                &ldquo;Tell us what you want. We&rsquo;ll take care of the rest &mdash;
                so you can focus on living, not managing.&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-[14px] text-ink-muted">
                <span className="font-medium text-ink">The Senti team</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.12}>
            {/* Portrait beside the quote. Swap for <Image /> when ready. */}
            <ImagePlaceholder
              label="Portrait"
              swapPath="/public/about/quote.jpg"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
