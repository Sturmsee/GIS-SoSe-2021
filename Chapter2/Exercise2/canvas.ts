// tslint:disable-next-line: typedef
var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context: CanvasRenderingContext2D = canvas.getContext("2d");

//context.fillRect(100, 100, 100, 100);

function circles(): void {
    var color: string;
    var colorArr: string[] = ["blue", "red", "green", "yellow", "black", "gray", "orange", "turquoise", "magenta", "brown", "white"];
    for (let index: number = 0; index < 50; index++) {
        color = colorArr[Math.round(Math.random() * colorArr.length)];
        var x: number = Math.random() * innerWidth;
        var y: number = Math.random() * innerHeight;
        context.beginPath();
        context.arc(x, y, 25, 0, Math.PI * 2, false);
        context.strokeStyle = color;
        context.stroke();
        
    }
}

circles();

function drawRect(): void {
    var x: number = Math.random() * innerWidth;
    var y: number = Math.random() * innerHeight;
    var w: number = Math.random() * 200;
    var h: number = Math.random() * 200;

    context.beginPath();
    context.fillRect(x, y, w, h);
    context.strokeStyle = "black";
    context.stroke();
}

drawRect();

var time: number = 0;
var dx: number = 4;
var dy: number = 4;
function animate(): void {
    requestAnimationFrame(animate);
   // context.clearRect(0, 0, innerWidth, innerHeight);

    context.beginPath();
    context.arc(100 + dx, 30 + dy / 2, 35, 0, Math.PI * 2, false);
    context.strokeStyle = "green";
    context.stroke();

    if (100 + dx + 35 > innerWidth || 100 + dx - 35 < 0) {
        dx = -dx;
    }

    if (30 + dy - 35 > innerHeight || 30 + dy + 35 < 0) {
        dy = -dy;
    }

    time++;
    dx++;
    dy++;
}

animate();