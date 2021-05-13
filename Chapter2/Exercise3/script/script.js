"use strict";
document.getElementById("moreBox").addEventListener("click", moreBoxes);
document.getElementById("resetBox").addEventListener("click", resetBoxes);
function moreBoxes() {
    let div = document.createElement("div");
    const boxHeight = innerHeight * Math.random();
    const boxWidth = innerWidth * Math.random();
    const boxTop = innerHeight * Math.random();
    const boxLeft = innerWidth * Math.random();
    div.classList.add("divBox");
    div.style.height = boxHeight + "px";
    div.style.width = boxWidth + "px";
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    div.style.top = boxTop + "px";
    div.style.left = boxLeft + "px";
    document.getElementById("boxInHere").appendChild(div);
}
function resetBoxes() {
    let createdDivs = document.querySelectorAll("div.divBox");
    for (let createdDiv of createdDivs) {
        createdDiv.remove();
    }
    startUpDivs();
}
function startUpDivs() {
    for (let index = 0; index < Math.floor(Math.random() * 10); index++) {
        moreBoxes();
    }
}
startUpDivs();
//# sourceMappingURL=script.js.map