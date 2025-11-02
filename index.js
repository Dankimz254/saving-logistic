const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// 1️⃣ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// 2️⃣ Basic Home Route
app.get("/", (req, res) => {
  res.send("✅ Scheme Capital + MongoDB is Live!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


