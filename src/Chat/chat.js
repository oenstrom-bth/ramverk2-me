"use strict";

const IO = require("socket.io");



/**
 * Broadcast user joined event when user connected.
 */
const onConnect = (socket) => {
    socket.on("nickname", (nick) => {
        socket.nick = nick;
        socket.broadcast.emit("user joined", {
            "message": `${nick} joined the chat`,
            "nickname": nick
        });
    });
};



/**
 * Broadcast chat message when received chat message event.
 */
const onChatMessage = (socket) => {
    socket.on("chat message", (message) => {
        socket.broadcast.emit("chat message", {
            "nickname": socket.nick,
            "message": message
        });
    });
};



/**
 * Emit user left event on disconnect.
 */
const onDisconnect = (chat, socket) => {
    if (!socket.nick) { return; }

    socket.on("disconnect", (reason) => {
        chat.emit("user left", { "message": `${socket.nick} left the chat`, "reason": reason });
    });
};



/**
 * Create the chat server.
 */
const createChat = (server) => {
    const chat = new IO(server);

    chat.on("connection", (socket) => {
        onConnect(socket);
        onChatMessage(socket);
        onDisconnect(chat, socket);
    });
};

module.exports = createChat;
