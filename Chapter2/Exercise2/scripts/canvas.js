"use strict";
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
//context.fillRect(100, 100, 100, 100);
function circles() {
    let color;
    let colorArr = ["blue", "red", "green", "yellow", "black", "gray", "orange", "turquoise", "magenta", "brown", "white"];
    for (let index = 0; index < 50; index++) {
        color = colorArr[Math.round(Math.random() * colorArr.length)];
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        context.beginPath();
        context.arc(x, y, 25, 0, Math.PI * 2, false);
        context.strokeStyle = color;
        context.stroke();
    }
}
circles();
function createRect() {
    let x = Math.floor(Math.random() * innerWidth);
    let y = Math.floor(Math.random() * innerHeight);
    let w = Math.floor(Math.random() * 200);
    let h = Math.floor(Math.random() * 200);
    let colorArr = ["blue", "red", "green", "yellow", "black", "gray", "orange", "turquoise", "magenta", "brown", "white"];
    let color = colorArr[Math.round(Math.random() * colorArr.length)];
    return {
        posX: x,
        posY: y,
        width: w,
        height: h,
        colour: color
    };
}
function drawRect(rect) {
    context.beginPath();
    context.fillStyle = rect.colour;
    context.fillRect(rect.posX, rect.posY, rect.width, rect.height);
    context.stroke();
}
let rects = [];
for (let index = 0; index < Math.floor(Math.random() * 7); index++) {
    rects.push(createRect());
}
for (let rect of rects) {
    drawRect(rect);
}
/*
function Circle(posX: number, posY: number, dx: number, dy: number, radius: number) {
    this.posX = posX;
    this.posY = posY;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = "green";
        context.stroke();
    }
    this.update = function() {
        if (this.posX + this.radius > innerWidth || this.posX - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.posY + this.radius > innerHeight || this.posY - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.posX += this.dx;
        this.posY += this.dy;

        this.draw();
    }
}

let circle = new Circle(200, 200, 3, 3, 30);
*/
let posX = Math.random() * innerWidth;
let posY = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 8;
let dy = (Math.random() - 0.5) * 8;
let radius = 35;
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    context.beginPath();
    context.arc(posX, posY, radius, 0, Math.PI * 2, false);
    context.strokeStyle = "green";
    context.stroke();
    if (posX + radius > innerWidth || posX - radius < 0) {
        dx = -dx;
    }
    if (posY + radius > innerHeight || posY - radius < 0) {
        dy = -dy;
    }
    posX += dx;
    posY += dy;
}
//animate(); 
//# sourceMappingURL=canvas.js.map