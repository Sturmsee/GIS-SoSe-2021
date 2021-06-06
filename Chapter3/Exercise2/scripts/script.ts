
namespace Exercise3_2 {

    let formData: FormData;
    let url: string = "https://gissose2021-nils.herokuapp.com";
    let div: HTMLDivElement = <HTMLDivElement> document.getElementById("serverOutput");


    let htmlButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submitHTML");
    htmlButton.addEventListener("click", submittingHTML);
    let jsonButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submitJSON");
    jsonButton.addEventListener("click", submittingJSON);


    async function submittingHTML(): Promise<void> {

        let _url: string = url;
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url += "/html" + "?" + query.toString();
        let response: Response = await fetch(_url, { method: "get" });
        let responseServer: string = await response.text();
        console.log("the server responded: " + responseServer);

        serverAnswer(responseServer, false);

    }

    async function submittingJSON(): Promise<void> {

        let _url: string = url;
        formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url += "/json" + "?" + query.toString();
        let response: Response = await fetch(_url, { method: "get" });
        let responseServer: string = await response.text();
        console.log("the server responded: " + responseServer);

        serverAnswer(responseServer, true);

    }

    function serverAnswer (_answer: string, _isJSON: boolean): void {

        if (_isJSON) {
            console.log(JSON.parse(_answer));
        }
        else {
            
            let htmlAnswer: string[] = _answer.split(";");


            let answerEmail: HTMLHeadingElement = document.createElement("p");
            let answerName: HTMLHeadingElement = document.createElement("p");
            let answerCity: HTMLHeadingElement = document.createElement("p");
        
            answerEmail.innerText = "Your Email: " + htmlAnswer[0];
            answerName.innerText = "Your Name: " + htmlAnswer[1];
            answerCity.innerText = "Your City: " + htmlAnswer[2];

            div.appendChild(answerEmail);
            div.appendChild(answerName); 
            div.appendChild(answerCity);      
        }

          
    }
}