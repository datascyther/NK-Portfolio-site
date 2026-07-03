import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { profile } from "../data/portfolio";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "X / Twitter", value: "@datascythers", href: profile.x },
  { label: "GitHub", value: "DataScyther", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <Reveal y={16}>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <span className="font-mono text-[11px] text-neutral-500 tracking-widest">
              (06)
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-400">
              Contact
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="h-px flex-1 bg-neutral-800 origin-left"
            />
            <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              Replying fast
            </span>
          </div>
        </Reveal>

        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="group block"
            aria-label="Email Nishant"
          >
            <h2 className="text-[13vw] md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.98]">
              <span className="block text-white transition-colors duration-500 group-hover:text-neutral-300">
                Let's build{" "}
                <span className="font-serif-display italic font-normal text-neutral-400">
                  something
                </span>
              </span>
              <span className="block text-stroke transition-all duration-500 group-hover:[-webkit-text-stroke-color:rgba(245,245,245,0.6)]">
                useful together.
              </span>
            </h2>
          </a>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 max-w-lg">
          <p className="text-neutral-400 font-light leading-relaxed">
            Seeking opportunities to contribute to AI products, agentic systems,
            and production-grade software. If that sounds like your team — say hi.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900 rounded-2xl overflow-hidden">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#050505] p-7 md:p-8 hover:bg-neutral-950 transition-colors duration-500"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                {l.label}
              </p>
              <p className="mt-3 text-white font-medium flex items-center gap-2 break-all">
                {l.value}
                <span className="text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-white">
                  ↗
                </span>
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* footer */}
      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-neutral-600">
            © {new Date().getFullYear()} {profile.name} · {profile.pronouns}
          </p>
          <p className="font-mono text-xs text-neutral-600">
            {profile.motto.join(" ")} — {profile.location.split(",")[0]}
          </p>
          <a
            href="#top"
            className="font-mono text-xs text-neutral-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            Back to top <span className="inline-block">↑</span>
          </a>
        </div>
      </footer>
    </section>
  );
}
