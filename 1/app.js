const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const apiHandler = require("./routes/api");

const app = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/homeWorkDB")
  .then(() => console.log("db is connected ...."));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err.message);
  console.log(err.status);
  res.status(err.status).json({
    status: "fail",
    message: err.message,
  });
});

module.exports = app;
