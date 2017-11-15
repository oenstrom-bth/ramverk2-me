"use strict";

const router = require("express").Router();
const userController = require("../src/Users/userController");

// Testing some stuff
router.get("/", (req, res) => res.json(userController.getUsers()));
router.get("/:id", (req, res) => res.json(userController.getUser(req)));

module.exports = router;
