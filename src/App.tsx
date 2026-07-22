import { useCallback, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Lenis, useLenis } from "lenis/react";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import { useFinePointer, usePrefersReducedMotion } from "./hooks/useMedia";

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setTouch(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return touch;
}

function AmbientDiv() {
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const velocity = useMotionValue(0);

  const onScroll = useCallback(
    (lenis: { velocity: number }) => {
      if (!finePointer || reducedMotion) return;
      velocity.set(lenis.velocity);
    },
    [velocity, finePointer, reducedMotion],
  );

  useLenis(onScroll, [onScroll]);

  const smoothVelocity = useSpring(velocity, {
    stiffness: 260,
    damping: 38,
    mass: 0.6,
  });
  const ambientY = useTransform(smoothVelocity, (v) =>
    clamp(v * 0.22, -90, 90),
  );
  const ambientOpacity = useTransform(smoothVelocity, (v) =>
    clamp(Math.abs(v) * 0.006, 0, 0.22),
  );

  if (!finePointer || reducedMotion) return null;

  return (
    <motion.div
      aria-hidden
      style={{ y: ambientY, opacity: ambientOpacity }}
      className="pointer-events-none fixed left-0 right-0 top-1/2 z-[5] h-40 -translate-y-1/2 bg-gradient-to-b from-transparent via-neutral-800 to-transparent blur-3xl will-change-transform"
    />
  );
}

export default function App() {
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  return (
    <Lenis
      root
      options={{
        // Instant when reduced-motion; snappier on touch; buttery on desktop
        lerp: reducedMotion ? 1 : isTouch ? 0.12 : 0.085,
        wheelMultiplier: reducedMotion ? 1 : 0.95,
        touchMultiplier: 1.45,
        // Native touch scrolling is the smoothest path on iOS/Android
        syncTouch: false,
        overscroll: false,
        anchors: { offset: -64 },
        autoResize: true,
        smoothWheel: !reducedMotion,
      }}
      autoRaf
    >
      <AmbientDiv />
      <div className="grain relative min-h-svh bg-[#050505] text-neutral-100">
        <Cursor />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <Marquee />
          <About />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <Contact />
        </main>
      </div>
    </Lenis>
  );
}
