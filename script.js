// Function to draw objects
function draw(){
    var canvas = document.getElementById("canvas");
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        // Create a new rectangle and fill with below colour
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.fillRect(100, 100, 200, 200);

        // Create a new Circle and fill, also adds Stroke outline
        ctx.fillStyle = "rgb(255, 0, 0)"; //  Another way of defining the colour

        // The below displays a Gradient, using the rgba and the 0.7 as the amount
        // ctx.fillStyle = "rgba(255, 0, 0, 0.7)"; //  Another way of defining the colour

        ctx.arc(200, 200, 100, 100, Math.PI*2, true);
        // ctx.stroke();
        ctx.fill();

    } // End if
} // End draw() 


// Manual Gradient Function
function gradientGen(){
    var canvas = document.getElementById("canvas");
    
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        for(var i=0; i<1200; i++){
            for(var j=0; j<1600; j++){
                ctx.fillStyle = 'rgb(' + Math.floor(255-0.3*i) + ',0, 0)';
                ctx.fillRect(j*1,i*1,1,1);
            } // End for
        } // End for
    } // End if
} // End gradientGen()