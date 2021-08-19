
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeAnimation,stoneAnimation,boyAnimation,mango1A,mango2A;
var tree,ground;
function preload()
{
treeAnimation = loadImage("mangoes/tree.png");
stoneAnimation = loadImage("mangoes/stone.png");
mango1A = loadImage("mangoes/mango.png");
boyAnimation = loadImage("mangoes/boy.png")
}

function setup() {
	createCanvas(1600, 600);
    //text(mouseX + "," + mouseY,30,40);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(900,580,160,100);
	this.tree.scale = 0.005
	ground = new Ground(600,height,1600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  text(mouseX + "," + mouseY,30,40)
  tree.display();
  ground.display();
  drawSprites();
 
}



