
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var engine,world
var paperObject;
var poster,poster1,poster2
var bg;

function preload()
{
bg = loadImage("Greenery.jpg");

}

function setup() {
 createCanvas(1200, 700);





	engine = Engine.create();
	world = engine.world;
 
  box1 = new Box (865,540,20,250);
  box2 = new Box (1126,540,20,250);
  box3 = new Dustbin (900,620,20,100);
  

  ground = new Ground(width/2, height-35, width*2,15);

  paperObject = new Paper(100,60,100);

  /*poster = new Poster(500,50,10,10);
  poster1 = new Poster1(500,50,10,10);
  poster2 = new Poster2(500,50,10,10);*/

  


}


function draw() {
  background(bg);

  
 
  Engine.update(engine)

  paperObject.display();
  box3.display();
  box2.display()
  //box1.display();
 
 
  ground.display();
 
 
 


 


 
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-95});
  }
}




