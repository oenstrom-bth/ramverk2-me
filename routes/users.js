"use strict";

const router = require("express").Router();
const userController = require("../src/Users/userController");
// const { getUsers } = require("../src/Users/user");

// // Testing some stuff
// router.get("/", (req, res) => res.json(userController.getUsers()));
// router.get("/setup", (req, res) => require("../src/Users/setup").resetUsers(req, res));
// router.get("/:id", (req, res) => res.json(userController.getUser(req)));

const userRoutes = (db) => {
    router.get("/", async (req, res) => {
        res.render("crud/show-all", {
            title: "All users",
            users: await userController.getUsers(db)
        });
    });
    router.post("/new", async (req, res) => {
        let msg = await userController.createUser(db, req);

        res.redirect(`new?m=${msg}`);
    });
    router.get("/new", (req, res) => {
        res.render("crud/new-user.pug", {
            title: "New user",
            msg: req.query.m
        });
    });
    router.post("/update/:username", async (req, res) => {
        const username = await userController.updateUser(db, req);

        if (!username) {
            res.redirect("back");
            return;
        }
        res.redirect(`${username}`);
    });
    router.get("/update/:username", async (req, res) => {
        const user = await userController.getUser(db, req);

        if (!user) {
            res.redirect("..");
            return;
        }
        res.render("crud/update-user.pug", {
            title: "Update user",
            user: await userController.getUser(db, req)
        });
    });
    router.get("/delete/:username", async (req, res) => {
        await userController.deleteUser(db, req);
        res.redirect("/users");
    });
    router.get("/setup", (req, res) => require("../src/Users/setup").resetUsers(req, res));
    router.get("/:username", async (req, res) => res.json(await userController.getUser(db, req)));

    return router;
};

module.exports = userRoutes;
