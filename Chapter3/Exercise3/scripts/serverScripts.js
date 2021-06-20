"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise3_3 = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var Exercise3_3;
(function (Exercise3_3) {
    let students;
    let port = Number(process.env.PORT);
    let dbUrl = "mongodb://nils-hfu.7qqpl.mongodb.net/Test";
    if (!port)
        port = 8100;
    startServer(port);
    connectMongo(dbUrl);
    function startServer(_port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function connectMongo(_uri) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_uri, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let q = url.parse(_request.url, true);
        let qdata = q.query;
        let dataOut;
        let responseText = "";
        if (q.pathname == "/send") {
            if (students != undefined) {
                responseText = "There was a hickup during the submission";
            }
            else {
                responseText = "Submission of data was a success";
            }
            let student = { name: qdata.name.toString(), firstname: qdata.firstname.toString(), registration: qdata.registrationnumber.toString() };
            students.insert(student);
        }
        else if (q.pathname == "/request") {
            responseText = JSON.stringify(dataOut);
        }
        _response.write(responseText);
        _response.end();
    }
})(Exercise3_3 = exports.Exercise3_3 || (exports.Exercise3_3 = {}));
//# sourceMappingURL=serverScripts.js.map