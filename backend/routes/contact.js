import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {

console.log("CONTACT ROUTE HIT");
console.log("BODY:", req.body);

  try {
    const {
      name,
      email,
      phone,
      address,
      type,
      service,
      value,
      urgent,
      message,
    } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Missing fields" });

    }
 

    // 🔹 1. Email to YOU (admin)
    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Stareye Electrical <${process.env.FROM_EMAIL}>`,
        to: [process.env.ADMIN_EMAIL],
        reply_to: [email],
        subject: `${urgent === "Yes" ? "URGENT - " : ""}New Quote - ${name}`,
        html: `
          <h2>New Request</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Address:</b> ${address || "N/A"}</p>
          <p><b>Service:</b> ${service || "N/A"}</p>
          <p><b>Type:</b> ${type || "N/A"}</p>
          <p><b>Value:</b> ${value || "N/A"}</p>
          <p><b>Urgent:</b> ${urgent || "No"}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `,
      }),
    });

    const adminData = await adminResponse.json();

    if (!adminResponse.ok) {
      console.error(adminData);
      return res.status(500).json({ error: adminData });
    }

    // 🔹 2. AUTO-REPLY to customer
    const customerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Stareye Electrical <${process.env.FROM_EMAIL}>`,
        to: [email],
        subject: "We received your request",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting <b>Stareye Electrical</b>.</p>
          <p>We have received your request and will get back to you with 3 business days.</p>
          <p>If your request is urgent, please call us directly to (416)618-4222.</p>
          <br/>
          <p>— Stareye Electrical Team</p>
        `,
      }),
    });

    const customerData = await customerResponse.json();

    if (!customerResponse.ok) {
      console.error(customerData);
      return res.status(500).json({ error: customerData });
    }

    res.json({ success: true });

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

console.log("FROM_EMAIL:", process.env.FROM_EMAIL);
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

export default router;