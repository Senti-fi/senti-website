import { AboutHero } from "@/components/sections/about/hero";
import { FullWidthPhoto } from "@/components/sections/about/full-width-photo";
import { WhatWeDo } from "@/components/sections/about/what-we-do";
import { PullQuote } from "@/components/sections/about/pull-quote";
import { HowWeDoIt } from "@/components/sections/about/how-we-do-it";
import { BuildWithUs } from "@/components/sections/about/build-with-us";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FullWidthPhoto />
      <WhatWeDo />
      <PullQuote />
      <HowWeDoIt />
      <BuildWithUs />
    </>
  );
}
