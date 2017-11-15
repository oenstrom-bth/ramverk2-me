"use strict";

const user = require("./user");

const userController = {
    getUsers: () => {
        return user.getUsers();
    },

    getUser: (req) => {
        const id = req.params.id;

        return user.getUser(id);
    }
};

module.exports = userController;
