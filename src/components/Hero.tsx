import { profile } from "../data/portfolio";
import { Arrow, FadeIn } from "./Editorial";

export default function Hero() {
  return (
    <section
      id="top"
      className="shell hero personal-hero"
      aria-labelledby="hero-title"
    >
      <FadeIn className="personal-hero-grid">
        <div className="personal-intro">
          <div className="hero-identity">
            <img
              src="/images/about-portrait.png"
              width="80"
              height="80"
              alt="NK"
              fetchPriority="high"
            />
            <div>
              <p className="eyebrow">A little about me</p>
              <p className="hero-identity-role">
                Independent developer · AI products
              </p>
            </div>
          </div>
          <h1 id="hero-title">
            Hi, I’m {profile.name}.<br />I build AI products.
          </h1>
        </div>
        <div className="hero-summary">
          <p>
            I build AI products from idea to release. My flagship project,{" "}
            <a href="#jouspace">Jouspace</a>, brings together local-first
            journaling, connected memories, and AI reflections.
          </p>
          <p>
            I also explain AI and technology to a YouTube audience of 170K+.
          </p>
          <div className="hero-links">
            <a className="button button-primary" href="#work">
              See what I’ve built <Arrow />
            </a>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
          </div>
        </div>
      </FadeIn>
      <div className="hero-footnote">
        <span className="eyebrow">Based in {profile.location}</span>
        <a href="#work" className="eyebrow">
          What I’ve built <span aria-hidden="true">↓</span>
        </a>
        <span className="eyebrow edition">
          Portfolio / {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
