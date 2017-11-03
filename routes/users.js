"use strict";

let router = require("express").Router();
let userController = require("../src/Users/userController");

// Testing some stuff
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);

module.exports = router;
