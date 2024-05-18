const express = require("express");
const indexRouter = require("./routes/index.js");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");

// middle ware section below
// set express to handle json payloads and url query strings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // anything in public directory will be served before the express app tries to resolve routes

app.use("/", indexRouter);

app.listen(3000, () => console.log("Express running..."));
