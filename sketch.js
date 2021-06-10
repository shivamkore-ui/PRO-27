
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3,b4,b5;
var ground;
var rope1, rope2, rope3, rope4, rope5

function setup() {
	createCanvas(800, 800);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	 b1 = new Bob(200,200,50)
	 b2 = new Bob(400,200,50)
	 b3 = new Bob(600,200,50)
	 b4 = new Bob(700,200,50)
	 b5 = new Bob(800,200,50)

   ground = new Ground(400, 100, 700, 15)

   rope1 = new Rope(b1.body, ground.body)

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Matter.Engine.update(engine)

  
  fill("pink")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  fill("white")
  ground.display();



}



