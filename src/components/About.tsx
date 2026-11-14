import { education, profile } from "../data/portfolio";
import { Arrow, FadeIn } from "./Editorial";

export default function About() {
  return (
    <section id="about" className="shell section about-section">
      <FadeIn className="about-aside">
        <p className="eyebrow section-index">
          <span>03</span> Behind the work
        </p>
        <p className="about-name">{profile.fullName}</p>
        <p className="about-location">{profile.location}</p>
        <a
          className="text-link"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn <Arrow diagonal />
        </a>
      </FadeIn>
      <FadeIn className="about-copy">
        <h2>
          I like understanding
          <br />
          <span className="type-accent">the whole thing.</span>
        </h2>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="education">
          <span className="eyebrow">Currently studying</span>
          <h3>{education.degree}</h3>
          <p>{education.field}</p>
          <p>{education.school}</p>
          <span className="education-period">{education.period}</span>
        </div>
      </FadeIn>
    </section>
  );
}
