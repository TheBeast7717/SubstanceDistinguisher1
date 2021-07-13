const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground1,wallRight,wallLeft;
var hammer1;
var rubberBall1;
var stoneBall1;
var ironBall1;
var i;


function setup(){
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(windowWidth/2,windowHeight/1.1,windowWidth,15);
  wallRight = new Ground(windowWidth/1.01,windowHeight/2.4,10,windowHeight/1.05);
  wallLeft = new Ground(windowWidth/100,windowHeight/2.4,10,windowHeight/1.05);

  hammer1 = new Hammer(windowWidth/5,windowHeight/3,15,90);
  //hammerKnob1 = new Hammer(windowWidth/5+20,windowHeight/3,10,5);

  rubberBall1 = new Rubber(windowWidth/2,windowHeight/2,30);

  stoneBall1 = new Stone(windowWidth/2.5,windowHeight/2,30);

  ironBall1 = new Iron(windowWidth/1.5,windowHeight/2,60,60);

 


}

function draw(){
  background(122, 101, 73);
  Engine.update(engine);

  ground1.display();
  wallRight.display();
  wallLeft.display();

  hammer1.display();
  //hammerKnob1.display();

  rubberBall1.display();

  stoneBall1.display();

  ironBall1.display();
  

  // Making line
  for (var i = 500; i < 800; i=i+1) {
    line(i,40,i+10,40);
  }

  
  
  // camera.on();
  // camera.x=hammer1.position.x;
  // camera.y=hammer1.position.y;    

 

  // Fixing positions
  // hammerKnob1.position.x = hammer1.position.x+10;
  // hammerKnob1.position.y = hammer1.position.y-40;

 
  console.log(hammer1);

  // if (keyDown("up")) {
  //   camera.zoom = camera.zoom - 0.1;
  // }
  // if (keyDown("down")) {
  //   camera.zoom = camera.zoom + 0.1;
  // } 

  textSize(26);
  text("Substance Distinguisher",windowWidth/2.5,windowHeight/20);

  
}