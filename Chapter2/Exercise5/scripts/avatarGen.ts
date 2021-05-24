namespace Exercise2_5 {

    let link: string = "";
    let responseJSON: string = "";
    let allParts: AllAvatarParts;
    let currentChoices: AvatarPart[] = [];
    
    function intoJSON(_input: AvatarPart): void {
        let input: string = JSON.stringify(_input);
        switch (document.title) {
            case "Avatar Face":
                sessionStorage.setItem("face", input);
                break;
            case "Avatar Shirt":
                sessionStorage.setItem("shirt", input);
                break;
            case "Avatar Pants":
                sessionStorage.setItem("pants", input);
                break;
        }
            
    }

    async function getJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        responseJSON = await response.text();
    }

    function createChoices(_parts: AvatarPart): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("choices");

        let img: HTMLImageElement = document.createElement("img");
        img.src = _parts.image;
        div.appendChild(img);
    
        let choice: HTMLSpanElement = document.createElement("span");
        choice.innerText = _parts.part;
        div.appendChild(choice);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Select";
        button.addEventListener("click", subEvent);
        div.appendChild(button);
              
        return div;

        function subEvent(_e: Event): void {
            console.log("innere Funktion", _parts);
            intoJSON(_parts);
            window.location.href = link;
        }
    }


    function showSelectableParts(_parts: AvatarPart[]): void {
        let allChoices: HTMLDivElement = <HTMLDivElement> document.getElementById("choicesDiv");
        for (let i: number = 0; i < _parts.length; i++) {
            let div: HTMLDivElement = createChoices(_parts[i]);
            allChoices.appendChild(div);
        }

    }

    function alreadyChosen(): void {
        let wrapper: HTMLDivElement = <HTMLDivElement> document.getElementById("chosen");
        let face: AvatarPart = JSON.parse(sessionStorage.getItem("face"));
        let shirt: AvatarPart = JSON.parse(sessionStorage.getItem("shirt"));
        let pants: AvatarPart = JSON.parse(sessionStorage.getItem("pants"));
        let img: HTMLImageElement = document.createElement("img");
        if (face) {
            img.src = face.image;
            wrapper.appendChild(img);
        }
        if (shirt) {
            img.src = shirt.image;
            wrapper.appendChild(img);
        }
        if (pants) {
            img.src = pants.image;
            wrapper.appendChild(img);
        }
    }

    getJSON("https://sturmsee.github.io/GIS-SoSe-2021/Chapter2/Exercise5/scripts/data.json").then ( function (): void {
        allParts = JSON.parse(responseJSON);
        console.log(allParts);

        switch (document.title) {
            case "Avatar Face":
                link = "../Exercise5/avatarSubpage.html";
                currentChoices = allParts.faces;
                break;
            case "Avatar Shirt":
                link = "../Exercise5/avatarSubpage2.html";
                currentChoices = allParts.shirts;
                break;
            case "Avatar Pants":
                link = "../Exercise5/avatarSelection.html";
                currentChoices = allParts.pants;
                break;
        }
        showSelectableParts(currentChoices);
        
        if (sessionStorage) {
            alreadyChosen();
        }
    });

    
}