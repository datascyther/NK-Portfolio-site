import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./Reveal";
import { experiences } from "../data/portfolio";

export default function ExperienceSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeader
        index="02"
        kicker="Experience"
        title="Where I've"
        accent="built."
      />

      <div className="relative">
        {/* timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 origin-top"
        />

        <div className="space-y-14 md:space-y-20">
          {experiences.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16"
              >
                {/* dot */}
                <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 flex items-center justify-center">
                  <span
                    className={`w-[15px] h-[15px] rounded-full border-2 transition-colors duration-300 ${
                      exp.current
                        ? "border-white bg-[#050505]"
                        : "border-neutral-600 bg-[#050505]"
                    }`}
                  />
                  {exp.current && (
                    <span className="absolute w-[15px] h-[15px] rounded-full border border-white animate-ping opacity-40" />
                  )}
                </span>

                {/* content card — alternate sides on desktop */}
                <div
                  className={`${left ? "md:col-start-1" : "md:col-start-2"}`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div
                    className={`group border rounded-2xl p-6 md:p-7 transition-all duration-500 cursor-default ${
                      active === i
                        ? "border-neutral-600 bg-neutral-950"
                        : "border-neutral-900 bg-transparent"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-start gap-2 mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                        {exp.period}
                      </span>
                      <span className="text-neutral-700">·</span>
                      <span className="font-mono text-[11px] text-neutral-600">
                        {exp.duration}
                      </span>
                      {exp.current && (
                        <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-emerald-900/60 bg-emerald-950/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse-dot" />
                          Now
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-neutral-400">
                      {exp.company}
                      <span className="text-neutral-600"> · {exp.type}</span>
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-neutral-600">
                      {exp.location} · {exp.mode}
                    </p>
                    <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* big company name on opposite side (desktop only) */}
                <div
                  className={`hidden md:flex items-center ${
                    left ? "md:col-start-2" : "md:col-start-1 md:row-start-1 md:justify-end"
                  }`}
                >
                  <motion.span
                    animate={{
                      opacity: active === i ? 1 : 0.18,
                      x: active === i ? (left ? 8 : -8) : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="max-w-full truncate text-4xl lg:text-5xl font-bold tracking-tighter text-stroke select-none"
                  >
                    {exp.company}
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
