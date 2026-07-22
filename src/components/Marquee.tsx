import { marqueeItems } from "../data/portfolio";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="relative border-y border-neutral-900 py-5 overflow-hidden bg-[#0a0a0a]"
      aria-hidden
    >
      <div className="flex whitespace-nowrap animate-marquee w-max will-change-transform">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-sm md:text-base uppercase tracking-[0.25em] text-neutral-500 font-light">
              {item}
            </span>
            <span className="mx-6 md:mx-10 text-neutral-700">✦</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#050505] to-transparent" />
    </div>
  );
}
