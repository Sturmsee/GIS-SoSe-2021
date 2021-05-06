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
var time = 0;
var dx = 4;
var dy = 4;
function animate() {
    requestAnimationFrame(animate);
    // context.clearRect(0, 0, innerWidth, innerHeight);
    context.beginPath();
    context.arc(100 + dx, 30 + dy / 2, 35, 0, Math.PI * 2, false);
    context.strokeStyle = "ligthblue";
    context.stroke();
    if (100 + dx + 35 > innerWidth || 100 + dx - 35 < 0) {
        dx = -dx;
    }
    if (30 + dy + 35 > innerHeight || 30 + dy - 35 < 0) {
        dy = -dy;
    }
    time++;
    dx++;
    dy++;
}
animate();
//# sourceMappingURL=canvas.js.map