const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const multer = require("multer");

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/public/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", upload.single("img"), (req, res) => {
  console.log(req.file);
  res.render("home", { img: req.file });
});

app.get("/map/{id}", (req, res) => {
  res.render("map");
});

app.post("/map", (req, res) => {
  console.log(req.file);
  res.render("map", { img: req.params.img });
});

app.listen(3000, () => {
  console.log("gate open!!!");
});
