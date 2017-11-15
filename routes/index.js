"use strict";

const router = require("express").Router();

router.use("/", require("./main"));
router.use("/users", require("./users"));

module.exports = router;
