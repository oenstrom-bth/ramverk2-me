"use strict";

var express       = require("express");
var path          = require("path");
var favicon       = require("serve-favicon");
var logger        = require("morgan");
var cookieParser  = require("cookie-parser");
var bodyParser    = require("body-parser");
var http          = require("http");
var app           = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set("port", process.env.DBWEBB_PORT || "3000");

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



app.use(require("./routes"));



// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});
// error handler
app.use((err, req, res, _next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
});

http.createServer(app).listen(app.get("port"), () => {
    console.log("Server listening on port " + app.get("port"));
});
