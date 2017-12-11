"use strict";
const collName  = "users";


/**
 * Get all users.
 */
const getUsers = async (db) => {
    const coll = await db.collection(collName);
    const users = await coll.find().toArray();

    return users;
};


/**
 * Get user based on username.
 */
const getUser = async (db, username) => {
    const coll = await db.collection(collName);
    const user = await coll.findOne({ username });

    return user;
};


/**
 * Create a new user.
 */
const createUser = async (db, post) => {
    if (!post.username || !post.email || !post.password) {
        return "Please fill in alll the fields.";
    }
    const coll = await db.collection(collName);
    const exists = await coll.findOne({ $or: [
        { username: post.username },
        { email: post.email }
    ]});

    if (exists !== null) {
        return "The user does already exist.";
    }

    await coll.insert({
        username: post.username,
        email: post.email,
        password: post.password
    });
    return "The user has been created";
};


/**
 * Update an user.
 */
const updateUser = async (db, username, post) => {
    if (!post.username || !post.email || !post.password) { return false; }

    const coll = await db.collection(collName);
    //const user = await getUser(db, username);

    await coll.update({ username }, {$set: {
        username: post.username,
        email: post.email,
        password: post.password
    }});

    return post.username;
};


/**
 * Delete an user.
 */
const deleteUser = async (db, username) => {
    const coll = await db.collection(collName);

    await coll.deleteOne({ username });
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
