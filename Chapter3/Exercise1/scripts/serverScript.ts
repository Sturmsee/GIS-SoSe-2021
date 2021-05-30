import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    //Checking the Port of the Communication
    if (!port)
    //Setting the Port to 8100 if it isn't
        port = 8100;

    //Creating the Server
    let server: Http.Server = Http.createServer();
    //Setting EventListener for possible requests and communication
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Only answers to the right port
    server.listen(port);

    //Printing in the Console
    function handleListen(): void {
        console.log("Listening");
    }

    //In case of a request
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
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
}