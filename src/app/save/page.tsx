import { SaveHero } from "@/components/sections/save/hero";
import { SaveTiers } from "@/components/sections/save/tiers";
import { SaveFinalCta } from "@/components/sections/save/final-cta";

export default function SavePage() {
  return (
    <>
      <SaveHero />
      <SaveTiers />
      <SaveFinalCta />
    </>
  );
}
