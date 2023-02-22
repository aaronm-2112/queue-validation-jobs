const app = require("express")();

app.get("/api", (req, res) => {
  res.send("Hello");
});

app.get("/api/jobs/queue", (req, res) => {
  res.send("Jobs Queue");
});

module.exports = app;
