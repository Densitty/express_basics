const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Welcome to the Homepage</h2>");
});

app.post("/", (req, res) => {
  console.log(res);
  res.send("<h1>Sending some information back</h1>");
});

app.put("/", (req, res) => {
  res.send("<h1>Editing some information</h1>");
});

app.delete("/", (req, res) => {
  res.send("<h1>Deleting some information</h1>");
});

// handles all unspecified request
app.all("*", (req, res) => {
  res.send(
    "<h1>Express Basics</h1>\n<p>This is a basic express application.</p>"
  );
});

app.listen(3000);
