function setup(){
    canvas = createCanvas(380 , 380);
    canvas.position(570 , 250);

    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video , 0 ,0 , 500 , 500);
}