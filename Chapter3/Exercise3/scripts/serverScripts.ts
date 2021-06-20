import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace Exercise3_3 {
    let students: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    let dbUrl: string = "mongodb://nils-hfu.7qqpl.mongodb.net/Test";
    
    if (!port)
        port = 8100;

    startServer(port);
    connectMongo(dbUrl);
    
    function startServer(_port: number | string) {

    console.log("Starting server");

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    }    

    interface Data {
        name: string;
        firstname: string;
        registration: string;
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function connectMongo(_uri: string) {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_uri, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students")
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
        let qdata = q.query;
        let dataOut: Data;
        let responseText: string = "";

        if (q.pathname == "/send") {
            if(students != undefined){
                responseText = "There was a hickup during the submission";
            }
            else {
                responseText = "Submission of data was a success";
            }
            
            let student: Data = {name: qdata.name.toString(), firstname: qdata.firstname.toString(), registration: qdata.registrationnumber.toString()}
            students.insert(student);
        }
        else if (q.pathname == "/request") {
            responseText = JSON.stringify(dataOut);
        }
        
        _response.write(responseText);

        _response.end();
    }

}