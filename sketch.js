const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bob1, bob2, bob3, bob4, bob5, roof, chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,250,300,10);
	bob1=new Bob(300,450);
	bob2=new Bob(350,450);
	bob3=new Bob(400,450);
	bob4=new Bob(450,450);
	bob5=new Bob(500,450);
	chain1=new Chain(bob1.body,roof.body,-100,0);
	chain2=new Chain(bob2.body,roof.body,-50,0);
	chain3=new Chain(bob3.body,roof.body,0,0);
	chain4=new Chain(bob4.body,roof.body,50,0);
	chain5=new Chain(bob5.body,roof.body,100,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  textSize(30);
  fill("red");
  stroke("white");
  strokeWeight(2)
  text ("Newton's Cradle",290,50);
  text("Enjoy!!",360,660)

  textSize(30);
  fill("green");
  stroke("white");
  strokeWeight(2)
  text ("Right Key - Move Right Bob",220,150);
  text ("Left Key - Move Left Bob",240,200);

  textSize(20);
  fill("blue");
  stroke("white");
  strokeWeight(2)
  text("The Newton's cradle is a device that demonstrates the conservation of momentum and ",10,550)
  text("the conservation of energy with swinging spheres.",190,600);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW) 
	{
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-600,y:-595})
	}	
else{
	if(keyCode === RIGHT_ARROW) 
	{
   Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:695})
	}}
}