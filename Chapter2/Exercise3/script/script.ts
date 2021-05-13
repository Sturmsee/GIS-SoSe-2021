document.getElementById("moreBox").addEventListener("click", moreBoxes);
document.getElementById("resetBox").addEventListener("click", resetBoxes);


function moreBoxes(): void {
    let div: HTMLDivElement = document.createElement("div");

    const boxHeight: number = innerHeight * Math.random();
    const boxWidth: number = innerWidth * Math.random();
    const boxTop: number = innerHeight * Math.random();
    const boxLeft: number = innerWidth * Math.random();
    
    div.classList.add("divBox");
    div.style.height = boxHeight + "px";
    div.style.width = boxWidth + "px";
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    div.style.top = boxTop + "px";
    div.style.left = boxLeft + "px";
    
    document.getElementById("boxInHere").appendChild(div);
}

function resetBoxes(): void {
    let createdDivs: NodeListOf<Element> = document.querySelectorAll("div.divBox"); 
    for (let createdDiv of createdDivs) {
        createdDiv.remove();
    }
    startUpDivs();
}

function startUpDivs(): void {
    for (let index: number = 0; index < Math.floor(Math.random() * 10); index++) {
        moreBoxes();
    }
}

startUpDivs();