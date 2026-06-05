import { Reveal } from "@/components/motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const TESTIMONIALS = [
  {
    text: "Finally a crypto app that doesn't feel like crypto. I paid rent, moved savings, and put a bit into yield — all from one screen.",
    name: "Daniel",
    role: "Beta user",
  },
  {
    text: "Lucy showed me exactly what something would cost before I tapped approve. That's the part I'd never had from a wallet.",
    name: "Mia",
    role: "Beta user",
  },
  {
    text: "I'm not into crypto. I'm into my money working. Senti gets that.",
    name: "Akin",
    role: "Beta user",
  },
  {
    text: "I used to juggle three apps to move money around. Now it's one. I didn't realise how much that was stressing me out until it stopped.",
    name: "Tomiwa",
    role: "Beta user",
  },
  {
    text: "Sent money to my sister in two taps. No network names, no gas, no second-guessing. It just worked.",
    name: "Ezekiel",
    role: "Beta user",
  },
  {
    text: "I asked Lucy to set aside a little each week and forgot about it. Three months later there was actually money there.",
    name: "Mimi",
    role: "Beta user",
  },
  {
    text: "Been in crypto for years and still found this refreshing. It does the boring parts so I don't have to think about them.",
    name: "Only1temmy",
    role: "Early adopter",
  },
  {
    text: "The approve screen shows the cost before anything happens. Small thing, but it's the reason I finally trust an app with my money.",
    name: "Quimer",
    role: "Early adopter",
  },
  {
    text: "I've tested half the wallets out there. This is the first one I'd hand to my mum without a tutorial.",
    name: "CryptoLord",
    role: "Early adopter",
  },
];

const firstColumn = TESTIMONIALS.slice(0, 3);
const secondColumn = TESTIMONIALS.slice(3, 6);
const thirdColumn = TESTIMONIALS.slice(6, 9);

export function SocialProof() {
  return (
    <section className="bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              Early adopters
            </span>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              Real people, real money, real clarity.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 flex max-h-[680px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] lg:mt-16">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
