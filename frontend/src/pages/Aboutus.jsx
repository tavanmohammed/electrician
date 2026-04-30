import React from "react";

function AboutUs() {
  return (
    <section style={{ fontFamily: "'DM Sans', sans-serif", color: "inherit" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .au-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 56px 24px 48px; max-width: 1100px; margin: 0 auto; }
        .au-hero-img { width: 100%; border-radius: 12px; object-fit: cover; }
        .au-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #e5e5e5; border: 0.5px solid #e5e5e5; border-radius: 12px; overflow: hidden; }
        .au-coverage { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: center; }
        .au-expertise { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .au-expertise-img { width: 100%; border-radius: 12px; object-fit: cover; max-height: 320px; }
        .au-why { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 768px) {
          .au-hero { grid-template-columns: 1fr; gap: 24px; padding: 32px 20px 32px; }
          .au-stats { grid-template-columns: 1fr; }
          .au-coverage { grid-template-columns: 1fr; }
          .au-expertise { grid-template-columns: 1fr; }
          .au-expertise-img { max-height: 220px; }
          .au-why { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <div className="au-hero">
        <div>
          <p style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#BA7517", marginBottom: "16px",
          }}>
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "#BA7517" }} />
            About Stareye
          </p>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15, margin: "0 0 20px",
          }}>
            Licensed Electrical Contractors Across Canada
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", margin: 0 }}>
            Stareye is a fully licensed electrical contracting company operating throughout
            Canada. With over 10 years of experience and 50+ major projects completed, we
            bring full safety compliance and uncompromising quality to every job site —
            from coast to coast.
          </p>
        </div>
        <img src="/src/assets/logo.png" alt="Stareye" className="au-hero-img" />
      </div>

      {/* LICENSE BANNER */}
      <div style={{
        background: "#FAEEDA",
        borderTop: "2px solid #EF9F27", borderBottom: "2px solid #EF9F27",
        padding: "14px 24px", textAlign: "center",
        fontSize: "13px", fontWeight: 500, color: "#633806", letterSpacing: "0.03em",
      }}>
        ✦ &nbsp; Fully Licensed &amp; Insured &nbsp;·&nbsp; Entire Canada Coverage &nbsp;·&nbsp; Full Safety &amp; Quality Compliance &nbsp; ✦
      </div>

      {/* STATS */}
      <div style={{ maxWidth: "1100px", margin: "40px auto 56px", padding: "0 24px" }}>
        <div className="au-stats">
          {[
            { num: "10+", label: "Years of Canadian experience" },
            { num: "50+", label: "Major projects completed" },
            { num: "100%", label: "Safety & quality commitment" },
          ].map(({ num, label }) => (
            <div key={num} style={{ background: "#f9f9f9", padding: "28px 20px", textAlign: "center" }}>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "36px", color: "#BA7517", lineHeight: 1, margin: "0 0 6px" }}>{num}</p>
              <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.4 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* COVERAGE */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 56px", padding: "0 24px" }}>
        <div style={{ background: "#f9f9f9", border: "0.5px solid #e5e5e5", borderRadius: "12px", padding: "40px" }}>
          <div className="au-coverage">
            <div>
              <p style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#BA7517", marginBottom: "12px",
              }}>
                <span style={{ display: "block", width: "20px", height: "1.5px", background: "#BA7517" }} />
                Our Coverage
              </p>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "26px", lineHeight: 1.25, margin: "0 0 14px" }}>
                Fully Licensed to Work Anywhere in Canada
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", margin: 0 }}>
                Whether your project is in Toronto, Vancouver, Calgary, or Halifax —
                Stareye holds the proper licensing and insurance to operate legally and safely
                in every province and territory.
              </p>
              <div style={{ marginTop: "20px" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  fontSize: "13px", fontWeight: 500,
                  background: "#fff", border: "0.5px solid #e5e5e5",
                  borderRadius: "8px", padding: "8px 14px",
                }}>
                  🇨🇦 &nbsp; Canada — All Provinces &amp; Territories
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { title: "Provincially Licensed", body: "Proper licensing held across all Canadian provinces and territories." },
                { title: "Fully Insured", body: "Comprehensive liability coverage for every project, every location." },
                { title: "Code Compliant", body: "All work meets the Canadian Electrical Code (CEC) standards." },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: "8px", padding: "16px 18px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 500, margin: "0 0 4px" }}>{title}</p>
                  <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.5 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div style={{ height: "0.5px", background: "#e5e5e5", maxWidth: "1100px", margin: "0 auto 56px" }} />

      {/* EXPERTISE */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 56px", padding: "0 24px" }}>
        <div className="au-expertise">
          <img src="/src/assets/proj1e.jpg" alt="Stareye electrician at work" className="au-expertise-img" />
          <div>
            <p style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#BA7517", marginBottom: "12px",
            }}>
              <span style={{ display: "block", width: "20px", height: "1.5px", background: "#BA7517" }} />
              Our Expertise
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "28px", lineHeight: 1.25, margin: "0 0 16px" }}>
              Commercial &amp; Institutional Electrical Work
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", margin: "0 0 12px" }}>
              Our team has deep experience on commercial and institutional projects across
              Canada — schools, office towers, retail centres, and large-scale developments.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", margin: 0 }}>
              From complete rough-ins and wiring to lighting systems, panels,
              troubleshooting, and final installations — dependable service from start to finish.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 56px", padding: "0 24px" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "30px", textAlign: "center", margin: "0 0 32px" }}>
          Why clients choose Stareye
        </h2>
        <div className="au-why">
          {[
            { icon: "⭐", title: "Proven experience", body: "Over 10 years delivering major electrical projects across Canada — schools, commercial buildings, and large-scale developments." },
            { icon: "🛡", title: "Full safety & quality", body: "We maintain 100% compliance with the Canadian Electrical Code. Safety is never an afterthought — it's built into everything we do." },
            { icon: "⚡", title: "Reliable & on time", body: "We understand deadlines, job-site coordination, and the importance of completing work properly — on schedule, every time." },
          ].map(({ icon, title, body }) => (
            <div key={title} style={{
              background: "#fff", border: "0.5px solid #e5e5e5",
              borderRadius: "12px", padding: "24px", borderTop: "2px solid #EF9F27",
            }}>
              <div style={{
                width: "36px", height: "36px", background: "#FAEEDA",
                borderRadius: "8px", display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: "14px", fontSize: "16px",
              }}>
                {icon}
              </div>
              <p style={{ fontSize: "15px", fontWeight: 500, margin: "0 0 8px" }}>{title}</p>
              <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#666", margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default AboutUs;