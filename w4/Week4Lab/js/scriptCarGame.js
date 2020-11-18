//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
//Example for loading images to canvas
var vegeta = new Image();
vegeta.src = 'images/vegeta.png';
var goku = new Image();
goku.src = 'images/goku.png';
var dragonballs = new Image();
dragonballs.src= 'images/dragonballs.png';

var x = 0;

//Timer
var timer = requestAnimationFrame(main);

//variables for starting and finish line
var start = 58;
var finish = 956;

//fuel variables
var startFuel = 910;
var fuel = startFuel;
var barFullWidth = 300;


//Start Timer Stuff
var sec = 3;
var fps = 60;
var frames = fps; 



function main() {
    timer = requestAnimationFrame(main)
    //clear the canvas
    ctx.clearRect(0, 0, c.width, c.height);
    //draw the game objects
    drawStartLine();
    drawFinishLine();
    drawBox();
    drawSprite();
    fuelBG();
    drawFuelBar();
    drawFuelText();

if(sec > 0){
    runStartTimer();
    drawStartTimer();

}

else{
    if(fuel > 0){
        //update x
        x += 1;
        fuel -=1;

    }
    
    }


    
    if (x > c.width) {
        x = -100;
    }
   
//check to see if player made it to finish line
    if(fuel <= 0 || x + 100 > finish){
        drawResults();

    }

}







function drawBox() {
    ctx.drawImage(goku, x, c.height / 2, 100, 50);

}

function drawSprite() {
    //drawimage to canvas
    ctx.drawImage(vegeta, x, 110, 100, 100);

}

function drawStartLine() {
    ctx.fillStyle = 'green';
    ctx.fillRect(start, 100, 20, 450);
}

function drawFinishLine() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(finish, 100, 20, 450);
}

function drawFuelBar() {
    var barCurrentWidth = barFullWidth * getFuelPercentage();
    
    //ctx.fillStyle = 'grey';
    //ctx.fillRect(500, 650, barCurrentWidth, 10);
    ctx.drawImage(dragonballs, 500, 650, barCurrentWidth,70)    
    
    
}

function fuelBG(){
    ctx.fillStyle = 'black';
    ctx.fillRect(500, 650, barFullWidth, 70);
}

function drawFuelText(){
    ctx.fillStyle = 'gold';
    ctx.font = '30px Fantasy';
    ctx.fillText(fuel, start, 50 );
    ctx.fillText("Ki", c.width/2, c.height/2);
    
}

function getFuelPercentage(){
    return fuel/startFuel;
}

function drawResults(){
    if(x + 100 > finish){
        //Winning Condition
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.font = '60px Fantasy'
        ctx.textAlign = 'center'
        ctx.fillText("That is nothing for a Saiyan elite like me. ", c.width/2, c.height/2);
        ctx.strokeText("That is nothing for a Saiyan elite like me. ", c.width/2, c.height/2);

    }
    else{
        //Losing Condition
        ctx.fillStyle = 'white';
        ctx.font = '60px Fantasy'
        ctx.textAlign = 'center'
        ctx.fillText("What?! Impossible!!!", c.width/2, c.height/2);
    }
}

function runStartTimer(){
    frames -=1;
    if(frames < 0 ){
        frames = fps;
        sec -=1;
    }
}

function drawStartTimer(){
        ctx.fillStyle = 'orange';
        ctx.font = '60px Fantasy'
        ctx.textAlign = 'center'
        ctx.fillText(sec, c.width / 2, c.height / 2);

}

