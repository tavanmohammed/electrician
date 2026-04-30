import proj1e from "../assets/proj1e.jpg";

const stats = [
  { number: "15+", label: "Years of experience" },
  { number: "180+", label: "Projects completed" },
  { number: "100%", label: "Safety & quality" },
];

const reasons = [
  { title: "Licensed & insured", text: "Fully licensed across Canada with comprehensive liability coverage on every job." },
  { title: "Guaranteed work", text: "Every project is completed to code with quality and long-term reliability built in." },
  { title: "Fair pricing", text: "Clear quotes with no hidden fees — professional service at a fair price." },
  { title: "Free consultation", text: "We walk through your project and recommend the best approach before work begins." },
  { title: "Emergency availability", text: "Available on weekends and holidays for urgent residential and commercial electrical issues." },
];

export default function Stats() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .stats-section { font-family: 'DM Sans', sans-serif; background: #f9f9f9; padding: 56px 24px; }
        .stats-inner { max-width: 1100px; margin: 0 auto; }

        .stats-bg { position: relative; border-radius: 10px; overflow: hidden; margin-bottom: 48px; }
        .stats-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .stats-bg-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.58); }
        .stats-row { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.15); }
        .stat-cell { padding: 40px 24px; text-align: center; }
        .stat-num { font-family: 'DM Serif Display', serif; font-size: 42px; color: #EF9F27; margin: 0 0 6px; }
        .stat-label { font-size: 12px; color: rgba(255,255,255,0.85); margin: 0; letter-spacing: 0.04em; }

        .eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #BA7517; margin-bottom: 14px; }
        .eyebrow-rule { display: block; width: 20px; height: 1.5px; background: #BA7517; }
        .section-heading { font-family: 'DM Serif Display', serif; font-size: clamp(24px, 3vw, 32px); color: #1a1a1a; margin: 0 0 24px; line-height: 1.2; }
        .reason-card { background: #fff; border: 0.5px solid #e5e5e5; border-left: 2px solid #EF9F27; border-radius: 8px; padding: 16px 18px; margin-bottom: 12px; }
        .reason-title { font-size: 13px; font-weight: 500; color: #1a1a1a; margin: 0 0 4px; }
        .reason-body { font-size: 12px; color: #777; margin: 0; line-height: 1.55; }

        @media (max-width: 768px) {
          .stats-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="stats-section">
        <div className="stats-inner">

          {/* Stats with background image */}
          <div className="stats-bg">
            <img src={proj1e} alt="" className="stats-bg-img" />
            <div className="stats-bg-overlay" />
            <div className="stats-row">
              {stats.map(({ number, label }) => (
                <div key={label} className="stat-cell">
                  <p className="stat-num">{number}</p>
                  <p className="stat-label">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reasons */}
          <p className="eyebrow"><span className="eyebrow-rule" />Why Stareye</p>
          <h2 className="section-heading">Why clients choose us</h2>
          {reasons.map(({ title, text }) => (
            <div key={title} className="reason-card">
              <p className="reason-title">{title}</p>
              <p className="reason-body">{text}</p>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}