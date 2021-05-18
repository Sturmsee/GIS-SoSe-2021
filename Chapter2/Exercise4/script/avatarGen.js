"use strict";
var Exercise2_4;
(function (Exercise2_4) {
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
        return div;
        function subEvent(_e) {
            console.log("innere Funktion", _parts);
            intoJSON(_parts);
        }
    }
    function intoJSON(_input) {
        let input = JSON.stringify(_input);
        sessionStorage.setItem("selected", input);
    }
    function showSelectableParts(_parts) {
        let allChoices = document.getElementById("choicesDiv");
        for (let _part of _parts) {
            let div = createChoices(_part);
            allChoices.appendChild(div);
        }
    }
    showSelectableParts(Exercise2_4.allParts.faces);
})(Exercise2_4 || (Exercise2_4 = {}));
//# sourceMappingURL=avatarGen.js.map