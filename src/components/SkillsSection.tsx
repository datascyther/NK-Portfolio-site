import { motion } from "framer-motion";
import { SectionHeader } from "./Reveal";
import TiltCard from "./TiltCard";
import { skillGroups } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeader
        index="04"
        kicker="Capabilities"
        title="The stack I"
        accent="think in."
      />

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: gi * 0.08 }}
          >
            <TiltCard
              maxTilt={3.5}
              className="group relative h-full border border-neutral-900 rounded-3xl bg-neutral-950/50 p-7 md:p-8 overflow-hidden hover:border-neutral-700 transition-colors duration-500"
            >
            <div className="relative">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-white">
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-neutral-600">
                  0{gi + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + si * 0.04, duration: 0.4 }}
                    className="border border-neutral-800 bg-neutral-950/60 rounded-full px-3.5 py-1.5 text-xs font-mono text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-colors duration-300 cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
