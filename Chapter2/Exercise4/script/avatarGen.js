"use strict";
var Exercise2_4;
(function (Exercise2_4) {
    let link = "";
    let allParts;
    function intoJSON(_input) {
        let input = JSON.stringify(_input);
        switch (document.title) {
            case "Avatar Face":
                sessionStorage.setItem("face", input);
                break;
            case "Avatar Shirt":
                sessionStorage.setItem("shirt", input);
                break;
            case "Avatar Pants":
                sessionStorage.setItem("pants", input);
                break;
        }
    }
    function getJSON() {
        console.log(Exercise2_4.avatarJSON);
        allParts = JSON.parse(Exercise2_4.avatarJSON);
    }
    function createChoices(_parts) {
        let div = document.createElement("div");
        div.classList.add("choices");
        let img = document.createElement("img");
        img.src = _parts.image;
        div.appendChild(img);
        let choice = document.createElement("span");
        choice.innerText = _parts.part;
        div.appendChild(choice);
        let button = document.createElement("button");
        button.innerText = "Select";
        button.addEventListener("click", subEvent);
        div.appendChild(button);
        return div;
        function subEvent(_e) {
            console.log("innere Funktion", _parts);
            intoJSON(_parts);
            window.location.href = link;
        }
    }
    function showSelectableParts(_parts) {
        let allChoices = document.getElementById("choicesDiv");
        for (let i = 0; i < _parts.length; i++) {
            let div = createChoices(_parts[i]);
            allChoices.appendChild(div);
        }
    }
    function alreadyChosen() {
        let wrapper = document.getElementById("chosen");
        let face = JSON.parse(sessionStorage.getItem("face"));
        let shirt = JSON.parse(sessionStorage.getItem("shirt"));
        let pants = JSON.parse(sessionStorage.getItem("pants"));
        let img = document.createElement("img");
        if (face) {
            img.src = face.image;
            wrapper.appendChild(img);
        }
        if (shirt) {
            img.src = shirt.image;
            wrapper.appendChild(img);
        }
        if (pants) {
            img.src = pants.image;
            wrapper.appendChild(img);
        }
    }
    getJSON();
    let currentChoices = [];
    switch (document.title) {
        case "Avatar Face":
            link = "../Exercise4/avatarSubpage.html";
            currentChoices = allParts.faces;
            break;
        case "Avatar Shirt":
            link = "../Exercise4/avatarSubpage2.html";
            currentChoices = allParts.shirts;
            break;
        case "Avatar Pants":
            link = "../Exercise4/avatarSelection.html";
            currentChoices = allParts.pants;
            break;
    }
    showSelectableParts(currentChoices);
    if (sessionStorage) {
        alreadyChosen();
    }
})(Exercise2_4 || (Exercise2_4 = {}));
//# sourceMappingURL=avatarGen.js.map