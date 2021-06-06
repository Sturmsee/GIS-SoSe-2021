
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

    function serverAnswer (_answer: string, isJSON: boolean): void {

        let email: string = "";
        let name: string = "";
        let city: string = "";

        if (isJSON) {
            console.log(JSON.parse(_answer));
        }
        else {
            for (let i: number = 0; i <= _answer.length; i++) {
                if (email == "") {
                    while (_answer.charAt(i) != ";") {
                        email += _answer.charAt(i);
                    }
                }
                else if (name == "" || email != "") {
                    while (_answer.charAt(i) != ";") {
                        name += _answer.charAt(i);
                    }
                }
                else if (city == "" || name != "") {
                    while (_answer.charAt(i) != ";" || i <= _answer.length) {
                        city += _answer.charAt(i);
                    }
                }
            }    
        }

        let answerEmail: HTMLHeadingElement = document.createElement("p");
        let answerName: HTMLHeadingElement = document.createElement("p");
        let answerCity: HTMLHeadingElement = document.createElement("p");
        
        answerEmail.innerText = "Your Email: " + email;
        answerName.innerText = "Your Name: " + name;
        answerCity.innerText = "Your City: " + city;

        div.appendChild(answerEmail);
        div.appendChild(answerName); 
        div.appendChild(answerCity);  
    }
}