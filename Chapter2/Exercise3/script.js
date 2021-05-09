"use strict";
let div = document.createElement("div");
function moreBoxes() {
    const boxWidth = innerWidth * Math.random();
    const boxTop = innerHeight * Math.random();
    const boxLeft = innerWidth * Math.random();
    document.body.append(div);
    let lastDiv = document.body.lastElementChild;
    lastDiv.className = "divBox";
    lastDiv.style.display = "flex";
    lastDiv.style.width = boxWidth + "px";
    lastDiv.style.backgroundColor = "black";
    lastDiv.style.top = boxTop + "px";
    lastDiv.style.left = boxLeft + "px";
}
function noBoxes() {
    location.reload();
}
//# sourceMappingURL=script.js.map