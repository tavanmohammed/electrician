import React from "react";
import logo from "../assets/logo.png";
import proj1e from "../assets/proj1e.jpg";

function AboutUs() {
  return (
    <section style={{ fontFamily: "'DM Sans', sans-serif", color: "inherit" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .au-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          padding: 56px 24px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .au-hero-img {
          width: 100%;
          border-radius: 12px;
          object-fit: contain;
          max-height: 360px;
          background: #f9f9f9;
          padding: 20px;
        }

        .au-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #e5e5e5;
          border: 0.5px solid #e5e5e5;
          border-radius: 12px;
          overflow: hidden;
        }

        .au-coverage {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
        }

        .au-expertise {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .au-expertise-img {
          width: 100%;
          border-radius: 12px;
          object-fit: cover;
          max-height: 320px;
        }

        .au-why {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .au-hero,
          .au-coverage,
          .au-expertise {
            grid-template-columns: 1fr;
          }

          .au-hero {
            gap: 24px;
            padding: 32px 20px;
          }

          .au-stats,
          .au-why {
            grid-template-columns: 1fr;
          }

          .au-expertise-img {
            max-height: 220px;
          }
        }
      `}</style>

      <div className="au-hero">
        <div>
          <p
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#BA7517",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1.5px",
                background: "#BA7517",
              }}
            />
            About Stareye
          </p>

          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Licensed Electrical Contractors Across Canada
          </h1>

          <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", margin: 0 }}>
            Stareye is a fully licensed electrical contracting company operating throughout
            Canada. With over 10 years of experience and 50+ major projects completed, we
            bring full safety compliance and high-quality electrical work to every job site.
          </p>
        </div>

        <img src={logo} alt="Stareye logo" className="au-hero-img" />
      </div>

      <div
        style={{
          background: "#FAEEDA",
          borderTop: "2px solid #EF9F27",
          borderBottom: "2px solid #EF9F27",
          padding: "14px 24px",
          textAlign: "center",
          fontSize: "13px",
          fontWeight: 500,
          color: "#633806",
          letterSpacing: "0.03em",
        }}
      >
        ✦ Fully Licensed &amp; Insured · Canada Coverage · Full Safety &amp; Quality Compliance ✦
      </div>

      <div style={{ maxWidth: "1100px", margin: "40px auto 56px", padding: "0 24px" }}>
        <div className="au-stats">
          {[
            { num: "10+", label: "Years of Canadian experience" },
            { num: "50+", label: "Major projects completed" },
            { num: "100%", label: "Safety & quality commitment" },
          ].map(({ num, label }) => (
            <div
              key={num}
              style={{
                background: "#f9f9f9",
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "36px",
                  color: "#BA7517",
                  lineHeight: 1,
                  margin: "0 0 6px",
                }}
              >
                {num}
              </p>
              <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.4 }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto 56px", padding: "0 24px" }}>
        <div
          style={{
            background: "#f9f9f9",
            border: "0.5px solid #e5e5e5",
            borderRadius: "12px",
            padding: "40px",
          }}
        >
          <div className="au-coverage">
            <div>
              <p
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#BA7517",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "20px",
                    height: "1.5px",
                    background: "#BA7517",
                  }}
                />
                Our Coverage
              </p>

              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "26px",
                  lineHeight: 1.25,
                  margin: "0 0 14px",
                }}
              >
                Licensed Electrical Work for Commercial Projects
              </h2>

              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", margin: 0 }}>
                We provide professional electrical services for commercial buildings, schools,
                offices, retail spaces, and large construction projects with safety and code
                compliance as our top priority.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  title: "Licensed Company",
                  body: "Professional electrical service with proper licensing and insurance.",
                },
                {
                  title: "Fully Insured",
                  body: "Reliable protection and responsibility on every project.",
                },
                {
                  title: "Code Compliant",
                  body: "Electrical work completed according to Canadian safety standards.",
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  style={{
                    background: "#fff",
                    border: "0.5px solid #e5e5e5",
                    borderRadius: "8px",
                    padding: "16px 18px",
                  }}
                >
                  <p style={{ fontSize: "13px", fontWeight: 500, margin: "0 0 4px" }}>
                    {title}
                  </p>
                  <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.5 }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          height: "0.5px",
          background: "#e5e5e5",
          maxWidth: "1100px",
          margin: "0 auto 56px",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto 56px", padding: "0 24px" }}>
        <div className="au-expertise">
          <img src={proj1e} alt="Stareye electrical project" className="au-expertise-img" />

          <div>
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#BA7517",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "#BA7517",
                }}
              />
              Our Expertise
            </p>

            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "28px",
                lineHeight: 1.25,
                margin: "0 0 16px",
              }}
            >
              Commercial &amp; Institutional Electrical Work
            </h2>

            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", margin: "0 0 12px" }}>
              Our team has experience working on schools, commercial buildings, offices,
              retail spaces, and large construction projects.
            </p>

            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", margin: 0 }}>
              From wiring and lighting to panels, troubleshooting, maintenance, and full
              electrical installations, Stareye delivers dependable service from start to finish.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto 56px", padding: "0 24px" }}>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "30px",
            textAlign: "center",
            margin: "0 0 32px",
          }}
        >
          Why clients choose Stareye
        </h2>

        <div className="au-why">
          {[
            {
              icon: "⭐",
              title: "Proven experience",
              body: "Over 10 years of experience delivering electrical work for major projects.",
            },
            {
              icon: "🛡",
              title: "Full safety & quality",
              body: "We focus on safe, clean, code-compliant work on every job site.",
            },
            {
              icon: "⚡",
              title: "Reliable & on time",
              body: "We understand deadlines, job-site coordination, and professional results.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              style={{
                background: "#fff",
                border: "0.5px solid #e5e5e5",
                borderRadius: "12px",
                padding: "24px",
                borderTop: "2px solid #EF9F27",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#FAEEDA",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                  fontSize: "16px",
                }}
              >
                {icon}
              </div>

              <p style={{ fontSize: "15px", fontWeight: 500, margin: "0 0 8px" }}>
                {title}
              </p>

              <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#666", margin: 0 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
