import { experiences } from "../data/portfolio";
import { FadeIn, SectionIntro } from "./Editorial";

export default function ExperienceSection() {
  return (
    <section id="experience" className="shell section experience-section">
      <SectionIntro
        number="02"
        label="Experience"
        title={
          <>
            Building products.
            <br />
            <span className="type-accent">Understanding people.</span>
          </>
        }
      >
        Independent development, an AI-native founder’s office, and a YouTube
        audience built through continuous experimentation.
      </SectionIntro>
      <div className="experience-list">
        {experiences.map((experience) => (
          <FadeIn key={experience.company} className="experience-row">
            <div className="experience-period">
              <p>{experience.period}</p>
              <span>
                {experience.location}
                {experience.mode ? ` · ${experience.mode}` : ""}
              </span>
            </div>
            <div className="experience-content">
              <div className="experience-title">
                <h3>{experience.role}</h3>
                {experience.current && (
                  <span className="current-label">Current</span>
                )}
              </div>
              <p className="experience-company">
                {experience.company}
                {experience.type && <span> / {experience.type}</span>}
              </p>
              <p className="experience-description">{experience.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
