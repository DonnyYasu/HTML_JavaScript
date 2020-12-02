window.onload = function(){
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    var deg = 25;
    var x = 10
    var timer = requestAnimationFrame(draw);

    function draw(){
        

        //line
        ctx.save();
        ctx.strokeStyle = 'green';
        ctx.moveTo(86,682);
        ctx.lineTo(278,550);
        ctx.stroke();
        ctx.restore();

        //pentagon
        ctx.save();
        ctx.strokeStyle = '#00ffff';
        ctx.fillStyle = '#ff00ff';
        ctx.moveTo(558, 309);
        ctx.lineTo(667, 284);
        ctx.lineTo(725, 380);
        ctx.lineTo(651, 465);
        ctx.lineTo(548, 420);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        //star
        ctx.save();
        ctx.strokeStyle = '#32,32,32';
        ctx.fillStyle = '#ffff00';
        ctx.moveTo(636, 497);
        ctx.lineTo(667, 554);
        ctx.lineTo(733, 567);
        ctx.lineTo(688, 615);
        ctx.lineTo(696, 682);
        ctx.lineTo(636, 653);
        ctx.lineTo(575, 681);
        ctx.lineTo(584, 617);
        ctx.lineTo(538, 567);
        ctx.lineTo(603, 554);
        ctx.lineTo(603, 554);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        //square
        ctx.fillRect(85, 302, 100,100)
        ctx.fillStyle = 'yellow';
        ctx.strokeStyle = 'black';
    
        //circle ...I can't remember how to do it, and its not in the video. This is my fault for doing this last minute, I know. Also whenever I try to add pixel width to anything, it erases everything on canvas.

        ctx.strokeStyle = 'red';
        ctx.fillStyle = '#ffff00'
       


        
       
    
    }

    draw();
}