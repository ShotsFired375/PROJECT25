var paper1, paperSprite, paperIMG;
var ground1, groundSprite;
var block1, binLSprite;
var block2, binBSprite;
var block3, binRSprite;
var dustbin, dustbinIMG;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;




function preload() {
	dustbinIMG = loadImage("dustbingreen.png");
	paperIMG = loadImage("paperp.png");
}




function setup() {
	createCanvas(800, 700);

	//groundSprite = createSprite(400, 650, 800, 10);
	//groundSprite.shapeColor="white"
	//binLSprite = createSprite(500, 585, 20, 130);
	//binBSprite = createSprite(600, 640, 200, 20);
	//binRSprite = createSprite(700, 585, 20, 130);
	//binLSprite.shapeColor="yellow";
	//binBSprite.shapeColor="yellow";
	//binRSprite.shapeColor="yellow";

	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(400, 650, 800, 10);
	paper1 = new paper(120, 550, 45);
	block1 = new block(550, 590, 20, 110);
	block2 = new block(600, 635, 100, 20);
	block3 = new block(650, 590, 20, 110);

	dustbin = createSprite(600, 565, 50, 50);
	dustbin.addImage(dustbinIMG);
	dustbin.scale=0.5;


	

	var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { 
			width: 1200, 
			height: 700, 
			wireframes: false } });
	Engine.run(engine);
}




function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  ground1.display();
  paper1.display();
  block1.display();
  block2.display();
  block3.display();

  //ellipse(200, 600, 45);

  if (keyWentDown ("up")) {
  	keyPressed();
  }
 
  drawSprites();
}




function keyPressed() {

	Matter.Body.applyForce(paper1.body, paper1.body.position,{x:150,y:-150});
	
}



