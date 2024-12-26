import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "epics",
    password: "N.Jaswanth07",
    port: 5432
});

db.connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch(err => console.error("Error connecting to PostgreSQL database", err));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("a.ejs");
});