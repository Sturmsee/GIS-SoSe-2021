"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise3_2 = void 0;
const Http = require("http");
const url = require("url");
var Exercise3_2;
(function (Exercise3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let q = url.parse(_request.url, true);
        let qdata = q.query;
        let dataOut = { email: qdata.email.toString(), name: qdata.name.toString(), city: qdata.city.toString() };
        let responseText = "";
        if (q.pathname == "/html") {
            responseText = qdata.email + ";" + qdata.name + ";" + qdata.city;
        }
        else if (q.pathname == "/json") {
            responseText = JSON.stringify(dataOut);
        }
        _response.write(responseText);
        _response.end();
    }
})(Exercise3_2 = exports.Exercise3_2 || (exports.Exercise3_2 = {}));
//# sourceMappingURL=serverScript.js.map