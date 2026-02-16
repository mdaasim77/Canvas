// ========== USE THESE TWO LINES TO INITIAL ADD CANVAS.

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// ========== GIVE RECTANGLE BORDER LINEAR GRADIENT.

var gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "blue");
gradient.addColorStop(0.5, "red");
gradient.addColorStop(1.0, "green");
ctx.strokeStyle = gradient;
ctx.lineWidth = 5;
ctx.strokeRect(10, 10, 200, 200);

// ========== GIVE RECTANGLE BORDER LINEAR GRADIENT.
