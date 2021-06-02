namespace P_3_1Server {
    let formData: FormData;
    let url: string = "https://gissose2021-nils.herokuapp.com";
    let div: HTMLDivElement = <HTMLDivElement> document.getElementById("serverOutput");
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitButton");
    button.addEventListener("click", subEvent);

    function subEvent(_e: Event): void {
        submitting();
    }

    async function submitting(): Promise<void> {
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url, { method: "get" });
        let responseServer: string = await response.text();
        console.log("Antwort des Servers: " + responseServer);

        serverAnswer(responseServer);
    }

    function serverAnswer(_answer: string): void {

        let answerElement: HTMLHeadingElement = document.createElement("h2");
        answerElement.innerText = "Antwort des Servers: " + _answer;
        div.appendChild(answerElement);
    }
}