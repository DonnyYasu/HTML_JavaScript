var c = document.querySelector('canvas');
var ctx= c.getContext('2d');
var timer = requestAnimationFrame(main);

function randomRange(high, low)}{
    return Math.random() * (high - low) + low;
}

function GameObject(){
    this.radius = 3;
    this.color = 'white';
    this.x = Math.random() *c.width;
    this.y = Math.random() *c.height;
    this.vx = 0;
    this.vy = this.radius;

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
        ctx. closePath();
        ctx.fill();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.y > c.height + this.radius){
            this.y = o -this.radius;

        }
    }
}

var particles = [];
var numberofParticles = 100;

for(var i = 0; i<numberofParticles; i++){
    particles[i] = new GameObject();
    particles[i].drawCircle();
}

function main(){
    //clears the canvas
    ctx.clearRect(o,o,c.width,c.height);
    
    for(var i = 0; i<particles.length; i++){
        particles.drawCircle();
    }
    timer = requestAnimationFrame(main);
}