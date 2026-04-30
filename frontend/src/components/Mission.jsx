import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .mission-section { font-family: 'DM Sans', sans-serif; background: #f9f9f9; padding: 56px 24px; }
        .mission-inner { max-width: 1100px; margin: 0 auto; background: #fff; border: 0.5px solid #e5e5e5; border-radius: 12px; overflow: hidden; display: grid; grid-template-columns: 1fr 1fr; }
        .mission-text { padding: 48px; }
        .mission-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #BA7517; margin-bottom: 14px; }
        .mission-eyebrow-rule { display: block; width: 20px; height: 1.5px; background: #BA7517; }
        .mission-h2 { font-family: 'DM Serif Display', serif; font-size: clamp(24px, 3.5vw, 38px); line-height: 1.15; color: #1a1a1a; margin: 0 0 20px; }
        .mission-p { font-size: 14px; line-height: 1.8; color: #555; margin: 0 0 28px; }
        .mission-btn { display: inline-block; background: #EF9F27; color: #412402; font-size: 13px; font-weight: 500; padding: 11px 28px; border-radius: 4px; text-decoration: none; letter-spacing: 0.04em; }
        .mission-img { width: 100%; height: 100%; min-height: 320px; object-fit: cover; display: block; }
        @media (max-width: 768px) {
          .mission-inner { grid-template-columns: 1fr; }
          .mission-text { padding: 32px 24px; }
          .mission-img { min-height: 240px; }
        }
      `}</style>

      <section className="mission-section">
        <div className="mission-inner">

          {/* Left — text */}
          <div className="mission-text">
            <p className="mission-eyebrow">
              <span className="mission-eyebrow-rule" />
              Our Mission
            </p>

            <h2 className="mission-h2">
              Safe, reliable electrical work — every time.
            </h2>

            <p className="mission-p">
              At Stareye, we're committed to delivering high-quality electrical solutions
              that clients can trust. Professionalism, safety, and lasting results are built
              into every project we take on — from the first consultation to final inspection.
            </p>

            <Link to="/contact" className="mission-btn">
              Contact Us
            </Link>
          </div>

          {/* Right — image */}
          <img
            src="/src/assets/hero2.jpg"
            alt="Stareye electrician at work"
            className="mission-img"
          />

        </div>
      </section>
    </>
  );
}