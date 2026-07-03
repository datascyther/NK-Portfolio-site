import { motion } from "framer-motion";
import { Reveal, SectionHeader, TextReveal } from "./Reveal";
import TiltCard from "./TiltCard";
import { profile, stats } from "../data/portfolio";

function StatCard({ value, label, i }: { value: string; label: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="group h-full border border-neutral-900 rounded-2xl p-6 hover:border-neutral-700 bg-neutral-950/50 transition-colors duration-500">
        <p className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          {value}
        </p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400 transition-colors">
          {label}
        </p>
      </TiltCard>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeader
        index="01"
        kicker="About"
        title="Products over"
        accent="titles."
      />

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-24">
        <div>
          <h3 className="text-2xl md:text-[2.6rem] font-light tracking-tight leading-[1.2] text-neutral-200">
            <TextReveal text={profile.about[0]} />
          </h3>

          <div className="mt-10 space-y-5 max-w-2xl">
            {profile.about.slice(1).map((p, i) => (
              <Reveal key={i} delay={i * 0.07} y={22}>
                <p className="text-neutral-400 leading-relaxed font-light">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Top skills
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.topSkills.map((s) => (
                <span
                  key={s}
                  className="border border-neutral-800 rounded-full px-4 py-1.5 text-xs font-mono text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal y={30}>
            <div className="border border-neutral-900 rounded-2xl p-7 md:p-8 bg-neutral-950/50">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6">
                My work sits at the intersection of
              </p>
              <ul className="space-y-4">
                {profile.focus.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.09, duration: 0.6 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <span className="font-mono text-xs text-neutral-600 group-hover:text-white transition-colors">
                      0{i + 1}
                    </span>
                    <span className="h-px w-6 bg-neutral-800 group-hover:w-10 group-hover:bg-white transition-all duration-300" />
                    <span className="text-neutral-200 group-hover:translate-x-1 transition-transform duration-300">
                      {f}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} i={i} />
            ))}
          </div>

          <Reveal y={24}>
            <p className="font-serif-display italic text-xl md:text-2xl text-neutral-400 leading-snug border-l border-neutral-800 pl-6">
              "Building useful products is more important than collecting
              titles."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
