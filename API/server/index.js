import express from "express";

const app = express();
const port = process.env.API_PORT || 3001;

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`API disponível em http://localhost:${port}`);
});
