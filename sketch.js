var block1;
var block2;
var block3;
var block4;
var ball;
var edges;
var music;
function setup() {
  createCanvas(800,400);
  block1 = createSprite(100, 390, 190, 30);
  block2 = createSprite(300, 390, 190, 30);
  block3 = createSprite(500, 390, 190, 30);
  block4 = createSprite(700, 390, 190, 30);
  ball = createSprite(400, 200, 50, 50);
  edges = createEdgeSprites();
  
  block1.shapeColor = "blue";
  block2.shapeColor = "yellow";
  block3.shapeColor = "red";
  block4.shapeColor = "green";
  ball.shapeColor = "white";

  ball.velocityX = -6;
  ball.velocityY = 4;

}
function preload(){
music = loadSound("music.mp3");
}
function draw() {
  background(0);


ball.bounceOff(edges);

  if(block1.isTouching(ball)){
    ball.shapeColor = "blue";
    music.play();
  }
  if(block2.isTouching(ball)){
    ball.shapeColor = "yellow";
  }
  if(block3.isTouching(ball)){
    ball.shapeColor = "red";
  }
  if(block4.isTouching(ball)){
    ball.shapeColor = "green";
  }
  if(block2.isTouching(ball))
  { ball.shapeColor = "yellow";
   ball.velocityX = 0;
    ball.velocityY = 0;
     music.stop();
     } 
  drawSprites();
}
