/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

onload=startGame;

function startGame()
{
    myGameArea.start();
    
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        
            //alert("testing purpose...!!!");
            this.canvas.with = "400";
            this.canvas.height = "350";
            this.context = this.canvas.getContext("2d");
            document.body.insertAdjacentHTML(this.canvas, document.body.childNodes[0]);
    }
}