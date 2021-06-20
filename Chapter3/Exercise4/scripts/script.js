"use strict";
var Exercise3_4;
(function (Exercise3_4) {
    let formData;
    let url = "https://gissose2021-nils.herokuapp.com";
    let div = document.getElementById("serverOutput");
    let send = document.getElementById("sendToDB");
    send.addEventListener("click", sendDATA);
    let request = document.getElementById("request");
    request.addEventListener("click", requestDATA);
    async function sendDATA() {
        let _url = url;
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url += "/send" + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseServer = await response.text();
        console.log("the server responded: " + responseServer);
        let p = document.createElement("p");
        p.innerText = responseServer;
        div.appendChild(p);
    }
    async function requestDATA() {
        let _url = url;
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url += "/request" + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseServer = await response.text();
        console.log("the server responded: " + responseServer);
    }
})(Exercise3_4 || (Exercise3_4 = {}));
//# sourceMappingURL=script.js.map