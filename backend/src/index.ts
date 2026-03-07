import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: [
    "http://localhost:4000",
    "https://grocery-chef-frontend.vercel.app",
  ],
  credentials: true,
}));
app.use(express.json());

app.use("/api", routes);

app.get("/api/health", (req, res) => {
  res.json({ message: "🍳 Grocery Chef API is running!", status: "ok" });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

