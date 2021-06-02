"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    let formData;
    let url = "https://gissose2021-nils.herokuapp.com";
    let div = document.getElementById("serverOutput");
    let subButton = document.getElementById("submitButton");
    subButton.addEventListener("click", subEvent);
    function subEvent(_e) {
        submitting(url);
    }
    async function submitting(_url) {
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url += "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseServer = await response.text();
        console.log("Antwort des Servers: " + responseServer);
        serverAnswer(responseServer);
    }
    function serverAnswer(_answer) {
        let answerElement = document.createElement("h2");
        answerElement.innerText = "Antwort des Servers: " + _answer;
        div.appendChild(answerElement);
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map