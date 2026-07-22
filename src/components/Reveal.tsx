import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word masked text reveal */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.035,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: "110%" },
    visible: { y: "0%", transition: { duration: 0.7, ease } },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
        >
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}

/** Section label like "01 — ABOUT" */
export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <Reveal y={20}>
      <div className="flex items-center gap-4 mb-10 md:mb-16">
        <span className="font-mono text-xs text-neutral-500 tracking-widest">{index}</span>
        <span className="h-px flex-1 max-w-16 bg-neutral-800" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
          {title}
        </span>
      </div>
    </Reveal>
  );
}

/**
 * Editorial section header — kicker row + oversized display title with a
 * serif italic accent word, and an animated hairline.
 */
export function SectionHeader({
  index,
  kicker,
  title,
  accent,
  after,
}: {
  index: string;
  kicker: string;
  title: string;
  accent?: string;
  after?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="mb-14 md:mb-20">
      <Reveal y={16}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-neutral-500 tracking-widest">
            ({index})
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-400">
            {kicker}
          </span>
          {reduced ? (
            <span className="h-px flex-1 bg-neutral-800" />
          ) : (
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease, delay: 0.15 }}
              className="h-px flex-1 bg-neutral-800 origin-left"
            />
          )}
        </div>
      </Reveal>
      <h2 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.02]">
        <TextReveal text={title} delay={0.1} />{" "}
        {accent && (
          <span className="font-serif-display italic font-normal text-neutral-400 tracking-tight">
            <TextReveal text={accent} delay={0.25} />
          </span>
        )}
        {after && (
          <>
            {" "}
            <TextReveal text={after} delay={0.35} />
          </>
        )}
      </h2>
    </div>
  );
}
