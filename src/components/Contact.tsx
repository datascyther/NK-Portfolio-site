import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { Arrow, FadeIn } from "./Editorial";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timerRef.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyFailed(false);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyFailed(true);
    }
  };
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <FadeIn className="contact-main">
          <p className="availability">
            <span /> Open to AI & product engineering roles
          </p>
          <a className="contact-heading" href={`mailto:${profile.email}`}>
            <h2>
              Good products start
              <br />
              with a <span className="type-accent">conversation.</span>
            </h2>
            <Arrow diagonal />
          </a>
          <div className="contact-bottom">
            <p>
              I’m looking for a team where product thinking
              <br className="desktop-break" /> and engineering depth belong
              together.
            </p>
            <div className="contact-email">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button
                className="copy-email"
                onClick={copyEmail}
                aria-label={
                  copied ? "Email address copied" : "Copy email address"
                }
                title="Copy email address"
              >
                {copied ? (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                ) : (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="8" y="8" width="12" height="12" rx="2" />
                    <path d="M16 8V4H4v12h4" />
                  </svg>
                )}
              </button>
              <span className="copy-status" role="status">
                {copied
                  ? "Copied"
                  : copyFailed
                    ? "Select the address to copy"
                    : ""}
              </span>
            </div>
          </div>
          <div className="hiring-links">
            <a className="text-link" href={profile.resume} download>
              Download résumé <Arrow diagonal />
            </a>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow diagonal />
            </a>
          </div>
        </FadeIn>
        <footer className="site-footer">
          <a className="footer-name" href="#top">
            {profile.name}
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
          </a>
          <div className="footer-links">
            {[
              { label: "GitHub", href: profile.github },
              { label: "LinkedIn", href: profile.linkedin },
              { label: "YouTube", href: profile.youtube },
              { label: "X", href: profile.x },
              { label: "Instagram", href: profile.instagram },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <Arrow diagonal />
              </a>
            ))}
          </div>
          <a className="back-top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
    </section>
  );
}
