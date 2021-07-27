var navio, imagemdonavio;
var mar, imagemdomar;

function preload(){
imagemdonavio = loadAnimation("ship1.png","ship2.png");
imagemdomar = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  mar = createSprite(400,200); 
  mar.addImage(imagemdomar);
  mar.velocityX = -5;
  mar.scale = 0.3;
  
  navio = createSprite(130,200,30,30);
  navio.addAnimation("naviosemexendo",imagemdonavio);
  navio.scale = 0.25;
}

function draw() {
  background("white");
  
  if(mar.x<0){
    mar.x = mar.width/8;
  }
  
  drawSprites();
}