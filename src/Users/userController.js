"use strict";

let user = require("./user");

let userController = {
    getUsers: (req, res) => {
        let users = user.getUsers();

        res.json(users);
    },

    getUser: (req, res) => {
        let id = req.params.id;
        let oneUser = user.getUser(id);

        res.json(oneUser);
    }
};

module.exports = userController;
