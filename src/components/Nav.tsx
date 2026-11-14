import { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { Arrow } from "./Editorial";
import { profile } from "../data/portfolio";

const links = [
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = links.map((link) => ({
      href: link.href,
      element: document.querySelector(link.href),
    }));
    const update = () => {
      let current = "";
      for (const section of sections) {
        if (
          section.element &&
          section.element.getBoundingClientRect().top <=
            window.innerHeight * 0.35
        ) {
          current = section.href;
        }
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const items = menu?.querySelectorAll<HTMLAnchorElement>("a");
    items?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === "Tab" && items?.length) {
        if (event.shiftKey && document.activeElement === items[0]) {
          event.preventDefault();
          triggerRef.current?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === items[items.length - 1]
        ) {
          event.preventDefault();
          triggerRef.current?.focus();
        }
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !menu?.contains(event.target) &&
        !triggerRef.current?.contains(event.target)
      )
        setOpen(false);
    };
    const breakpoint = window.matchMedia("(min-width: 760px)");
    const onResize = () => {
      if (breakpoint.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    breakpoint.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      breakpoint.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#top"
          aria-label={`${profile.name}, back to top`}
          onClick={() => setActive("")}
        >
          {profile.name}
        </a>
        <div className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "location" : undefined}
              onClick={() => setActive(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a href={profile.resume} className="nav-contact" download>
            Résumé <Arrow diagonal />
          </a>
          <a href="#contact" className="nav-contact">
            Contact <Arrow diagonal />
          </a>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {theme === "dark" ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
                </>
              ) : (
                <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
              )}
            </svg>
          </button>
          <button
            ref={triggerRef}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
            <span className="menu-lines" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
        {open && (
          <div className="mobile-nav" id="mobile-navigation" ref={menuRef}>
            <a href={profile.resume} download onClick={() => setOpen(false)}>
              <span className="mobile-nav-label">Download résumé</span>
              <Arrow diagonal />
            </a>
            {[...links, { label: "Contact", href: "#contact" }].map(
              (link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active === link.href ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="mobile-nav-label">
                    <span className="mobile-nav-index" aria-hidden="true">
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>
                  <Arrow diagonal />
                </a>
              ),
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
