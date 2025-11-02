// index.js
const express = require("express");
const app = express();

// Homepage route
app.get("/", (req, res) => {
  res.send("✅ Scheme Capital is Live!");
});

// Render requires process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

