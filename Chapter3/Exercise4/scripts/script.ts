
namespace Exercise3_4 {

    let formData: FormData;
    let url: string = "https://gissose2021-nils.herokuapp.com";
    let div: HTMLDivElement = <HTMLDivElement>document.getElementById("serverOutput");

    let send: HTMLButtonElement = <HTMLButtonElement> document.getElementById("sendToDB");
    send.addEventListener("click", sendDATA);
    let request: HTMLButtonElement = <HTMLButtonElement>document.getElementById("request");
    request.addEventListener("click", requestDATA);

    async function sendDATA(): Promise<void> {

        let _url: string = url;
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url += "/send" + "?" + query.toString();
        let response: Response = await fetch(_url, { method: "get" });
        let responseServer: string = await response.text();
        console.log("the server responded: " + responseServer);

        let p: HTMLParagraphElement = document.createElement("p");
        p.innerText = responseServer;
        div.appendChild(p);
    }

    async function requestDATA(): Promise<void> {

        let _url: string = url;
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url += "/request" + "?" + query.toString();
        let response: Response = await fetch(_url, { method: "get" });
        let responseServer: string = await response.text();
        console.log("the server responded: " + responseServer);
        
        let p: HTMLParagraphElement = document.createElement("p");
        p.innerText = responseServer;
        div.appendChild(p);
    }
}