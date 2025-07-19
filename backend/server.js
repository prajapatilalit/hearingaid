const express = require("express");
const cors = require("cors");
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});
const appointmentRoutes = require("./routers/appointmentRoutes");
const newsletterRoutes = require("./routers/newsletterRoutes");
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({cors: "*", methods:["GET", "POST", "PUT", "PATCH"]}));

// Routes
app.use("/api", appointmentRoutes);
app.use("/api/newsletter", newsletterRoutes);
// Default Route
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
