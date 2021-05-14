"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function createChoices(_parts) {
    let div = document.createElement("div");
    div.classList.add("choices");
    let img = document.createElement("img");
    img.src = _parts.image;
    div.appendChild(img);
    let choice = document.createElement("input");
    choice.type = "radio";
    choice.innerText = _parts.part;
    div.appendChild(choice);
    return div;
}
function subEvent(e) {
    let selection = document.querySelector("input").value;
    console.log(selection);
}
function showSelectableParts(_parts) {
    let btn = document.createElement("button");
    btn.innerText = "Submit";
    btn.addEventListener("click", subEvent);
    let allChoices = document.getElementById("choicesDiv");
    for (let _part of _parts) {
        let div = createChoices(_part);
        allChoices.appendChild(div);
    }
    allChoices.appendChild(btn);
}
showSelectableParts(data_1.allParts.faces);
//# sourceMappingURL=avatarGen.js.map