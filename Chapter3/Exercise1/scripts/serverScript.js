"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    //Checking the Port of the Communication
    if (!port)
        //Setting the Port to 8100 if it isn't
        port = 5500;
    //Creating the Server
    let server = Http.createServer();
    //Setting EventListener for possible requests and communication
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Only answers to the right port
    server.listen(port);
    //Printing in the Console
    function handleListen() {
        console.log("Listening");
    }
    //In case of a request
    function handleRequest(_request, _response) {
        //Server responds by saying "i hear voices!"
        console.log("I hear voices!");
        //Changing the properties of the header
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //printing the request embedded in the url
        _response.write(_request.url);
        //ending the response
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=serverScript.js.map