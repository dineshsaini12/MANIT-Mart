import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3001;

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "manit-mart-api",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`MANIT Mart API listening on http://localhost:${port}`);
});
