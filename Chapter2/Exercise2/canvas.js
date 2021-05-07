"use strict";
// tslint:disable-next-line: typedef
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
//context.fillRect(100, 100, 100, 100);
function circles() {
    var color;
    var colorArr = ["blue", "red", "green", "yellow", "black", "gray", "orange", "turquoise", "magenta", "brown", "white"];
    for (let index = 0; index < 50; index++) {
        color = colorArr[Math.round(Math.random() * colorArr.length)];
        var x = Math.random() * innerWidth;
        var y = Math.random() * innerHeight;
        context.beginPath();
        context.arc(x, y, 25, 0, Math.PI * 2, false);
        context.strokeStyle = color;
        context.stroke();
    }
}
circles();
function drawRect() {
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var w = Math.random() * 200;
    var h = Math.random() * 200;
    context.beginPath();
    context.fillRect(x, y, w, h);
    context.strokeStyle = "black";
    context.stroke();
}
drawRect();
function Circle(posX, posY, dx, dy, radius) {
    this.posX = posX;
    this.posY = posY;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function () {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = "green";
        context.stroke();
    };
    this.update = function () {
        if (this.posX + this.radius > innerWidth || this.posX - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.posY + this.radius > innerHeight || this.posY - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.posX += this.dx;
        this.posY += this.dy;
        this.draw();
    };
}
var circle = new Circle(200, 200, 3, 3, 30);
/*
var posY: number = Math.random() * innerHeight;
var dx: number = (Math.random() - 0.5) * 8;
var dy: number = (Math.random() - 0.5) * 8;
var radius: number = 35;
function animate(): void {
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

animate(); */
//# sourceMappingURL=canvas.js.map