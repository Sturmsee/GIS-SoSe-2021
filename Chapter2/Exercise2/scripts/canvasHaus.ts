var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("CanvasHaus");
var context: CanvasRenderingContext2D = canvas.getContext("2d");

context.beginPath();
//Wiese
context.fillStyle = "green";
context.fillRect(0, 350, 600, 50);
//Haus
context.fillStyle = "red";
context.fillRect(300, 250, 100, 100);
//Schornstein
context.fillStyle = "grey";
context.fillRect(350, 250, -25, -40);
//Fenster
context.fillStyle = "turquoise";
context.fillRect(360, 280, 25, 25);
//Sonne
context.strokeStyle = "yellow";
for (let index: number = 0; index <= 50; index++) {
    context.arc(100, 50, 50 - index, 0, Math.PI * 2);
}
context.stroke();
