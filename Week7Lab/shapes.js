window.onload = function(){
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    var deg = 25;
    var x = 10
    var timer = requestAnimationFrame(draw);

    function draw(){
        ctx.clearRect(0,0,c.width,c.height);
        ctx.save();
        ctx.fillStyle = 'blue';
        ctx.translate(c.width/2, c.height/2);
        ctx.rotate(deg -= 1* Math.PI/180);
        ctx.fillRect(-100, -100, 200,200);
        ctx.restore();
        ctx.fillRect(x +=1, 10, 20,20);

        //drawline example
        ctx.save();
        ctx.strokeStyle = 'green';
        ctx.moveTo(20,20);
        ctx.lineTo(200,200);
        ctx.stroke();
        ctx.restore();

        //draw a shape
        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'yellow';
        ctx.moveTo(500, 100);
        ctx.lineTo(550, 200);
        ctx.lineTo(450, 150);
        ctx.lineTo(475, 120);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();


        
        timer = requestAnimationFrame(draw);
    
    }

    draw();
}