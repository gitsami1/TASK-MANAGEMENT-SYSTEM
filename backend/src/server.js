require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Manager API is running",
    health: "/api/health",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Manager API is online and healthy",
    data: {
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: "1.0.0",
    },
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

if (require.main === module) {
  const PORT = process.env.PORT || 5002;

  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Task Manager API running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("Database connection failed:", err.message);
      process.exit(1);
    });
} else {
  connectDB().catch((err) => {
    console.error("Database connection failed:", err.message);
  });
}

module.exports = app;
