"use strict";

const express        = require("express");
const path           = require("path");
const favicon        = require("serve-favicon");
const logger         = require("morgan");
const cookieParser   = require("cookie-parser");
const bodyParser     = require("body-parser");
const lessMiddleware = require("less-middleware");
const app            = express();

app.set("port", process.env.DBWEBB_PORT || '3000');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(lessMiddleware(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
