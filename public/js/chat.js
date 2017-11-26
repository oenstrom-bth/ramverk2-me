/*global io*/
"use strict";

var socket = io;

function setNickname() {
    var nick = prompt("Choose a nickname between 3 and 15 characters:");

    if (!/^\w{3,15}$/.test(nick)) {
        setNickname();
        return;
    }
    document.querySelector("span.nickname").innerHTML = nick;
    return nick;
}

function createMsgNode(message, className, nickname) {
    var chatBox = document.querySelector("div.chat-box");
    var liNode = document.createElement("li");
    var msgNode = document.createElement("p");

    if (nickname) {
        var nickNode = document.createElement("span");

        nickNode.appendChild(document.createTextNode(nickname));
        liNode.appendChild(nickNode);
    }
    msgNode.appendChild(document.createTextNode(message));
    liNode.classList.add(className);
    liNode.appendChild(msgNode);
    chatBox.appendChild(liNode);
    chatBox.scrollTop = chatBox.scrollHeight;
}

var nickname = setNickname() || "Anonymous";

socket = socket.connect();

socket.emit("nickname", nickname);

socket.on("chat message", function (data) {
    createMsgNode(data.message, "foreign-msg", data.nickname);
});

socket.on("user joined", function(data) {
    createMsgNode(data.message, "chat-notification", null);
});

socket.on("user left", function(data) {
    createMsgNode(data.message, "chat-notification", null);
});

document.querySelector("form").addEventListener("submit", function (evt) {
    var message = document.querySelector(".message");

    evt.preventDefault();
    message.focus();
    if (message.value === "") { return; }
    socket.emit("chat message", message.value);
    createMsgNode(message.value, "your-msg", null);
    message.value = "";
});
