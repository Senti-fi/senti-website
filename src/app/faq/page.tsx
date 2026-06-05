import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Accordion, type AccordionItem } from "@/components/ui/accordion";

const QUESTIONS: AccordionItem[] = [
  {
    q: "What is Senti?",
    a: (
      <p>
        One account to spend, save, and invest in digital assets &mdash; with Lucy,
        an AI guide that turns plain-language intent into clear, approval-based
        action. Built so the benefits of crypto don&rsquo;t require learning crypto
        first.
      </p>
    ),
  },
  {
    q: "How is Senti different from a regular crypto wallet or exchange?",
    a: (
      <p>
        Most crypto products do one thing &mdash; a wallet, a swap, a yield app, a
        cash-out service. Senti coordinates all of them under a single account. You
        see one balance, one set of options, one approval flow. Lucy handles the
        routing underneath.
      </p>
    ),
  },
  {
    q: "Do I need to understand crypto to use Senti?",
    a: (
      <p>
        No. Senti is built so the underlying mechanics &mdash; networks, gas, bridges,
        protocols &mdash; stay out of view. You tell Lucy what you want in plain words;
        she proposes a clear action with the cost and outcome shown up front.
      </p>
    ),
  },
  {
    q: "Is my money safe? Who controls my assets?",
    a: (
      <>
        <p>
          Every action in Senti is approval-based. Lucy never moves your money on her
          own &mdash; she proposes, you approve, then it settles. You stay in control
          of every cent.
        </p>
        <p className="mt-3 text-[14px] italic text-ink-faint">
          Custody and security architecture documented separately in our{" "}
          <Link href="/security" className="underline-offset-4 hover:underline">
            security overview
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    q: "What is Lucy, exactly? Is she making decisions for me?",
    a: (
      <p>
        Lucy is the AI inside Senti. She translates your intent into a concrete,
        executable action and shows you the cost and outcome before anything happens.
        She&rsquo;s intelligent, never autonomous &mdash; nothing moves until you say
        yes.
      </p>
    ),
  },
  {
    q: "What can I actually do with a Senti account?",
    a: (
      <p>
        Spend from your balance like a normal card, save in one clear place, and
        invest in stablecoin yield or digitized assets &mdash; all from the same
        account, in one approval flow.
      </p>
    ),
  },
  {
    q: "How does Senti make money?",
    a: (
      <p>
        <em className="text-ink-faint">Placeholder &mdash; to be finalised:</em>{" "}
        typically a transparent mix of card interchange, FX/conversion margin, and a
        clearly disclosed fee on managed yield. We&rsquo;ll publish details before
        launch.
      </p>
    ),
  },
  {
    q: "Where can I use Senti? Is it available in my country?",
    a: (
      <p className="italic text-ink-faint">
        Placeholder &mdash; to be finalised based on supported regions at launch.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 pt-32 pb-14 text-center lg:px-10 lg:pt-44 lg:pb-20">
          <Reveal>
            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink-faint">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-7 max-w-3xl font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
              Common questions.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.6] text-ink-muted">
              What Senti is, how it works, what Lucy does, and how your money stays
              safe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-6 pb-16 lg:px-10 lg:pb-24">
          <Reveal>
            <Accordion items={QUESTIONS} defaultOpen={[0]} />
          </Reveal>
        </div>
      </section>

      {/* Closing inline link */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-6 pb-32 text-center lg:px-10 lg:pb-40">
          <Reveal>
            <p className="text-[15px] text-ink-muted">
              Still have a question?{" "}
              <Link
                href="/partners"
                className="group inline-flex items-center gap-1 font-medium text-senti-blue"
              >
                Get in touch
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
