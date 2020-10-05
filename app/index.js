const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));
app.get("*", function (req, res) {
  res.redirect("./index.html");
});

module.exports = app;
