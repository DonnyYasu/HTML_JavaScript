//Array of words
var rps = [];
rps[0] = `Lasers` 
rps[1] = `Shields`
rps[2] = `EMPs`
var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    ctx.clearRect(0,0, c.width, c.height) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                    ctx.fillStyle = 'gray';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("You both picked Lasers. Draws are for losers. Go again! ", c.width/2, c.height/2);
                    ctx.strokeText("You both picked Lasers. Draws are for losers. Go again! ", c.width/2, c.height/2);
            }
            else if(cChoice === 1)
            {
                //display a loss
                    ctx.fillStyle = 'red';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("Your laser loses to CPU's shield. Game over, man! Game over!", c.width/2, c.height/2);
                    ctx.strokeText("Your laser loses to CPU's shield. Game over, man! Game over!", c.width/2, c.height/2);
            }
            else
            {
                //display a win
                    ctx.fillStyle = 'blue';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("Your laser beats CPU's EMP. Damn, it feels good to be a gangsta!", c.width/2, c.height/2);
                    ctx.strokeText("Your laser beats CPU's EMP. Damn, it feels good to be a gangsta!", c.width/2, c.height/2);
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillStyle = 'blue';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("Your shield beats CPU's laser. Damn, it feels good to be a gangsta!", c.width/2, c.height/2);
                    ctx.strokeText("Your shield beats CPU's laser. Damn, it feels good to be a gangsta!", c.width/2, c.height/2);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillStyle = 'gray';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("You both picked Shields. Draws are for losers. Go again! ", c.width/2, c.height/2);
                    ctx.strokeText("You both picked Shields. Draws are for losers. Go again! ", c.width/2, c.height/2);
                }
                else
                {
                    //display a win
                    ctx.fillStyle = 'red';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("Your Shield loses to CPU's EMP. Game over, man! Game over!", c.width/2, c.height/2);
                    ctx.strokeText("Your Shield loses to CPU's EMP. Game over, man! Game over!", c.width/2, c.height/2);
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.fillStyle = 'red';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("Your EMPs lose to CPU's Laser. Game over, man! Game over!", c.width/2, c.height/2);
                    ctx.strokeText("Your EMPs lose to CPU's Laser. Game over, man! Game over!", c.width/2, c.height/2);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.fillStyle = 'blue';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("Your EMPs beat CPU's Shields. Damn, it feels good to be a gangsta!", c.width/2, c.height/2);
                    ctx.strokeText("Your EMPs beat CPU's Shields. Damn, it feels good to be a gangsta!", c.width/2, c.height/2);
                }
                else
                {
                    //display a win
                    ctx.fillStyle = 'gray';
                    ctx.strokeStyle = 'black';
                    ctx.font = '30px Fantasy'
                    ctx.textAlign = 'center'
                    ctx.fillText("You both picked EMPs. Draws are for losers. Go again! ", c.width/2, c.height/2);
                    ctx.strokeText("You both picked EMPs. Draws are for losers. Go again! ", c.width/2, c.height/2);
                }
             break;
    }
}
