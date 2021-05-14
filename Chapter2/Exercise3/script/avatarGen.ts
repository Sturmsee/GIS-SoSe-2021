import { AvatarPart } from "./data";
import { allParts } from "./data";

let div: HTMLDivElement =  document.createElement("div");

function showSelectableParts(parts: AvatarPart[]) {
    let choices: HTMLFormElement = <HTMLFormElement> document.getElementById("choices");
    let choice: HTMLSelectElement =  document.createElement("select");
    for (let i: number; i < parts.length; i++) {
        choice.classList.add("choice");
        choice.innerText = parts;
    }
}