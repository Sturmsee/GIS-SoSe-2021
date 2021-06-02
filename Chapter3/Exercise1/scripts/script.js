"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    let formData;
    let url = "https://gissose2021-nils.herokuapp.com/";
    let div = document.getElementById("registration");
    let button = document.getElementById("submit");
    button.addEventListener("click", submitting);
    async function submitting() {
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseServer = await response.text();
        console.log("Antwort des Servers: " + responseServer);
        serverAnswer(responseServer);
    }
    function serverAnswer(_answer) {
        let answerElement = document.createElement("h3");
        answerElement.innerText = "Antwort des Servers: " + _answer;
        div.appendChild(answerElement);
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map