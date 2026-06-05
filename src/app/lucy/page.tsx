import { LucyHero } from "@/components/sections/lucy/hero";
import { HowLucyWorks } from "@/components/sections/lucy/how-lucy-works";
import { LucyInAction } from "@/components/sections/lucy/in-action";
import { LucyFinalCta } from "@/components/sections/lucy/final-cta";

export default function LucyPage() {
  return (
    <>
      <LucyHero />
      <HowLucyWorks />
      <LucyInAction />
      <LucyFinalCta />
    </>
  );
}
