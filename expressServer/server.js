//Dependencies
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require("path");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const db = new Client({ connectionString: process.env.DATABASE });

//Connect to Database
db.connect();

//Middleware for handling JSON and serving html
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

//
app.get("/", (req, res) => {
  res.send("test");
});

app.get("/api/records", (req, res) => {
  db.query(`SELECT * FROM records`).then((results) => {
    res.send(results.rows);
  });
});

app.post("/records", (req, res) => {
  db.query(`INSERT INTO records (recordname, artist, genre) VALUES($1,$2,$3)`, [
    req.body.recordname,
    req.body.artist,
    req.body.genre,
  ]).then((result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
