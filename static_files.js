const path = require("path");
const express = require("express");

const app = express();

// we want to serve the static files
// express.static is a middleware and public is the directory we ask express to look into to get our files
app.use(express.static("public"));

app.all("/", (req, res) => {
  console.log(path.join(__dirname + "/public/style.css"));
  res.sendFile(path.join(__dirname + "/start.html"));
});

app.all("*", (req, res) => {
  res.send("<h1>Sorry, file requested does not exist.</h1>");
});

app.listen(3000);
console.log("Listening on port 3000");
