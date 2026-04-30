import { useState } from "react";
import { Link } from "react-router-dom";

import proj1a from "../assets/proj1a.jpg";
import proj1b from "../assets/proj1b.jpg";
import proj1c from "../assets/proj1c.jpg";
import proj1d from "../assets/proj1d.jpg";
import proj1e from "../assets/proj1e.jpg";
import proj1f from "../assets/proj1f.jpg";
import proj1g from "../assets/proj1g.jpg";
import proj1h from "../assets/proj1h.jpg";
import proj1i from "../assets/proj1i.jpg";
import proj1j from "../assets/proj1j.jpg";
import proj1k from "../assets/proj1k.jpg";

import proj2a from "../assets/proj2a.jpg";
import proj2b from "../assets/proj2b.jpg";
import proj2c from "../assets/proj2c.jpg";
import proj2d from "../assets/proj2d.jpg";
import proj2e from "../assets/proj2e.jpg";
import proj2f from "../assets/proj2f.jpg";

import proj3a from "../assets/proj3a.jpg";
import proj3b from "../assets/proj3b.jpg";
import proj3c from "../assets/proj3c.jpg";
import proj3d from "../assets/proj3d.jpg";
import proj3e from "../assets/proj3e.jpg";
import proj3f from "../assets/proj3f.jpg";
import proj3g from "../assets/proj3g.jpg";
import proj3h from "../assets/proj3h.jpg";
import proj3i from "../assets/proj3i.jpg";

const projects = [
  {
    title: "Commercial Transformer Installation",
    location: "Toronto, ON",
    tag: "Commercial",
    description:
      "Full transformer rack installation and conduit routing for a large-scale commercial facility in Toronto. Work included structural steel mounting, three-phase transformer setup, and complete conduit runs — all to Canadian Electrical Code standards.",
    images: [proj1a, proj1b, proj1c, proj1d, proj1e, proj1f, proj1g, proj1h, proj1i, proj1j, proj1k],
  },
  {
    title: "Healthy Planet — Commercial Fit-Out",
    location: "Toronto, ON",
    tag: "Commercial",
    description:
      "Complete electrical fit-out for a Healthy Planet retail location in Toronto. Scope included panel installation, transformer mounting, conduit and wire runs, distribution wiring, and full lighting — completed on schedule alongside the general contractor.",
    images: [proj2a, proj2b, proj2c, proj2d, proj2e, proj2f],
  },
  {
    title: "Commercial Electrical — Toronto",
    location: "Toronto, ON",
    tag: "Commercial",
    description:
      "Large-scale commercial electrical installation including transformer mounting, conduit routing, panel work, and full distribution wiring. All work completed to Canadian Electrical Code standards and inspected on site.",
    images: [proj3a, proj3b, proj3c, proj3d, proj3e, proj3f, proj3g, proj3h, proj3i],
  },
];

