var seaImage;
var shipmoving;
var ship;
var edges;

function preload(){
shipmoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (200,200,10,300)
  sea.addImage ("seaImage",seaImage)
  sea.scale = "0.3"
  sea.velocityX=-2
  ship = createSprite(130,270,10,10)
  ship.addAnimation("shipmoving", shipmoving)
  ship.scale = "0.3"
  if (sea.x<0){
    sea.x = sea.width/2
  }
}

function draw() {
  background("blue");
  drawSprites();
 
}