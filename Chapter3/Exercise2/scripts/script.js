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
        let email = "";
        let name = "";
        let city = "";
        if (_isJSON) {
            console.log(JSON.parse(_answer));
        }
        else {
            for (let i = 0; i <= _answer.length; i++) {
                if (email == "") {
                    while (_answer.charAt(i) != ";") {
                        email += _answer.charAt(i);
                    }
                }
                else if (name == "" || email != "") {
                    while (_answer.charAt(i) != ";") {
                        name += _answer.charAt(i);
                    }
                }
                else if (city == "" || name != "") {
                    while (_answer.charAt(i) != ";" || i <= _answer.length) {
                        city += _answer.charAt(i);
                    }
                }
            }
        }
        let answerEmail = document.createElement("p");
        let answerName = document.createElement("p");
        let answerCity = document.createElement("p");
        answerEmail.innerText = "Your Email: " + email;
        answerName.innerText = "Your Name: " + name;
        answerCity.innerText = "Your City: " + city;
        div.appendChild(answerEmail);
        div.appendChild(answerName);
        div.appendChild(answerCity);
    }
})(Exercise3_2 || (Exercise3_2 = {}));
//# sourceMappingURL=script.js.map