"use strict";

const router = require("express").Router();

const routeHandler = (db) => {
    router.use("/", require("./main"));
    router.use("/users", require("./users")(db));
    router.use("/chat", require("./chat"));

    return router;
};

module.exports = routeHandler;
