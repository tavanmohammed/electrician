import "dotenv/config";        // ← must be first
import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", "https://electrician-1.onrender.com",

  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());       // ← after cors

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => res.send("API is running"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
