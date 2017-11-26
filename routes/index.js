"use strict";

const router = require("express").Router();

router.use("/", require("./main"));
router.use("/users", require("./users"));
router.use("/chat", require("./chat"));

module.exports = router;
