"use strict";

// Sample data
let users = [
    {
        "id": 1,
        "username": "admin",
        "email": "admin@admin.com"
    },
    {
        "id": 2,
        "username": "doe",
        "email": "doe@doe.com"
    },
    {
        "id": 3,
        "username": "oenstrom",
        "email": "olof.enstrom@gmail.com"
    }
];

const user = {
    getUsers: () => {
        return users;
    },

    getUser: (id) => {
        const user = users.find(obj => obj.id == id) || {};

        return user;
    }
};

module.exports = user;
