//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
//Example for loading images to canvas
var mario = new Image();
mario.src = 'images/mario.jpg';

var x = 0;

//Timer
var timer = requestAnimationFrame(main);

//variables for starting and finish line
var start = 110;
var finish = 700;

//fuel variables
var startFuel = 610;
var fuel = startFuel;
var barFullWidth = 300;


//Start Timer Stuff
var sec = 3;
var fps = 60;
var frames = fps; 



function main() {
    timer = requestAnimationFrame(main)
    //clear the canvas
    ctx.clearRect(0, 0, 800, 600);
    //draw the game objects
    //drawStartLine();
    //drawFinishLine();
    drawBox("red", start, 100, 10, 400);
    drawSprite();
    drawFuelBar();
    drawFuelText();

if(sec > 0){
    runStartTimer();
    drawStartTimer();

}
 var car= new GameObject
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


function drawSprite() {
    //drawimage to canvas
    ctx.drawImage(mario, x, 110, 100, 100);

}



/*
function drawBox() {
    ctx.fillStyle = 'purple'
    ctx.fillRect(x, c.height / 2, 100, 50);

}



function drawStartLine() {
    ctx.fillStyle = 'red';
    ctx.fillRect(start, 100, 10, 400);
    }
}

function drawFinishLine() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(finish, 100, 10, 400);
}
*/

function drawBox(color, x, y, w, h){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}

function drawFuelBar() {
    var barCurrentWidth = barFullWidth * getFuelPercentage();

    ctx.fillStyle = 'orange';
    ctx.fillRect(start, 80, barCurrentWidth, 10);
}

function drawFuelText(){
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(fuel, start, 50);
}

function getFuelPercentage(){
    return fuel/startFuel;
}

function drawResults(){
    if(x + 100 > finish){
        //Winning Condition
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial'
        ctx.textAlign = 'center'
        ctx.fillText("You made it to the Finish Line! You Win! Fatality!", c.width/2, c.height/2);

    }
    else{
        //Losing Condition
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial'
        ctx.textAlign = 'center'
        ctx.fillText("You ran out of fuel. Git g00d n00b!", c.width/2, c.height/2);
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
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(sec, c.width / 2, c.height / 2);

}