const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter = 40;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(440,350,20);
	bobObject2 = new Bob(440,350,20);
  bobObject3 = new Bob(360,350,20);
	bobObject4 = new Bob(320,350,20);
	bobObject5 = new Bob(400,350,20);
	roof = new Roof(400,150,230,30);
	rope = new Rope(bobObject1.body,roof.body,bobDiameter*0.5,0);
	rope2 = new Rope(bobObject2.body,roof.body,bobDiameter*1,0);
	rope3= new Rope(bobObject3.body,roof.body,-bobDiameter*0.5,0);
	rope4= new Rope(bobObject4.body,roof.body,-bobDiameter*1,0);
	rope5= new Rope(bobObject5.body,roof.body,-bobDiameter*0.001,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  fill("black");
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 // console.log(rope);
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:15,y:-15});
  }
 }
 



