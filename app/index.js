const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
