namespace Exercise2_4 {

    let face: string = JSON.parse(sessionStorage.getItem("inputFace"));
    let shirt: string = JSON.parse(sessionStorage.getItem("inputShirt"));
    let pants: string = JSON.parse(sessionStorage.getItem("inputFace"));

    function createSelected(_part: string): HTMLDivElement {

        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("selected");

        let img: HTMLImageElement = document.createElement("img");
        img.src = _part;
        div.appendChild(img);
    
        return div;
    }

    function showSelectedParts(): void {
        createSelected(face);
        createSelected(shirt);
        createSelected(pants);
    }

    showSelectedParts();
    console.log(face, shirt, pants);
}