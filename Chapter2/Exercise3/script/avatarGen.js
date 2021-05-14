"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let div = document.createElement("div");
function showSelectableParts(parts) {
    let choices = document.getElementById("choices");
    let choice = document.createElement("select");
    for (let i; i < parts.length; i++) {
        choice.classList.add("choice");
        choice.innerText = parts;
    }
}
//# sourceMappingURL=avatarGen.js.map