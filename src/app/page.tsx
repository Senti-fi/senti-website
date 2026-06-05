import { Hero } from "@/components/sections/hero";
import { TrustBand } from "@/components/sections/trust-band";
import { Problem } from "@/components/sections/problem";
import { Products } from "@/components/sections/products";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Audience } from "@/components/sections/audience";
import { SocialProof } from "@/components/sections/social-proof";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Problem />
      <Products />
      <HowItWorks />
      <Audience />
      <SocialProof />
      <FinalCta />
    </>
  );
}
