import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

/**
 * Interactive card: 3D tilt toward the cursor + spotlight glow that
 * tracks the pointer via CSS custom properties.
 * Desktop fine-pointer only; rAF-coalesced; zero cost on touch devices.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 5,
  style,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabledRef = useRef(false);
  const rafRef = useRef(0);
  const pendingRef = useRef<{ px: number; py: number } | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      enabledRef.current = fine.matches && !reduced.matches;
    };
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const apply = (px: number, py: number) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * maxTilt}deg) rotateY(${(px - 0.5) * maxTilt}deg) translateZ(0)`;
  };

  const onMove = (e: React.MouseEvent) => {
    if (!enabledRef.current) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    pendingRef.current = { px, py };
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const next = pendingRef.current;
      if (next) apply(next.px, next.py);
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    pendingRef.current = null;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`spotlight-card transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
