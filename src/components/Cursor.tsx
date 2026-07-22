import { useEffect, useRef } from "react";

/**
 * Difference-blend custom cursor: instant dot + trailing ring.
 * Desktop fine-pointer only. RAF idles when the tab is hidden or
 * the pointer has not moved recently (saves battery / main-thread time).
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let rafId = 0;
    let running = false;
    let idleTimer = 0;
    let lastMove = 0;

    const stopLoop = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      running = false;
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      const half = ring.offsetWidth / 2;
      ring.style.transform = `translate3d(${rx - half}px, ${ry - half}px, 0)`;

      // Settle when ring is close enough to the target
      const settled = Math.abs(x - rx) < 0.15 && Math.abs(y - ry) < 0.15;
      if (settled && performance.now() - lastMove > 120) {
        stopLoop();
        return;
      }
      rafId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (running || document.hidden) return;
      running = true;
      rafId = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      lastMove = performance.now();
      dot.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      startLoop();
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(stopLoop, 400);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("a, button, [data-cursor], input, textarea, select");
      ring.classList.toggle("is-hovering", !!interactive);
    };

    const onVisibility = () => {
      if (document.hidden) stopLoop();
    };

    // Hide the system cursor while custom cursor is active
    document.documentElement.classList.add("has-custom-cursor");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearTimeout(idleTimer);
      stopLoop();
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div className="hidden md:block" aria-hidden>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
