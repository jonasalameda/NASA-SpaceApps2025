const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const engine = require("ejs-mate");

const MONGO_URI = "mongodb://localhost:27017/";

const opt = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();

app.engine("ejs", engine);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/map/{id}", (req, res) => {
  res.render("map");
});

app.post("/map", (req, res) => {
  res.render("map", req.params.img);
});

app.listen(3000, () => {
  console.log("gate open!!!");
});
