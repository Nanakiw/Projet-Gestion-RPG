"use strict";
let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.use(express.static("public"));

const SERVER_PORT = 7777;

let users = new Map();

//Le serveur écoute le port SERVER_PORT
http.listen(SERVER_PORT, function () {
    console.log("Server started, listening port: " + SERVER_PORT);
});

//#region io.on
io.on("connection", function (socket) {
    console.log("USER: " + socket.id + " CONNECTED TO SERVER.");
    socket.on("getNickname", function (nickname) {
        console.log("PSeudo entered: " + nickname);
        users.set(socket.id, nickname)
        console.log("AfterSet: " + users.get(socket.id));
        socket.emit("showNickname", users.get(socket.id));
    });
});
//#endregion