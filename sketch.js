
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,groundObj,leftSide,rightSide
var world
var radius = 40
var engine
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)

	groundObj=new ground(width/2,670,width,20);
	leftside=new ground(700,600,20,120);
	rightSide = new ground(1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
	background(0);
	ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundObj.display();
  leftSide.display()
  rightSide.display()
 
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



