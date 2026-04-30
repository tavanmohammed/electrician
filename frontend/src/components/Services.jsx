import { Link } from "react-router-dom";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/services3.jpg";

const services = [
  {
    title: "Residential Electrical",
    body: "Wiring, panel upgrades, outlets, lighting, and full home electrical work.",
    image: service1,
  },
  {
    title: "Commercial Electrical",
    body: "Installations and maintenance for offices, retail, and commercial buildings.",
    image: service2,
  },
  {
    title: "Renovation & Rewiring",
    body: "Upgrades and rewiring for renovations, additions, and panel replacements.",
    image: service3,
  },
];

export default function Services() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <p style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#BA7517", marginBottom: "14px",
          }}>
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "#BA7517" }} />
            What We Do
          </p>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(28px, 4vw, 38px)", lineHeight: 1.15,
              color: "#1a1a1a", margin: 0,
            }}>
              Services we offer
            </h2>
            <Link to="/services" style={{
              fontSize: "12px", fontWeight: 500, color: "#BA7517",
              textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase",
            }}>
              View all services →
            </Link>
          </div>

          {/* Emergency notice */}
          <div style={{
            background: "#FAEEDA", border: "0.5px solid #EF9F27",
            borderLeft: "3px solid #EF9F27", borderRadius: "8px",
            padding: "14px 18px", marginBottom: "32px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "12px",
          }}>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#412402", margin: "0 0 2px" }}>
                ⚡ Emergency electrical — weekends & holidays
              </p>
              <p style={{ fontSize: "12px", color: "#633806", margin: 0 }}>
                Residential & commercial emergency response available 24/7.
              </p>
            </div>
            <Link to="/contact" style={{
              background: "#EF9F27", color: "#412402",
              fontSize: "12px", fontWeight: 500, padding: "8px 18px",
              borderRadius: "4px", textDecoration: "none", letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}>
              Call Now →
            </Link>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {services.map(({ title, image, body }) => (
              <div key={title} style={{
                background: "#fff", border: "0.5px solid #e5e5e5",
                borderRadius: "10px", overflow: "hidden",
              }}>
                <img
                  src={image}
                  alt={title}
                  style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "20px", borderTop: "2px solid #EF9F27" }}>
                  <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "20px", color: "#1a1a1a", margin: "0 0 8px" }}>
                    {title}
                  </p>
                  <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.6, margin: "0 0 16px" }}>
                    {body}
                  </p>
                  <Link to="/services" style={{
                    fontSize: "12px", fontWeight: 500, color: "#BA7517",
                    textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase",
                  }}>
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}