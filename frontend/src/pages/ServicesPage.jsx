import { Link } from "react-router-dom";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/services3.jpg";
import service4 from "../assets/services4.jpg";
import service5 from "../assets/services5.jpg";
import service6 from "../assets/services6.jpg";
import service7 from "../assets/service7.jpg"; 

const services = [
  {
    title: "Residential Electrical",
    subtitle: "Safe electrical solutions for homes.",
    description:
      "Full residential electrical including wiring, panel upgrades, outlets, switches, pot lights, and troubleshooting. We handle everything from new builds to older homes needing modernization — all work is code-compliant and inspected.",
    image: service1,
  },
  {
    title: "Commercial Electrical",
    subtitle: "Reliable service for commercial spaces.",
    description:
      "Electrical installations and ongoing maintenance for offices, retail stores, restaurants, warehouses, and commercial buildings. We coordinate with general contractors, meet all commercial code requirements, and minimize disruption to your operations.",
    image: service2,
  },
  {
    title: "Lighting Installation",
    subtitle: "Modern indoor and outdoor lighting.",
    description:
      "Pot lights, LED upgrades, exterior and security lighting, accent lighting, and custom solutions. We design and install lighting that improves both function and ambiance — energy-efficient options available for every budget.",
    image: service3,
  },
  {
    title: "Panel Upgrades",
    subtitle: "Power improvements you can trust.",
    description:
      "Breaker panel and service upgrades, fuse-to-breaker replacements, and capacity improvements. Essential for older homes, EV charger installations, or any property adding high-demand appliances. All upgrades are permitted and inspected.",
    image: service4,
  },
  {
    title: "Renovation & Rewiring",
    subtitle: "Electrical work for remodeled spaces.",
    description:
      "Complete rewiring for renovations, basement finishing, kitchen and bathroom remodels, and additions. We work alongside your renovation team to keep your project on schedule while ensuring all electrical meets current code.",
    image: service5,
  },
  {
    title: "Maintenance & Repairs",
    subtitle: "Fast response and dependable fixes.",
    description:
      "Electrical troubleshooting, circuit repairs, breaker issues, flickering lights, dead outlets, and safety inspections. We diagnose fast and fix it right — keeping your home or business safe and fully operational.",
    image: service6,
  },
  {
    title: "Tesla Charging Installation",
    subtitle: "Fast response and dependable fixes.",
    description:
      "Home and commercial EV charger installation, Tesla Wall Connector setup, Level 2 upgrades, panel capacity checks, and dedicated circuit wiring. We get your vehicle charged up — fast, safe, and to code.",
    image: service7,
  },
];


export default function ServicesPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* Hero */}
      <div style={{ background: "#fff", padding: "56px 24px 40px", borderBottom: "0.5px solid #e5e5e5" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#BA7517", marginBottom: "14px",
          }}>
            <span style={{ display: "block", width: "20px", height: "1.5px", background: "#BA7517" }} />
            What We Do
          </p>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.15,
            color: "#1a1a1a", margin: "0 0 16px",
          }}>
            Complete residential & commercial electrical expertise
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#555", maxWidth: "620px", margin: 0 }}>
            From home upgrades to full commercial installations, Stareye delivers safe,
            licensed, and code-compliant electrical solutions across Canada.
          </p>
        </div>
      </div>

      {/* Emergency Banner */}
      <div style={{
        background: "#EF9F27", padding: "16px 24px",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "16px", flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "18px" }}>⚡</span>
          <div>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "#412402", margin: 0 }}>
              24/7 Emergency Electrical — Weekends & Holidays
            </p>
            <p style={{ fontSize: "12px", color: "#633806", margin: 0 }}>
              Residential & commercial emergency response available when you need it most.
            </p>
          </div>
        </div>
        <Link to="/contact" style={{
          background: "#412402", color: "#fff",
          fontSize: "12px", fontWeight: 500, padding: "9px 20px",
          borderRadius: "4px", textDecoration: "none", letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}>
          Call Now →
        </Link>
      </div>

      {/* Services Grid */}
      <div style={{ padding: "56px 24px", background: "#fff" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px",
        }}>
          {services.map(({ title, subtitle, description, image }) => (
            <div key={title} style={{
              background: "#fff", border: "0.5px solid #e5e5e5",
              borderRadius: "10px", overflow: "hidden",
            }}>
              <img
                src={image}
                alt={title}
                style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "22px", borderTop: "2px solid #EF9F27" }}>
                <p style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "20px", color: "#1a1a1a", margin: "0 0 4px",
                }}>
                  {title}
                </p>
                <p style={{ fontSize: "12px", fontWeight: 500, color: "#BA7517", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {subtitle}
                </p>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, margin: "0 0 18px" }}>
                  {description}
                </p>
                <Link to="/contact" style={{
                  fontSize: "12px", fontWeight: 500, color: "#BA7517",
                  textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase",
                }}>
                  Request service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency CTA bottom */}
      <div style={{ background: "#1a1a1a", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "28px", color: "#fff", margin: "0 0 12px",
          }}>
            Electrical emergency?
          </p>
          <p style={{ fontSize: "14px", color: "#999", lineHeight: 1.7, margin: "0 0 24px" }}>
            We're available on weekends and holidays for urgent residential and commercial
            electrical issues. Don't wait — get a licensed electrician on-site fast.
          </p>
          <Link to="/contact" style={{
            display: "inline-block", background: "#EF9F27", color: "#412402",
            fontSize: "13px", fontWeight: 500, padding: "12px 32px",
            borderRadius: "4px", textDecoration: "none", letterSpacing: "0.04em",
          }}>
            Get Emergency Help →
          </Link>
        </div>
      </div>

    </main>
  );
}