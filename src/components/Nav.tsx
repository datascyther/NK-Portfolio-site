import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 hover:border-white hover:text-white transition-all duration-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            /* sun */
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M18.7 5.3l-1.55 1.55M6.85 17.15L5.3 18.7" />
            </svg>
          ) : (
            /* moon */
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-[80]"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-[70] transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[#050505]/70 border-b border-neutral-900"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm tracking-widest select-none group">
            <span className="text-white font-semibold">NK</span>
            <span className="text-neutral-500 group-hover:text-white transition-colors duration-300">
              /kumar
            </span>
          </a>

          {/* desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-[13px] uppercase tracking-[0.18em] text-neutral-400 hover:text-white transition-colors duration-300 group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:hello.nishantk@proton.me"
              className="inline-flex items-center gap-2 border border-neutral-700 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              Available
            </a>
          </div>

          {/* mobile: theme toggle + burger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
              aria-label="Menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-white"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[65] bg-[#050505] flex flex-col justify-center px-8 lg:hidden"
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-3 border-b border-neutral-900"
                  >
                    <span className="font-mono text-xs text-neutral-600">0{i + 1}</span>
                    <span className="text-4xl font-light tracking-tight text-white">
                      {l.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="mailto:hello.nishantk@proton.me"
              className="mt-10 font-mono text-sm text-neutral-500"
            >
              hello.nishantk@proton.me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
