export default function About() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section style={{ fontFamily: "'DM Sans', sans-serif", padding: "56px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>

            <div>
              <p style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#BA7517", marginBottom: "14px",
              }}>
                <span style={{ display: "block", width: "20px", height: "1.5px", background: "#BA7517" }} />
                About Stareye
              </p>

              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15,
                color: "#1a1a1a", margin: "0 0 16px",
              }}>
                Licensed electrical contractors across Canada.
              </h2>

              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#555", margin: "0 0 24px" }}>
                Over 10 years of experience delivering safe, code-compliant electrical
                solutions for residential and commercial projects nationwide.
              </p>

              <a href="/about" style={{
                display: "inline-block", background: "#EF9F27", color: "#412402",
                fontSize: "13px", fontWeight: 500, padding: "11px 28px",
                borderRadius: "4px", textDecoration: "none", letterSpacing: "0.03em",
              }}>
                About Us
              </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { title: "Residential & commercial", body: "Homes, offices, retail, and large-scale developments." },
                { title: "Fully licensed & insured", body: "Licensed across all Canadian provinces and territories." },
                { title: "Code compliant", body: "Every job meets the Canadian Electrical Code (CEC)." },
              ].map(({ title, body }) => (
                <div key={title} style={{
                  background: "#fff", border: "0.5px solid #e5e5e5",
                  borderTop: "2px solid #EF9F27", borderRadius: "10px", padding: "18px 20px",
                }}>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#1a1a1a", margin: "0 0 4px" }}>{title}</p>
                  <p style={{ fontSize: "12px", color: "#777", margin: 0, lineHeight: 1.55 }}>{body}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div style={{
        background: "#FAEEDA",
        borderTop: "1.5px solid #EF9F27", borderBottom: "1.5px solid #EF9F27",
        padding: "13px 24px", textAlign: "center",
        fontSize: "12px", fontWeight: 500, color: "#633806", letterSpacing: "0.04em",
      }}>
        ✦ &nbsp; Fully Licensed & Insured &nbsp;·&nbsp; Entire Canada Coverage &nbsp;·&nbsp; Full Safety & Quality Compliance &nbsp; ✦
      </div>
    </>
  );
}