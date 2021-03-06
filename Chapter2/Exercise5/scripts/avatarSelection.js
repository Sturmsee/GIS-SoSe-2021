"use strict";
var Exercise2_5;
(function (Exercise2_5) {
    let face = JSON.parse(sessionStorage.getItem("face"));
    let shirt = JSON.parse(sessionStorage.getItem("shirt"));
    let pants = JSON.parse(sessionStorage.getItem("pants"));
    let serverResponse;
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
        let p = document.createElement("p");
        if (serverResponse.message) {
            p.innerText = "Der Server sagt" + serverResponse.message;
        }
        else if (serverResponse.error) {
            p.innerText = "FEHLER: " + serverResponse.error;
        }
        allSelected.appendChild(p);
        allSelected.appendChild(createSelected(face));
        allSelected.appendChild(createSelected(shirt));
        allSelected.appendChild(createSelected(pants));
    }
    async function answer(_url) {
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(sessionStorage);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        serverResponse = await response.json();
    }
    answer("https://gis-communication.herokuapp.com/").then(function () {
        showSelectedParts();
        console.log(face, shirt, pants);
        sessionStorage.clear();
    });
})(Exercise2_5 || (Exercise2_5 = {}));
//# sourceMappingURL=avatarSelection.js.map