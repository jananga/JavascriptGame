/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



onload = function () {

    initialAssign();
    //secondAssign();
    thirdAssign();
    forthAssign();
}




function initialAssign()
{
    //alert("test");

    var canvas = document.getElementById("myCanvas");
    //alert(canvas.innerHTML);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(10, 10, 150, 75);

    ctx.moveTo(0, 0);
    ctx.lineTo(300, 300);
    ctx.stroke();


}

function secondAssign()
{
    var canvasTwo = document.getElementById("myCanvasTwo");

    var ctx = canvasTwo.getContext("2d");
    ctx.beginPath();

    ctx.arc(0, 0, 150, 0, 2 * Math.PI);
    ctx.arc(400, 0, 150, 0, 2 * Math.PI);
    ctx.arc(400, 600, 150, 0, 2 * Math.PI);
    ctx.arc(0, 600, 150, 0, 2 * Math.PI);

    ctx.stroke();


}



function thirdAssign()
{
    var canvasThree = document.getElementById("myCanvasThree");

    var ctx = canvasThree.getContext("2d");


    ctx.font = "30px Arial";

    var gradient = ctx.createLinearGradient(0, 0, canvasThree.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
// Fill with gradient
    ctx.strokeStyle = gradient;

    ctx.strokeText("Big smile!", 200, 150);
    ctx.fillText("Hello World", 230, 50);


    // Create gradient
    var grd = ctx.createLinearGradient(50, 80, 150, 80);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "green");


// Fill with gradient
    ctx.fillStyle = grd;

//ctx.arc(100, 150, 150, 0, 2*Math.PI);

    ctx.fillRect(10, 10, 150, 80);


//Fill with gradient


    // ctx.stroke();


}

function forthAssign() {

    var canvasThree = document.getElementById("myCanvasThree");

    var ctx = canvasThree.getContext("2d");


    // Create gradient
    var grd = ctx.createRadialGradient(85, 200, 45, 85, 200, 65);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "yellow");

    ctx.fillStyle = grd;
    ctx.fillRect(10, 100, 150, 200);


}
