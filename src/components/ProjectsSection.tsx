import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import TiltCard from "./TiltCard";
import { projects, type Project } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectCard({
  p,
  i,
  featured = false,
}: {
  p: Project;
  i: number;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(featured);

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease, delay: (i % 2) * 0.08 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <TiltCard
        maxTilt={featured ? 2.5 : 4}
        className="group h-full border border-neutral-900 rounded-3xl bg-neutral-950/50 hover:border-neutral-700 transition-colors duration-500 overflow-hidden"
      >
        <div className="p-7 md:p-9 flex flex-col h-full">
          {/* header row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <span className="font-mono text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors">
              /{p.index}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {p.featured && (
                <span className="rounded-full border border-neutral-700 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-300">
                  ★ Flagship
                </span>
              )}
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                {p.period}
              </span>
            </div>
          </div>

          {/* title */}
          <h3
            className={`mt-5 font-bold tracking-tighter text-white transition-transform duration-500 group-hover:translate-x-1 ${
              featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            {p.title}
          </h3>

          <p className="mt-4 text-neutral-400 font-light leading-relaxed max-w-2xl">
            {p.summary}
          </p>

          {/* expandable highlights */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="hl"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.55, ease }}
                className="overflow-hidden"
              >
                <ul className="pt-6 space-y-2.5">
                  {p.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + j * 0.06, duration: 0.45 }}
                      className="flex gap-3 text-sm text-neutral-400 font-light"
                    >
                      <span className="text-neutral-600 mt-0.5">→</span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* footer */}
          <div className="mt-auto pt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-2 sm:max-w-[78%]">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="border border-neutral-800 bg-neutral-950/60 rounded-full px-3 py-1 text-[11px] font-mono text-neutral-400 group-hover:text-neutral-300 group-hover:border-neutral-700 transition-colors duration-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <button
              onClick={() => setOpen(!open)}
              data-cursor
              className="shrink-0 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300"
              aria-expanded={open}
            >
              {open ? "Less" : "Details"}
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.35, ease }}
                className="text-base leading-none"
              >
                +
              </motion.span>
            </button>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeader
        index="03"
        kicker="Selected Work"
        title="Projects that"
        accent="ship."
      />

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        <ProjectCard p={featured} i={0} featured />
        {rest.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i + 1} />
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12">
        <a
          href="https://github.com/DataScyther"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 border border-neutral-800 rounded-full px-7 py-3.5 font-mono text-xs uppercase tracking-[0.25em] text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          Full archive on GitHub
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </Reveal>
    </section>
  );
}
