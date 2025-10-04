const express = require("express");
const path = require("path");

const app = express();

app.engine("ejs", engine);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { cg: 123 });
});

app.get("/map/{id}", (req, res) => {
  res.render("home", { cg: 123 });
});

app.listen(3000, () => {
  console.log("gate open!!!");
});
