import express from "express";
import cors from "cors";
import db from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "StayEase Backend is running",
  });
});

app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS test");

    res.json({
      message: "MySQL connection is working",
      result: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "MySQL connection failed",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});