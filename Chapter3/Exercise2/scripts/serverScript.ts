import * as Http from "http";
import * as url from "url";

export namespace Exercise3_2 {

    console.log("Starting server");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    interface Data {
        email: string;
        name: string;
        city: string;
    }

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
        let qdata = q.query;
        let dataOut: Data = {email: qdata.email.toString(), name: qdata.name.toString(), city: qdata.city.toString()}
        let responseText: string = "";

        if (q.pathname == "/html") {
            responseText = qdata.email + ";" + qdata.name + ";" + qdata.city;
        }
        else if (q.pathname == "/json") {
            responseText = JSON.stringify(dataOut);
        }
        

        _response.write(responseText);

        _response.end();
    }
}