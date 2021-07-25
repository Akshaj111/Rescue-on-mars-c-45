var backG;
var playImg;
var gameState = 0;
var startImg;
var bg2;

function preload(){
    backG = loadImage("backGMarsImg.jpg");
    playImg = loadImage("play.jpg");
    startImg = loadImage("start.jpg");
    bg2 = loadImage("galaxy.jpg");
}

function setup(){
createCanvas(windowWidth,windowHeight);
}

function draw (){
    
    background(backG);
    if(gameState===0){
        image(playImg,displayWidth/2-60,displayHeight/5,100,100);
        textSize(30);
        fill("black");
        text("Press SPACE to begin!",displayWidth/2-160,displayHeight/2);
    }

    if(keyDown("SPACE")){
        gameState = 1;
    }

    if(gameState===1){
        background(backG);    
        textSize(25);
        fill("blue");
        text("Rules: \n  You need to use the arrow keys to jump up and down the Buttes and craters to get to the lander. \n  However, the dust storms and crumbly rocks will do whatever they can to stop you. \n   If you run into a health power pill, then the dust storms will stop moving \n and you have 30 extra seconds to run. If you crash, 1 of your 5 lives will vanish. \n Use the rover token where possible so you can get there quickly.\n\n Press the 's' key if you dare to take the challenge!",120,displayHeight/4);
    }

    if(keyDown("s")){
        gameState=2;
    }

    if(gameState===2){
    background(bg2);
    image(startImg,displayWidth/2-120,displayHeight/4,200,200);
    }   
}