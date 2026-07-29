import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

function Typewriter({ words }: { words: string[] }) {
  const reduced = useReducedMotion();
  const [text, setText] = useState(reduced ? words[0] ?? "" : "");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(words[0] ?? "");
      return;
    }
    const current = words[wordIdx % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), 1600);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setWordIdx((i) => i + 1);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, reduced]);

  return (
    <span className="block max-w-full truncate whitespace-nowrap font-mono text-sm text-neutral-400">
      {text}
      {!reduced && <span className="animate-blink text-white">_</span>}
    </span>
  );
}

function MaskedLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease, delay }}
        className="block will-change-transform"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax only — disabled when reduced motion is preferred
  const yText = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 48]);
  const yImg = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 28]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], reduced ? [1, 1] : [1, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.22], reduced ? [1, 1] : [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-svh flex flex-col overflow-hidden"
    >
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, black, transparent)",
        }}
      />

      {/* vertical rail — desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-6"
      >
        <span className="rail-text font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">
          Portfolio — {new Date().getFullYear()}
        </span>
        <span className="w-px h-16 bg-neutral-800" />
        <span className="rail-text font-mono text-[10px] uppercase tracking-[0.4em] text-neutral-600">
          Delhi, IN
        </span>
      </motion.div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 flex-1 flex flex-col justify-center pt-24 pb-14 md:pt-32 md:pb-16"
      >
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2.5 border border-neutral-800 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
              Open to opportunities
            </span>
          </span>
          <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-600">
            {profile.role}
          </span>
          <span className="hidden md:block font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-600">
            {profile.location}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)] gap-12 lg:gap-14 items-center">
          <div>
            {/* editorial headline */}
            <h1 className="text-[clamp(3.6rem,13vw,6.6rem)] font-bold tracking-tighter leading-[0.96] select-none max-w-[10ch]">
              <MaskedLine delay={0.4}>
                <span className="text-white">I build AI</span>
              </MaskedLine>
              <MaskedLine delay={0.52}>
                <span className="font-serif-display italic font-normal text-neutral-300 tracking-tight">
                  products
                </span>
                <span className="text-white"> that</span>
              </MaskedLine>
              <MaskedLine delay={0.64}>
                <span className="text-stroke">actually ship.</span>
              </MaskedLine>
            </h1>

            {/* motto strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.95 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-neutral-700" />
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-neutral-400">
                {profile.motto.join(" ")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.05 }}
              className="mt-6 max-w-xl text-base md:text-lg text-neutral-400 font-light leading-relaxed"
            >
              I'm <span className="text-white font-medium">{profile.name}</span>{" "}
              — {profile.headline.toLowerCase().replace(/\.$/, "")}. Currently
              crafting{" "}
              <span className="text-white font-medium">Jousapce</span>, an
              AI-powered mental wellness platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.15 }}
              className="mt-4 h-6"
            >
              <Typewriter
                words={[
                  "LLM Apps & RAG Systems",
                  "Full-Stack Engineering",
                  "Agentic Systems",
                  "Product Strategy & Execution",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.25 }}
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3"
            >
              <a
                href="#projects"
                className="primary-cta group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
              >
                <span className="relative z-10">
                  Selected Work
                </span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-neutral-700 rounded-full px-7 py-3.5 text-sm text-neutral-300 hover:border-white hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* portrait — brand image */}
          <motion.div
            style={{ y: yImg }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease, delay: 0.75 }}
            className="relative flex justify-center lg:justify-end order-first lg:order-none"
          >
            <div className="group relative w-52 sm:w-60 md:w-64 lg:w-[19rem]">
              <div className="absolute -inset-3 border border-neutral-800 rounded-[1.4rem] rotate-2 transition-transform duration-700 group-hover:rotate-0" />
              <span className="absolute -top-5 -left-5 w-4 h-4 border-t border-l border-neutral-600" />
              <span className="absolute -bottom-5 -right-5 w-4 h-4 border-b border-r border-neutral-600" />

              <div className="portrait-frame relative rounded-[1.4rem] overflow-hidden bg-white shadow-glow">
                <picture>
                  <source srcSet="/images/portrait.webp" type="image/webp" />
                  <img
                    src="/images/portrait.png"
                    alt={profile.name}
                    width={864}
                    height={1080}
                    fetchPriority="high"
                    decoding="async"
                    sizes="(max-width: 640px) 13rem, (max-width: 768px) 15rem, (max-width: 1024px) 16rem, 19rem"
                    className="relative w-full aspect-[4/5] object-cover object-top grayscale contrast-105 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    draggable={false}
                  />
                </picture>
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              <div className="absolute -bottom-4 -left-2 md:-left-5 bg-[#050505] border border-neutral-800 rounded-xl px-4 py-2.5 shadow-glow">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Currently building
                </p>
                <p className="text-sm font-medium text-white mt-0.5">Jousapce</p>
              </div>
              <div className="absolute -top-4 -right-2 md:-right-5 bg-[#050505] border border-neutral-800 rounded-full px-4 py-1.5 shadow-glow">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-300">
                  NK
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* bottom scroll-cue bar — own layout row, hairline-separated, never overlapped */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        style={{ opacity: cueOpacity }}
        className="relative z-10 mt-auto border-t border-neutral-900 bg-[#050505]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 h-14 grid grid-cols-2 sm:grid-cols-3 items-center gap-6">
          <span className="justify-self-start font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600 whitespace-nowrap">
            Scroll to explore
          </span>
          <motion.span
            animate={reduced ? undefined : { y: [0, 5, 0] }}
            transition={
              reduced
                ? undefined
                : { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
            }
            className="hidden sm:block justify-self-center w-px h-6 bg-gradient-to-b from-neutral-500 to-transparent"
          />
          <span className="justify-self-end font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600 whitespace-nowrap">
            ↓ 01 — About
          </span>
        </div>
      </motion.div>
    </section>
  );
}
