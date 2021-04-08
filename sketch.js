
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;
var handObject;
var boy1;

function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2= new mango(1000,300,50);
	mango3= new mango(1000,80,40);
	mango4= new mango(900,150,30);
	mango5= new mango(1200,250,50);
	
	boy1= new Boy(300,575);
    treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
    handObject = new Hand(stoneObj.body,{x:200, y:500});
	stoneObj = new Stone(160,500,40);
	
	
	Engine.run(engine);

}

function draw() {

  background("lightblue");
  //Add code for displaying text here!

  treeObj.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  handObject.display();
  stone.display();
  groundObject.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:235, y:420});
	  handObject.attach(stoneObject.body);
	}
  }

  function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }
