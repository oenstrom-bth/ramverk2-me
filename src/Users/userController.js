"use strict";

const { getUsers, getUser, createUser, updateUser, deleteUser } = require("./user");

const userController = {
    getUsers: (db) => {
        return getUsers(db);
    },

    getUser: (db, req) => {
        return getUser(db, req.params.username);
    },

    createUser: async (db, req) => {
        return await createUser(db, req.body);
    },

    updateUser: async (db, req) => {
        return await updateUser(db, req.params.username, req.body);
    },

    deleteUser: (db, req) => {
        return deleteUser(db, req.params.username);
    }
};

module.exports = userController;
