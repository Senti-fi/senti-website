"use client";

import { motion } from "motion/react";
import { ImagePlaceholder } from "@/components/image-placeholder";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FullWidthPhoto() {
  return (
    <section className="bg-surface">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {/* Full-bleed people photo. Swap ImagePlaceholder for <Image fill /> when ready. */}
        <ImagePlaceholder
          rounded={false}
          label="Real people using Senti"
          swapPath="/public/about/people.jpg"
          className="h-[56vh] w-full lg:h-[72vh]"
        />
      </motion.div>
    </section>
  );
}
