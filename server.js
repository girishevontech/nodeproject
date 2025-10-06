const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Root API
app.get("/", (req, res) => {
  res.json({ message: "Test Node.js API!" });
});

// Version 1 API
app.get("/app/v1", (req, res) => {
  res.json({ message: "Version 1" });
});

// Version 2 API
app.get("/app/v2", (req, res) => {
  res.json({ message: "Version 2" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
