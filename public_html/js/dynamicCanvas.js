/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

onload = startGame;


var myGamePiece, inputMode;
//for multiple obstacles
var myObstacles = [];
var myScore;
var barColor = "green";


function startGame()
{
    //piece of object that move around the canvas
    myGamePiece = new component(75, 40, "images/car.png", 10, 160, "image");

    //This is the game score
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");

    // myObstacle = new component(10, 200, "green", 300, 120);
    //redGamePiece = new component(30, 30, "red", 10, 210);

    //Initiating the canvas area and its functionalities
    myGameArea.start();
}


var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {

        //alert("testing purpose...!!!");
        this.canvas.width = "650";
        this.canvas.height = "470";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        //for the multiple objects
        this.frameNo = 0;

        this.interval = setInterval(updateGameArea, 20);
        //document.body.insertAdjacentHTML(this.canvas, document.body.childNodes[0]);

        //adding the listeners to the key board
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            //alert("E is : "+e);
            inputMode = true;
            myGameArea.keys[e.keyCode] = true;
        })

        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
            inputMode = true;
        });
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
};


function component(width, height, color, x, y, type)
{
    this.type = type;
    if (type === "image") {
        this.image = new Image();
        this.image.src = color;
    }


    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;

    /*
     ctx = myGameArea.context;    
     ctx.fillStyle = color;    
     ctx.fillRect(this.x, this.y, this.width, this.height);
     */

    //Used to update the game area.
    this.update = function () {
        ctx = myGameArea.context;

        if (type === "image") {
            ctx.drawImage(this.image,
                    this.x,
                    this.y,
                    this.width, this.height);
        } else if (this.type === "text")
        {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            // alert("updated");
        }
    };

    //This is used to perform the movements of the game piece
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;

    };

    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;

        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    };
}

function updateGameArea()
{
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;

    for (var i = 0; i < myObstacles.length; i++) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        }
    }

    myGameArea.clear();

    //Increasing the frame number

    myGameArea.frameNo += 1;

    //MOve the obsticle
    if (myGameArea.frameNo === 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;

        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(10, height, barColor, x, 0));
        myObstacles.push(new component(10, x - height - gap, barColor, x, height + gap));

    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        //Initiating obsticles
        myObstacles[i].update();
    }




    //what ever you input through key board or mouse it will be handelled
    if (inputMode === true) {
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
    }


    /*
     redGamePiece.x += 1;
     redGamePiece.y -= 1;
     */

//Contrallers for arrow keys
    if (myGameArea.keys && myGameArea.keys[37]) {
        myGamePiece.speedX = -1;
    }
    if (myGameArea.keys && myGameArea.keys[39]) {
        myGamePiece.speedX = 1;
    }
    if (myGameArea.keys && myGameArea.keys[38]) {
        myGamePiece.speedY = -1;
    }
    if (myGameArea.keys && myGameArea.keys[40]) {
        myGamePiece.speedY = 1;
    }

    myScore.text = "SCORE: " + myGameArea.frameNo;

    if ((myGameArea.frameNo > 2000) && (myGameArea.frameNo < 4000))
    {
        this.image = new Image();
        myGamePiece.image.src = "images/car2.png";
        barColor = "yellow";
        // myGamePiece = new component(75, 40, "images/car2.png", 10, 160, "image");

    } else if (myGameArea.frameNo >= 4000) {
        this.image = new Image();
        myGamePiece.image.src = "images/car3.png";
        barColor = "blue";
        //myGamePiece = new component(75, 40, "images/car3.png", 10, 160, "image");

    }

    myScore.update();

    myGamePiece.newPos();
    myGamePiece.update();
    /*   redGamePiece.update(); */

}



function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 === 0) {
        return true;
    }
    return false;
}


function moveUp()
{
    // alert("called");
    myGamePiece.speedY -= 1;
    inputMode = false;

}

function moveDown()
{
    myGamePiece.speedY += 1;
    inputMode = false;

}

function moveLeft()
{
    myGamePiece.speedX -= 1;
    inputMode = false;

}

function moveRight()
{
    myGamePiece.speedX += 1;
    inputMode = false;

}

function stopMove()
{
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    inputMode = false;


}

