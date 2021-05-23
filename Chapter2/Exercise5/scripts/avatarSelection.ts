namespace Exercise2_5 {

    let face: AvatarPart = JSON.parse(sessionStorage.getItem("face"));
    let shirt: AvatarPart = JSON.parse(sessionStorage.getItem("shirt"));
    let pants: AvatarPart = JSON.parse(sessionStorage.getItem("pants"));

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
        allSelected.appendChild(createSelected(face));
        allSelected.appendChild(createSelected(shirt));
        allSelected.appendChild(createSelected(pants));
    }

    async function answer(_url: string) {
    let query: URLSearchParams = new URLSearchParams(<any>sessionStorage);
    _url = _url + "?" + query.toString();
    await fetch(_url);
    }

    answer("https://gis-communication.herokuapp.com/");

    showSelectedParts();
    console.log(face, shirt, pants);

    sessionStorage.clear();
}