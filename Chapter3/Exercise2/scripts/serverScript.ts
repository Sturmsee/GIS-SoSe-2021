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

    let adresse: string = 'https://gissose2021-nils.herokuapp.com';
    let q = url.parse(adresse, true);

    
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    
    var qdata = q.query;
    console.log(qdata.monat);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);

        _response.end();
    }
}