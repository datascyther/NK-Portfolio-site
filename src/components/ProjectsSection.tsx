import { useRef, useState } from "react";
import {
  engineeringDecisions,
  flagship,
  pipeline,
  projects,
} from "../data/portfolio";
import { Arrow, FadeIn, SectionIntro } from "./Editorial";

const sourceUrl = (path: string) => `${flagship.repository}/blob/main/${path}`;

function ProductGallery() {
  const [selected, setSelected] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const shot = flagship.screenshots[selected];
  return (
    <div className="product-gallery">
      <div className="plate-heading">
        <span>Jouspace / Product preview</span>
        <span>Web + Android</span>
      </div>
      <button
        className="product-image-button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Enlarge Jouspace ${shot.name} image`}
      >
        <img
          key={shot.image}
          className="product-image"
          src={shot.image}
          alt={shot.alt}
          width="1254"
          height="1254"
          fetchPriority="high"
          sizes="(max-width: 760px) 100vw, 60vw"
        />
        <span className="image-expand" aria-hidden="true">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
          </svg>
        </span>
      </button>
      <div
        className="gallery-controls"
        role="group"
        aria-label="Jouspace product views"
      >
        {flagship.screenshots.map((item, index) => (
          <button
            key={item.name}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span className="gallery-number">0{index + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
      <div className="plate-caption" aria-live="polite">
        <span className="plate-index">0{selected + 1}</span>
        <p className="gallery-caption">{shot.caption}</p>
      </div>
      <dialog
        className="image-dialog"
        ref={dialogRef}
        aria-label={`Jouspace ${shot.name} image`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <button
          className="dialog-close"
          onClick={() => dialogRef.current?.close()}
          autoFocus
        >
          Close <span aria-hidden="true">×</span>
        </button>
        <img src={shot.image} alt={shot.alt} width="1254" height="1254" />
        <p>{shot.caption}</p>
      </dialog>
    </div>
  );
}

function Architecture() {
  const [stage, setStage] = useState(0);
  const current = pipeline[stage];
  return (
    <div className="architecture">
      <div className="architecture-heading">
        <p className="eyebrow">Under the interface</p>
        <h4>
          From entry to <span className="type-accent">insight.</span>
        </h4>
        <p>Five stages. One clear request lifecycle.</p>
      </div>
      <div className="architecture-body">
        <div
          className="pipeline"
          role="group"
          aria-label="Explore the AI request pipeline"
        >
          {pipeline.map((item, index) => (
            <button
              key={item.name}
              aria-pressed={stage === index}
              onClick={() => setStage(index)}
            >
              <span>0{index + 1}</span>
              {item.name}
              {index < pipeline.length - 1 && (
                <span className="pipeline-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="pipeline-detail" aria-live="polite">
          <div>
            <p className="eyebrow">{current.label}</p>
            <p>{current.detail}</p>
          </div>
          <a
            className="source-path"
            href={sourceUrl(current.path)}
            target="_blank"
            rel="noreferrer"
          >
            <code>{current.path}</code>
            <Arrow diagonal />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="work" className="shell section work-section">
      <SectionIntro
        number="01"
        label="What I’ve built"
        title={
          <>
            Ideas, <span className="type-accent">made real.</span>
          </>
        }
      >
        An independent product, spanning the user experience, AI runtime, and
        release engineering.
      </SectionIntro>
      <article
        id="jouspace"
        className="flagship"
        aria-labelledby="jouspace-title"
      >
        <FadeIn className="flagship-main">
          <div className="project-intro">
            <div className="project-kicker">
              <span className="eyebrow">Featured project / 001</span>
              <span className="project-open-source">
                <span /> Open source
              </span>
            </div>
            <div>
              <h3 id="jouspace-title">
                Jouspace<span className="project-title-dot">.</span>
              </h3>
              <p className="project-tagline">
                A quieter space.
                <br /> A little more{" "}
                <span className="type-accent">perspective.</span>
              </p>
              <p className="project-description">
                A journal that connects your thoughts over time. Writing stays
                on your device by default; optional sync and AI reflections add
                context when you choose.
              </p>
            </div>
            <dl className="project-specs">
              <div>
                <dt>My role</dt>
                <dd>{flagship.role}</dd>
              </div>
              <div>
                <dt>Platforms</dt>
                <dd>{flagship.platforms}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Product, systems & experience</dd>
              </div>
            </dl>
            <div className="project-links">
              <a
                className="button button-primary"
                href={flagship.website}
                target="_blank"
                rel="noreferrer"
              >
                Open web app <Arrow diagonal />
              </a>
              <a
                className="text-link"
                href={flagship.repository}
                target="_blank"
                rel="noreferrer"
              >
                View source <Arrow diagonal />
              </a>
            </div>
            <p className="project-stack">
              React / TypeScript / Capacitor
              <br />
              Firebase / Cloudflare Workers / NVIDIA NIM
            </p>
          </div>
          <ProductGallery />
        </FadeIn>
        <FadeIn className="engineering-section">
          <div className="engineering-header">
            <p className="eyebrow">The engineering behind it</p>
            <a
              className="text-link"
              href={`${flagship.repository}/blob/main/PROJECT_OVERVIEW.md`}
              target="_blank"
              rel="noreferrer"
            >
              Technical overview <Arrow diagonal />
            </a>
          </div>
          <div className="decision-grid">
            {engineeringDecisions.map((decision) => (
              <a
                key={decision.number}
                className="decision"
                href={sourceUrl(decision.path)}
                target="_blank"
                rel="noreferrer"
              >
                <div className="decision-top">
                  <span className="eyebrow">{decision.number}</span>
                  <Arrow diagonal />
                </div>
                <h4>{decision.title}</h4>
                <p>{decision.description}</p>
                <span className="decision-source">
                  Explore the implementation
                </span>
              </a>
            ))}
          </div>
          <div className="decision-story">
            <div>
              <p className="eyebrow">One engineering trade-off</p>
              <h4>Writing first. Sync second.</h4>
            </div>
            <div className="decision-story-copy">
              <p><strong>The problem.</strong> Saving a journal entry should not depend on a round trip to a server.</p>
              <p><strong>The choice.</strong> A cloud-first design would put the network on the write path. Jouspace instead reads and writes locally, with optional Firestore sync running in the background.</p>
              <p><strong>The cost.</strong> Sync needs its own conflict and deletion handling. The implementation uses timestamp-based merges and deletion tombstones; it does not merge concurrent edits character by character. AI reflections and cloud sync still need a connection.</p>
              <a className="text-link" href={sourceUrl("src/store/cloudSync.ts")} target="_blank" rel="noreferrer">Read the sync implementation <Arrow diagonal /></a>
            </div>
          </div>
          <Architecture />
          <details className="project-notes">
            <summary>
              Scope & product boundaries <span aria-hidden="true">+</span>
            </summary>
            <div className="scope-grid">
              <div>
                <h4>Built and available</h4>
                <p>
                  Local journal storage, theme-based memory threads, optional
                  Firebase sync, five streamed AI capabilities, and a shared web
                  and Android codebase with automated checks.
                </p>
              </div>
              <div>
                <h4>Deliberate boundaries</h4>
                <p>
                  AI reflections and cloud sync require a network. Entries sent
                  to AI leave the device for processing. Local storage is not
                  encrypted at rest; a web service worker and additional model
                  providers remain roadmap work.
                </p>
                <a
                  className="text-link"
                  href={`${flagship.repository}/blob/main/PROJECT_OVERVIEW.md`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the documented scope <Arrow diagonal />
                </a>
              </div>
            </div>
          </details>
        </FadeIn>
      </article>
      <FadeIn className="other-work">
        <div className="other-work-heading">
          <p className="eyebrow">Further explorations</p>
          <span className="eyebrow">Interaction</span>
        </div>
        {projects.slice(1).map((project) => (
          <details className="project-row" key={project.index}>
            <summary>
              <span className="project-row-index">/{project.index}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.stack.slice(0, 4).join(" / ")}</p>
              </div>
              <span className="project-row-period">{project.period}</span>
              <span className="details-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="project-row-body">
              <p>{project.summary}</p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </FadeIn>
    </section>
  );
}
