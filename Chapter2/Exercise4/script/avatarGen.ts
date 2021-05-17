import { AvatarPart, allParts } from "./data";


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
              
    return div;

    function subEvent(_e: Event): void {
        console.log("innere Funktion", _parts);
        intoJSON(_parts);
    }
}

function intoJSON(_input: AvatarPart): void {
    let input: string = JSON.stringify(_input);
    sessionStorage.setItem("selected", input);
}

function showSelectableParts(_parts: AvatarPart[]): void {
    let allChoices: HTMLDivElement = <HTMLDivElement> document.getElementById("choicesDiv");
    for (let _part of _parts) {
        let div: HTMLDivElement = createChoices(_part);
        allChoices.appendChild(div);
    }
}

showSelectableParts(allParts.faces);
