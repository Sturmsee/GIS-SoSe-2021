// tslint:disable-next-line: typedef
var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context: CanvasRenderingContext2D = canvas.getContext("2d");

context.fillRect(100, 100, 100, 100);

function circles(color: string): void {
    for (let index: number = 0; index < 50; index++) {
        var x: number = Math.random() * innerWidth;
        var y: number = Math.random() * innerHeight;
    
        context.beginPath();
        context.arc(x, y, 25, 0, Math.PI * 2, false);
        context.strokeStyle = color;
        context.stroke();
    }
}

circles("red");