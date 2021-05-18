"use strict";
var Exercise2_4;
(function (Exercise2_4) {
    let face = JSON.parse(sessionStorage.getItem("inputFace"));
    let shirt = JSON.parse(sessionStorage.getItem("inputShirt"));
    let pants = JSON.parse(sessionStorage.getItem("inputFace"));
    function createSelected(_part) {
        let div = document.createElement("div");
        div.classList.add("selected");
        let img = document.createElement("img");
        img.src = _part;
        div.appendChild(img);
        return div;
    }
    function showSelectedParts() {
        createSelected(face);
        createSelected(shirt);
        createSelected(pants);
    }
    showSelectedParts();
    console.log(face, shirt, pants);
})(Exercise2_4 || (Exercise2_4 = {}));
//# sourceMappingURL=avatarSelection.js.map