import { useRef, useCallback } from "react";
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

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

function AmbientDiv() {
  const velocity = useRef(useMotionValue(0)).current;

  const onScroll = useCallback((lenis: any) => {
    velocity.set(lenis.velocity);
  }, [velocity]);

  useLenis(onScroll, [onScroll]);

  const smoothVelocity = useSpring(velocity, {
    stiffness: 260,
    damping: 38,
    mass: 0.6,
  });
  const ambientY = useTransform(smoothVelocity, (v) => clamp(v * 0.22, -90, 90));
  const ambientOpacity = useTransform(smoothVelocity, (v) =>
    clamp(Math.abs(v) * 0.006, 0, 0.22),
  );

  return (
    <motion.div
      aria-hidden
      style={{ y: ambientY, opacity: ambientOpacity }}
      className="pointer-events-none fixed left-0 right-0 top-1/2 z-[5] h-40 -translate-y-1/2 bg-gradient-to-b from-transparent via-neutral-800 to-transparent blur-3xl will-change-transform"
    />
  );
}

export default function App() {
  return (
    <Lenis
      root
      options={{
        lerp: 0.085,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.6,
        syncTouch: false,
        anchors: { offset: -64 },
      }}
      autoRaf
    >
      <AmbientDiv />
      <div className="grain relative min-h-screen bg-[#050505] text-neutral-100">
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
