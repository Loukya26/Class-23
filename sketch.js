const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas,tower, ground, cannon;
var angle;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(130, 360, 200, 350);
  ground = new Ground(600,550,1200,30)
  angle = -PI/4
  cannon = new Cannon(130,190,90,50,angle)

  
}

function draw() {
  background(189);
  imageMode(CENTER)
  image(backgroundImg,600,300,1200,600)
  

  Engine.update(engine);
  //ground.display();
  

  tower.display();
  cannon.display();
 
}







