"use strict";
var Exercise3_2;
(function (Exercise3_2) {
    let formData;
    let url = "https://gissose2021-nils.herokuapp.com";
    let div = document.getElementById("serverOutput");
    let htmlButton = document.getElementById("submitHTML");
    htmlButton.addEventListener("click", submittingHTML);
    let jsonButton = document.getElementById("submitJSON");
    jsonButton.addEventListener("click", submittingJSON);
    async function submittingHTML() {
        let _url = url;
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url += "/html" + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseServer = await response.text();
        console.log("the server responded: " + responseServer);
        serverAnswer(responseServer, false);
    }
    async function submittingJSON() {
        let _url = url;
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url += "/json" + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseServer = await response.text();
        console.log("the server responded: " + responseServer);
        serverAnswer(responseServer, true);
    }
    function serverAnswer(_answer, _isJSON) {
        if (_isJSON) {
            console.log(JSON.parse(_answer));
        }
        else {
            let htmlAnswer = _answer.split(";");
            let answerEmail = document.createElement("p");
            let answerName = document.createElement("p");
            let answerCity = document.createElement("p");
            answerEmail.innerText = "Your Email: " + htmlAnswer[0];
            answerName.innerText = "Your Name: " + htmlAnswer[1];
            answerCity.innerText = "Your City: " + htmlAnswer[2];
            div.appendChild(answerEmail);
            div.appendChild(answerName);
            div.appendChild(answerCity);
        }
    }
})(Exercise3_2 || (Exercise3_2 = {}));
//# sourceMappingURL=script.js.map