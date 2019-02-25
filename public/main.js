"use strict";

(function () {
    let socket = io();
    let nickname = prompt("Entrer pseudo", "");
    console.log("pseudo: " + nickname);

    socket.emit("getNickname", nickname);
    socket.on("showNickname", function (pseudo) {
        console.log(pseudo);
        showNickname(pseudo);
    });
})();