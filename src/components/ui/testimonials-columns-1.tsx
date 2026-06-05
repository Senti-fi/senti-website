"use client";

import React from "react";
import { motion } from "motion/react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  key={i}
                  className="w-full max-w-xs rounded-3xl border border-line bg-surface p-8 shadow-[0_20px_50px_-24px_rgba(10,22,40,0.18)]"
                >
                  <p className="text-[15px] leading-[1.6] text-ink-soft">{text}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-senti-blue/15 to-senti-cyan/15 text-[14px] font-semibold text-ink">
                      {name.charAt(0)}
                    </span>
                    <div className="flex flex-col">
                      <div className="text-[14px] font-medium leading-5 tracking-tight text-ink">
                        {name}
                      </div>
                      <div className="text-[13px] leading-5 tracking-tight text-ink-muted">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