function ProjectCard({ title, location, tag, description, images }) {
  const [active, setActive] = useState(0);
  const hasImages = images && images.length > 0;

  return (
    <div className="project-card">

      {/* Info — always on top */}
      <div className="project-info">
        <span className="project-tag">{tag}</span>
        <h2 className="project-title">{title}</h2>
        <p className="project-location">📍 {location}</p>
        <p className="project-desc">{description}</p>
        <Link to="/contact" className="project-link">Request similar work →</Link>
      </div>

      {/* Images */}
      {hasImages ? (
        <div className="project-img-wrap">
          <img
            src={images[active]}
            alt={`${title} ${active + 1}`}
            className="project-img"
          />
          {images.length > 1 && (
            <>
              <button className="img-arrow img-arrow-l" onClick={() => setActive((active - 1 + images.length) % images.length)}>‹</button>
              <button className="img-arrow img-arrow-r" onClick={() => setActive((active + 1) % images.length)}>›</button>
              <div className="img-counter">{active + 1} / {images.length}</div>
              <div className="img-dots">
                {images.map((_, i) => (
                  <button key={i} className={`img-dot${i === active ? " dot-active" : ""}`} onClick={() => setActive(i)} />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="project-img-placeholder">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="6" width="28" height="20" rx="3" stroke="#ddd" strokeWidth="1.5" fill="none"/>
            <circle cx="10" cy="13" r="2.5" stroke="#ddd" strokeWidth="1.5" fill="none"/>
            <path d="M2 22l7-6 5 5 4-4 7 7" stroke="#ddd" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
          <span className="placeholder-text">Photos coming soon</span>
        </div>
      )}

    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; }
        .pp { font-family: 'DM Sans', sans-serif; background: #f9f9f9; }

        /* Hero */
        .pp-hero { background: #fff; border-bottom: 0.5px solid #e5e5e5; padding: 48px 24px 36px; }
        .pp-inner { max-width: 1100px; margin: 0 auto; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #BA7517; margin-bottom: 12px; }
        .eyebrow-rule { display: block; width: 20px; height: 1.5px; background: #BA7517; flex-shrink: 0; }
        .pp-h1 { font-family: 'DM Serif Display', serif; font-size: clamp(28px, 5vw, 44px); line-height: 1.15; color: #1a1a1a; margin: 0 0 10px; }
        .pp-sub { font-size: 14px; line-height: 1.75; color: #666; margin: 0; }

        /* Body */
        .pp-body { padding: 40px 24px 64px; }

        /* Card */
        .project-card { background: #fff; border: 0.5px solid #e5e5e5; border-radius: 10px; overflow: hidden; margin-bottom: 24px; }

        /* Info */
        .project-info { padding: 28px 28px 24px; border-top: 2px solid #EF9F27; }
        .project-tag { display: inline-block; background: #FAEEDA; color: #BA7517; font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; margin-bottom: 10px; }
        .project-title { font-family: 'DM Serif Display', serif; font-size: clamp(20px, 2.5vw, 26px); color: #1a1a1a; margin: 0 0 6px; line-height: 1.2; }
        .project-location { font-size: 12px; color: #BA7517; font-weight: 500; margin: 0 0 12px; letter-spacing: 0.04em; }
        .project-desc { font-size: 13px; line-height: 1.75; color: #666; margin: 0 0 18px; }
        .project-link { font-size: 12px; font-weight: 500; color: #BA7517; text-decoration: none; letter-spacing: 0.05em; text-transform: uppercase; }

        /* Image */
        .project-img-wrap { position: relative; }
        .project-img { width: 100%; height: 360px; object-fit: cover; display: block; }
        .img-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.45); color: #fff; border: none; border-radius: 4px; width: 32px; height: 32px; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center; }
        .img-arrow-l { left: 10px; }
        .img-arrow-r { right: 10px; }
        .img-counter { position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.5); color: #fff; font-size: 11px; font-weight: 500; padding: 3px 8px; border-radius: 4px; font-family: 'DM Sans', sans-serif; }
        .img-dots { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 5px; }
        .img-dot { width: 6px; height: 6px; border-radius: 50%; border: none; background: rgba(255,255,255,0.55); cursor: pointer; padding: 0; }
        .dot-active { background: #EF9F27 !important; }
        .project-img-placeholder { min-height: 220px; background: #f3f3f3; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; }
        .placeholder-text { font-size: 12px; color: #bbb; font-family: 'DM Sans', sans-serif; }

        /* CTA */
        .cta-strip { background: #1a1a1a; border-radius: 10px; padding: 40px; text-align: center; margin-top: 16px; }
        .cta-heading { font-family: 'DM Serif Display', serif; font-size: 26px; color: #fff; margin: 0 0 10px; }
        .cta-sub { font-size: 14px; color: #999; margin: 0 0 24px; line-height: 1.7; }
        .cta-btn { display: inline-block; background: #EF9F27; color: #412402; font-size: 13px; font-weight: 500; padding: 11px 28px; border-radius: 4px; text-decoration: none; letter-spacing: 0.04em; }

        @media (max-width: 768px) {
          .pp-hero { padding: 32px 20px 24px; }
          .pp-body { padding: 24px 20px 48px; }
          .project-info { padding: 20px 20px 16px; }
          .project-img { height: 240px; }
          .cta-strip { padding: 28px 20px; }
        }
      `}</style>

      <main className="pp">

        <div className="pp-hero">
          <div className="pp-inner">
            <p className="eyebrow"><span className="eyebrow-rule" />Our Work</p>
            <h1 className="pp-h1">Projects</h1>
            <p className="pp-sub">
              A selection of commercial electrical projects completed across Toronto —
              each delivered on time, to code, and to the highest standard.
            </p>
          </div>
        </div>

        <div className="pp-body">
          <div className="pp-inner">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
            <div className="cta-strip">
              <h2 className="cta-heading">Have a project in mind?</h2>
              <p className="cta-sub">
                We work with contractors, developers, and property owners across Toronto
                and all of Canada. Get in touch for a free consultation.
              </p>
              <Link to="/contact" className="cta-btn">Get a Free Quote →</Link>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}