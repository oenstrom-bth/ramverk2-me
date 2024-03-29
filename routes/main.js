"use strict";

const router = require("express").Router();

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

router.get("/report/:kmom(kmom\\d+)*?", (req, res) => {
    res.render("report", {
        title: "Report",
        kmom: req.params.kmom || "kmom01"
    });
});

router.get("/blackjack", (req, res) => {
    res.render("blackjack", {
        title: "Black Jack"
    });
});

module.exports = router;
