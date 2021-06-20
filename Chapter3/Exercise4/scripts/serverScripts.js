"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise3_4s = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var Exercise3_4s;
(function (Exercise3_4s) {
    let students;
    let port = Number(process.env.PORT);
    let dbUrl = "mongodb+srv://nils-hfu.7qqpl.mongodb.net/Test?retryWrites=true&w=majority";
    if (!port)
        port = 8100;
    startServer(port);
    connectMongo(dbUrl);
    function startServer(_port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function connectMongo(_uri) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_uri, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Database connection ", students != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let q = url.parse(_request.url, true);
        let qdata = q.query;
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
            if (students.find(qdata)) {
                responseText = JSON.stringify(students.find(qdata));
            }
            else {
                responseText = "There is no such entry";
            }
        }
        _response.write(responseText);
        _response.end();
    }
})(Exercise3_4s = exports.Exercise3_4s || (exports.Exercise3_4s = {}));
//# sourceMappingURL=serverScripts.js.map