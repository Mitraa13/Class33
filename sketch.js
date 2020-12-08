const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var breakingBall,chain;
var ground,ground1;
var backgroundImg
var box1,box2,box3box4,box5,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15,box16;


function preload() {
}

function setup() {
  createCanvas(1350,650);
  stroke(255)

  engine = Engine.create();
  world = engine.world;
  
  box1 = new box(1000,370,25,40);
  box2 = new box(1025,370,25,40);
  box3 = new box(975,370,25,40);
  box4 = new box(950,370,25,40);
  box5 = new box(1050,370,25,40);
  box6 = new box(1075,370,25,40);
  box7 = new box(925,370,25,40);  
  box8 = new box(1000,330,25,40);
  box9 = new box(1025,330,25,40);
  box10 = new box(975,330,25,40);
  box11 = new box(1050,330,25,40);
  box12 = new box(950,330,25,40);
  box13 = new box(1000,290,25,40);
  box14 = new box(1025,290,25,40);
  box15 = new box(975,290,25,40);
  box16 = new box(1000,250,25,40);

  ground = new Ground(width/2,600,width,20);
  ground1 = new Ground(1000,400,250,20);
  breakingBall = new BreakingBall(width/2,height/2,40);
  chain = new SlingShot(breakingBall.body,{x:width/2 , y:height/2-250});
  
  
}

function draw() {

  background("lightpink");
  Engine.update(engine);
  
  fill(135,206,234);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  chain.display();
  breakingBall.display();
  ground.display();
  ground1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(breakingBall.body,{x:mouseX , y:mouseY});
}



