
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new Bob(200, 200, 40)
    //bobObject2 = new Bob()
	//bobObject3 = new Bob()
	///bobObject4 = new Bob()
	//bobObject5 = new Bob()
	roof = new  Roof(width/2, height/4, width/ 7, 20)



	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bobObject1.display()
  roof.display()





}



