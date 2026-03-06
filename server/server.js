// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables
const connectDB = require("./config/db"); // MongoDB connection

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

// Define PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});