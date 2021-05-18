
namespace Exercise2_4 {

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
            window.location.href = "../Exercise4/avatarSelection.html";
        }
    }

    function intoJSON(_input: AvatarPart): void {
        let inputPants: string = JSON.stringify(_input);
        sessionStorage.setItem(`pants`, inputPants);
    }

    function showSelectableParts(_parts: AvatarPart[]): void {
        let allChoices: HTMLDivElement = <HTMLDivElement> document.getElementById("choicesDiv");
        for (let _part of _parts) {
            let div: HTMLDivElement = createChoices(_part);
            allChoices.appendChild(div);
        }
    }

    showSelectableParts(allParts.pants);
}