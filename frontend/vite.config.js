const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

fetch(`${API_URL}/api/contact`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});
