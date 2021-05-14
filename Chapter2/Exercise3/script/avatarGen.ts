import { AvatarPart, allParts } from "./data";


function createChoices(_parts: AvatarPart): HTMLDivElement {

    let div: HTMLDivElement = document.createElement("div");
    div.classList.add("choices");

    let img: HTMLImageElement = document.createElement("img");
    img.src = _parts.image;
    div.appendChild(img);
    
    let choice: HTMLInputElement = document.createElement("input");
    choice.type = "radio";
    choice.innerText = _parts.part;
    div.appendChild(choice);
    
    return div;
}
function subEvent(): void {
    let selection: string = document.querySelector("input").value;
    console.log(selection);
}

function showSelectableParts(_parts: AvatarPart[]): void {
    let btn: HTMLButtonElement = document.createElement("button");
    btn.innerText = "Submit";
    btn.addEventListener("click", subEvent);
    let allChoices: HTMLDivElement = <HTMLDivElement> document.getElementById("choicesDiv");
    for (let _part of _parts) {
        let div: HTMLDivElement = createChoices(_part);
        allChoices.appendChild(div);
    }
    allChoices.appendChild(btn);
}

showSelectableParts(allParts.faces);
