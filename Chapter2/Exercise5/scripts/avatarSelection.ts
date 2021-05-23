namespace Exercise2_5 {

    let face: AvatarPart = JSON.parse(sessionStorage.getItem("face"));
    let shirt: AvatarPart = JSON.parse(sessionStorage.getItem("shirt"));
    let pants: AvatarPart = JSON.parse(sessionStorage.getItem("pants"));

    let serverResponse: Possibility;

    interface Possibility {
        message: string;
        error: string;
    }

    function createSelected(_part: AvatarPart): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("selected");

        let img: HTMLImageElement = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);
    
        return div;
    }

    function showSelectedParts(): void {
        let allSelected: HTMLDivElement = <HTMLDivElement> document.getElementById("selectedDiv");

        let p: HTMLParagraphElement = document.createElement("p");
        if (serverResponse.message) {
            p.innerText = "Der Server sagt" + serverResponse.message;
        }
        else if (serverResponse.error) {
            p.innerText = "FEHLER: " + serverResponse.error;
        }
        allSelected.appendChild(p);

        allSelected.appendChild(createSelected(face));
        allSelected.appendChild(createSelected(shirt));
        allSelected.appendChild(createSelected(pants));
    }

    async function answer(_url: string): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>sessionStorage);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        serverResponse = await response.json();
    }

    answer("https://gis-communication.herokuapp.com/");

    showSelectedParts();
    console.log(face, shirt, pants);

    sessionStorage.clear();
}