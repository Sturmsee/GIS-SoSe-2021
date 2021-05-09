
let div: HTMLDivElement = document.createElement("div");

function moreBoxes(): void {
    const boxWidth: number = innerWidth * Math.random(); 
    const boxTop: number = innerHeight * Math.random();
    const boxLeft: number = innerWidth * Math.random();
    document.body.append(div);
    let lastDiv: HTMLDivElement = <HTMLDivElement> document.body.lastElementChild;
    lastDiv.className = "divBox";
    lastDiv.style.display = "flex";
    lastDiv.style.width = boxWidth + "px";
    lastDiv.style.backgroundColor = "black";
    lastDiv.style.top = boxTop + "px";
    lastDiv.style.left = boxLeft + "px";
}

function noBoxes(): void {
    location.reload();
}