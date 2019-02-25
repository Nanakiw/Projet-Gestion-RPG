//HTML handling functions

//Show the nickname sended back by the server in a p
function showNickname(nickname) {
    let textContainer = document.createElement("p");
    textContainer.innerText = nickname;
    document.body.appendChild(textContainer);
};