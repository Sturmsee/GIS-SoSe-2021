"use strict";
var Exercise2_4;
(function (Exercise2_4) {
    let face = JSON.parse(sessionStorage.getItem("face"));
    let shirt = JSON.parse(sessionStorage.getItem("shirt"));
    let pants = JSON.parse(sessionStorage.getItem("pants"));
    function createSelected(_part) {
        let div = document.createElement("div");
        div.classList.add("selected");
        let img = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);
        return div;
    }
    function showSelectedParts() {
        let allSelected = document.getElementById("selectedDiv");
        allSelected.appendChild(createSelected(face));
        allSelected.appendChild(createSelected(shirt));
        allSelected.appendChild(createSelected(pants));
    }
    showSelectedParts();
    console.log(face, shirt, pants);
})(Exercise2_4 || (Exercise2_4 = {}));
//# sourceMappingURL=avatarSelection.js.map