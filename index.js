const express = require("express");

const app = express();

app.all("*", (req, res) => {
  res.send(
    "<h1>Express Basics</h1>\n<p>This is a basic express application.</p>"
  );
});

app.listen(3000);
