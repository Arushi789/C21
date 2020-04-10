var fixedRect, movingRect;
var object1, object2;
var o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;

  object1 = createSprite(200,600,100,100);
  object2 = createSprite(800,600,100,100);

  object1.velocityX = 5;
  object2.velocityX = -5;
  
  o3 = createSprite(400,200,100,100);
  o4 = createSprite(800,200,100,100);
  o3.shapeColor = "Red";
  o4.shapeColor = "Red";

  
}

function draw() {
  background(0,0,0);  

o4.x = World.mouseX;
o4.y = World.mouseY;

bounceOff(object1,object2);
bounceOff(movingRect,fixedRect);

isTouching(o3,o4);
  
  drawSprites();
}



