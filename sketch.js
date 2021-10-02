var ninja;
var coin;


function preload(){
  ninjaImg=loadAnimation("imagefolder2/ninja1.png","imagefolder2/ninja2.png","imagefolder2/ninja3.png","imagefolder2/ninja4.png","imagefolder2/ninja5.png","imagefolder2/ninja6.png")
bgImg =loadImage("imagefolder2/backgroundimage4.jpg");



  
  
}




function setup() {
  createCanvas(980,600);
  bgsprite= createSprite(200, 200, 200, 200);
  bgsprite.addImage(bgImg);
  bgsprite.scale=1.6;
 //bgsprite.velocityY=-2;
  ninja=createSprite(100,450,40,200);
  ninja.addAnimation("running",ninjaImg)
}

function draw() {
  background(0);  
  //if(bgsprite.y<50){
  //bgsprite.y=100;
  //}
  if(keyDown("RIGHT_ARROW")){
    //ladybug.x=ladybug.x+2
  }
  if(keyDown("LEFT_ARROW")){
    //ladybug.x=ladybug.x-2
  }
  spawncoins();
  drawSprites();
}
function spawncoins(){
  if(frameCount%60=== 0){
    coin=createSprite(random(50,750),0,20,20);
    coin.velocityY=3;
  }
}