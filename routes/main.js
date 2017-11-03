"use strict";

let router = require("express").Router();

// const path = require("path");

// let controllers = path.join(__dirname, "..", "controllers");
//
// console.log(controllers);

router.get("/", (req, res) => {
    res.render("index", {
        title: "Home"
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About"
    });
});

router.get("/report", (req, res) => {
    res.render("report", {
        title: "Report"
    });
});

module.exports = router;
