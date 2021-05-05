"use strict";
// tslint:disable-next-line: typedef
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
context.fillRect(100, 100, 100, 100);
function circles(color) {
    for (let index = 0; index < 50; index++) {
        var x = Math.random() * innerWidth;
        var y = Math.random() * innerHeight;
        context.beginPath();
        context.arc(x, y, 25, 0, Math.PI * 2, false);
        context.strokeStyle = color;
        context.stroke();
    }
}
circles("red");
//# sourceMappingURL=canvas.js.map