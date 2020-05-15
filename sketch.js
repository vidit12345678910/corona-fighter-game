const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var player;
var wall1;

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  player = createSprite(1000,500,50,50);

  var ibw1 = createSprite(30,650,200,5);
  var ibw2 = createSprite(30,745,200,5);
  var ibw3 = createSprite(2,697.5,5,95);
  var ibw4 = createSprite(130,680,5,65);

  wall1 = new Walls(230,680,100,10);
  var wall2 = createSprite(330,360,5,710);
  var wall3 = createSprite(370,712,80,5);
  var wall4 = createSprite(410,690,5,50);

  ibw1.shapeColor = "white";
  ibw2.shapeColor = "white";
  ibw3.shapeColor = "white";
  ibw4.shapeColor = "white";

  //wall1.shapeColor = "white";
  wall2.shapeColor = "white";
  wall3.shapeColor = "white";
  wall4.shapeColor = "white";

  player.shapeColor = "white";

  //wall1.collide(player);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(ibw1);
  player.collide(ibw2);
  player.collide(ibw3);
  player.collide(ibw4);

}

function draw() {
  background(0);

  Engine.update(engine);

  if (keyIsDown(LEFT_ARROW)){
    changeDirection(-8,0);
  }

  if (keyIsDown(RIGHT_ARROW)){
    changeDirection(8,0);  
  }

  if (keyIsDown(UP_ARROW)){
    changeDirection(0,-8);  
  }

  if (keyIsDown(DOWN_ARROW)){
    changeDirection(0,8);  
  }
  wall1.show();
  drawSprites();
}

function changeDirection(x,y){
  player.x = player.x + x;
  player.y = player.y + y;
}