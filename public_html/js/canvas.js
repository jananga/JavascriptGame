/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



onload=initialAssign;




function initialAssign()
{
    //alert("test");
    
   var canvas = document.getElementById("myCanvas");
   //alert(canvas.innerHTML);
   var ctx = canvas.getContext("2d");
   ctx.fillStyle = "#FF0000"; 
   ctx.fillRect(10,10,150,75);
   
   ctx.moveTo(0,0);
   ctx.lineTo(300, 300);
   ctx.stroke();
   
}