import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "",
    type: "", value: "", urgent: "", service: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
   
  const submit = async (e) => {
    e.preventDefault();
  
    console.log("FORM SUBMITTING:", form);
  
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    
      const data = await res.json();
      console.log("BACKEND RESPONSE:", data);
    
      if (res.ok && data.success) {
        alert("Email sent successfully");
        setSent(true);
      } else {
        alert(JSON.stringify(data));
      }
    } catch (err) {
      console.error("FRONTEND ERROR:", err);
      alert("Cannot connect to backend");
    }
  };
    
  return (
    <>  
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; }
        .cu { font-family: 'DM Sans', sans-serif; background: #f9f9f9; }
        .cu-hero { background: #fff; border-bottom: 0.5px solid #e5e5e5; padding: 48px 24px 36px; }
        .cu-inner { max-width: 1100px; margin: 0 auto; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #BA7517; margin-bottom: 12px; }
        .eyebrow-rule { display: block; width: 20px; height: 1.5px; background: #BA7517; flex-shrink: 0; }
        .cu-h1 { font-family: 'DM Serif Display', serif; font-size: clamp(28px, 5vw, 44px); line-height: 1.15; color: #1a1a1a; margin: 0 0 10px; }
        .cu-sub { font-size: 14px; line-height: 1.75; color: #666; margin: 0; }
        .cu-body { padding: 32px 24px 56px; }
        .cu-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 20px; align-items: start; }
        .card { background: #fff; border: 0.5px solid #e5e5e5; border-top: 2px solid #EF9F27; border-radius: 10px; padding: 28px; }
        .card-heading { font-family: 'DM Serif Display', serif; font-size: 20px; color: #1a1a1a; margin: 0 0 8px; }
        .card-desc { font-size: 13px; line-height: 1.7; color: #666; margin: 0 0 20px; }
        .info-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; }
        .info-icon { width: 30px; height: 30px; min-width: 30px; background: #FAEEDA; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 13px; }
        .info-label { font-size: 10px; font-weight: 500; color: #BA7517; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 2px; }
        .info-value { font-size: 13px; color: #1a1a1a; margin: 0; }
        .em-strip { background: #EF9F27; border-radius: 8px; padding: 14px 16px; margin-top: 20px; }
        .em-title { font-size: 13px; font-weight: 500; color: #412402; margin: 0 0 2px; }
        .em-sub { font-size: 11px; color: #633806; margin: 0; }
        .map-box { margin-top: 20px; background: #f3f3f3; border: 0.5px solid #e5e5e5; border-radius: 8px; height: 160px; display: flex; align-items: center; justify-content: center; }
        .map-label { font-size: 12px; color: #bbb; }
        .divider { height: 0.5px; background: #f0f0f0; margin: 14px 0; }
        .field-label { font-size: 10px; font-weight: 500; color: #999; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px; }
        .form-field { width: 100%; padding: 9px 12px; font-size: 13px; font-family: 'DM Sans', sans-serif; border: 0.5px solid #e5e5e5; border-radius: 6px; outline: none; color: #1a1a1a; background: #fff; }
        .form-field:focus { border-color: #EF9F27; }
        .form-row { margin-bottom: 12px; }
        .two-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px; }
        .toggle-group { display: flex; gap: 6px; flex-wrap: wrap; }
        .tbtn { font-size: 12px; font-weight: 500; font-family: 'DM Sans', sans-serif; padding: 7px 13px; border-radius: 6px; border: 0.5px solid #e5e5e5; background: #fff; color: #555; cursor: pointer; white-space: nowrap; }
        .tbtn.t-active { background: #FAEEDA; border-color: #EF9F27; color: #412402; }
        .tbtn.u-yes { background: #fff0f0; border-color: #e24b4a; color: #a32d2d; }
        .tbtn.u-no { background: #eaf3de; border-color: #639922; color: #3b6d11; }
        .submit-btn { background: #EF9F27; color: #412402; font-size: 13px; font-weight: 500; font-family: 'DM Sans', sans-serif; padding: 11px 20px; border-radius: 4px; border: none; cursor: pointer; letter-spacing: 0.04em; width: 100%; margin-top: 6px; }
        .success { text-align: center; padding: 40px 0; }
        @media (max-width: 768px) {
          .cu-grid { grid-template-columns: 1fr; }
          .two-fields { grid-template-columns: 1fr; }
          .card { padding: 20px; }
          .cu-hero { padding: 32px 20px 24px; }
          .cu-body { padding: 20px 20px 48px; }
        }
      `}</style>

      <main className="cu">

        {/* Hero */}
        <div className="cu-hero">
          <div className="cu-inner">
            <p className="eyebrow"><span className="eyebrow-rule" />Contact</p>
            <h1 className="cu-h1">Get in touch with Stareye</h1>
            <p className="cu-sub">Questions, quotes, or emergencies — we respond fast for residential and commercial projects.</p>
          </div>
        </div>

        {/* Body */}
        <div className="cu-body">
          <div className="cu-inner">
            <div className="cu-grid">

              {/* Info */}
              <div className="card">
                <h2 className="card-heading">Contact information</h2>
                <p className="card-desc">Licensed across Canada. Available weekdays and for emergencies on weekends and holidays.</p>

                {[
                  { icon: "📍", label: "Address", value: "Toronto, ON" },
                  { icon: "📞", label: "Phone", value: "(416) 618-4222" },
                  { icon: "✉️", label: "Email", value: "info@stareye.ca" },
                  { icon: "🕒", label: "Hours", value: "Mon – Fri: 8:30 AM – 5:00 PM" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="info-row">
                    <div className="info-icon">{icon}</div>
                    <div>
                      <p className="info-label">{label}</p>
                      <p className="info-value">{value}</p>
                    </div>
                  </div>
                ))}

                <div className="em-strip">
                  <p className="em-title">⚡ Emergency electrical service</p>
                  <p className="em-sub">Weekends & holidays — residential & commercial</p>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "#412402", margin: "8px 0 0" }}>(416) 618-4222</p>
                </div>
              </div>

              {/* Form */}
              <div className="card">
                <h2 className="card-heading">Request a free quote</h2>

                {sent ? (
                  <div className="success">
                    <p style={{ fontSize: "28px", marginBottom: "10px" }}>✅</p>
                    <p style={{ fontSize: "14px", fontWeight: 500, color: "#1a1a1a", margin: "0 0 4px" }}>Message sent!</p>
                    <p style={{ fontSize: "13px", color: "#777", margin: 0 }}>We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={submit}>

                    <div className="two-fields">
                      <div>
                        <label className="field-label">Full name</label>
                        <input className="form-field" type="text" name="name" placeholder="Jane Smith" value={form.name} onChange={handle} required />
                      </div>
                      <div>
                        <label className="field-label">Phone</label>
                        <input className="form-field" type="tel" name="phone" placeholder="(416) 000-0000" value={form.phone} onChange={handle} required />
                      </div>
                    </div>

                    <div className="form-row">
                      <label className="field-label">Email</label>
                      <input className="form-field" type="email" name="email" placeholder="you@email.com" value={form.email} onChange={handle} required />
                    </div>

                    <div className="form-row">
                      <label className="field-label">Project address</label>
                      <input className="form-field" type="text" name="address" placeholder="123 Main St, Toronto, ON" value={form.address} onChange={handle} required />
                    </div>

                    <div className="divider" />

                    <div className="form-row">
                      <label className="field-label">Project type</label>
                      <div className="toggle-group">
                        {["Residential", "Commercial"].map((t) => (
                          <button key={t} type="button"
                            className={`tbtn ${form.type === t ? "t-active" : ""}`}
                            onClick={() => setForm({ ...form, type: t })}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-row">
                      <label className="field-label">Service needed</label>
                      <select className="form-field" name="service" value={form.service} onChange={handle} required>
                        <option value="">Select a service</option>
                        <option>Residential Electrical</option>
                        <option>Commercial Electrical</option>
                        <option>Panel Upgrade</option>
                        <option>Lighting Installation</option>
                        <option>Renovation & Rewiring</option>
                        <option>Maintenance & Repairs</option>
                        <option>Emergency Service</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <label className="field-label">Estimated project value</label>
                      <div className="toggle-group">
                        {["Under $1k", "$1k–$5k", "$5k–$20k", "$20k+"].map((v) => (
                          <button key={v} type="button"
                            className={`tbtn ${form.value === v ? "t-active" : ""}`}
                            onClick={() => setForm({ ...form, value: v })}>
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-row">
                      <label className="field-label">Is this urgent?</label>
                      <div className="toggle-group">
                        <button type="button"
                          className={`tbtn ${form.urgent === "Yes" ? "u-yes" : ""}`}
                          onClick={() => setForm({ ...form, urgent: "Yes" })}>
                          ⚡ Yes — emergency
                        </button>
                        <button type="button"
                          className={`tbtn ${form.urgent === "No" ? "u-no" : ""}`}
                          onClick={() => setForm({ ...form, urgent: "No" })}>
                          No — standard
                        </button>
                      </div>
                    </div>

                    <div className="divider" />

                    <div className="form-row">
                      <label className="field-label">Project details</label>
                      <textarea className="form-field" name="message"
                        placeholder="Describe your project or issue..."
                        value={form.message} onChange={handle}
                        rows={4} required style={{ resize: "vertical" }} />
                    </div>

                    <button type="submit" className="submit-btn">Send Message →</button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>

      </main>
    </>
  );
}
