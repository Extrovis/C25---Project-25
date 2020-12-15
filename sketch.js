const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;

var ground;

var box1, box2, box3;

var garbageBin;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100, 300, 70);

	ground = new Ground(width / 2, height);

	box1 = new Box(540, ground.body.position.y - 113, 18, 190);
	box2 = new Box(660, ground.body.position.y - 113, 18, 190);

	garbageBin = new Dustbin(600, ground.body.position.y - 113);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperBall.display();

  ground.display();

  box1.display();

  box2.display();

  garbageBin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 148, y: -250});
	}
}



