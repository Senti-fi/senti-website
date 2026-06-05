import { InvestHero } from "@/components/sections/invest/hero";
import { FeaturedOpportunities } from "@/components/sections/invest/featured-opportunities";
import { AssetTypes } from "@/components/sections/invest/asset-types";
import { RiskSpectrum } from "@/components/sections/invest/risk-spectrum";
import { HowWeThink } from "@/components/sections/invest/how-we-think";
import { LucyBlock } from "@/components/sections/invest/lucy-block";
import { CuratedPortfolios } from "@/components/sections/invest/curated-portfolios";
import { InvestFinalCta } from "@/components/sections/invest/final-cta";

export default function InvestPage() {
  return (
    <>
      <InvestHero />
      <FeaturedOpportunities />
      <AssetTypes />
      <RiskSpectrum />
      <HowWeThink />
      <LucyBlock />
      <CuratedPortfolios />
      <InvestFinalCta />
    </>
  );
}
