/*var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("yourLegofigure");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context: CanvasRenderingContext2D = canvas.getContext("2d");


function drawHair(hairColor: string): void {
    for (let index: number = 0; index <= 15; index++) {
        context.beginPath();
        context.arc(600, 270, 60 - index, Math.PI, Math.PI * 2);
        context.strokeStyle = hairColor;
        context.stroke();
    }
}

function drawHead(): void {
    for (let index: number = 0; index <= 60; index++) {
        context.beginPath();
        context.arc(600, 270, 60 - index, 0, Math.PI * 2);
        context.strokeStyle = "yellow";
        context.stroke();
    }
    
}

function drawHand(): void {
    context.beginPath();
    context.fillRect(400, 500, 50, 50);
    context.fillRect(750, 500, 50, 50);
    context.strokeStyle = "yellow";
    context.stroke();
}

function drawShirt(shirtColor: string): void {
    context.beginPath();
    context.fillRect(400, 330, 400, 230);
    context.strokeStyle = shirtColor;
    context.stroke();
}

function drawPants(pantsColor: string): void {
    context.beginPath();
    context.strokeStyle = pantsColor;
    context.fillRect(450, 500, 300, 300);
    context.stroke();
}
drawShirt("red");
drawHand();
drawHead();
drawHair("brown");
drawPants("blue");
*/