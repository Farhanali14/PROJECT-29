const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var base;
var Rwall;
var Lwall;
var bridge;
var jointPoint;
var jointLink;

var stones = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base(700,height-20,width*2,30);
  
  Rwall = new Base(width - 100, height / 2 + 20, 400, 50);
  Lwall = new Base(100, height / 2 + 20, 400, 50);

  bridge = new Bridge(15, { x: width / 2 - 220, y: height / 2 }); 
  jointPoint = new Base(width - 300, height / 2 + 10, 40, 20);

  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint)

  for(var i = 0; i<= 8; i++)
  {
    var x = random(width/2-200, width/2 + 300);
    var y = random(-10,140);
    var stone = new Stone(x,y,40);
    stones.push(stone);
  }

}

function draw() {

  background("white");
  Engine.update(engine);

  fill("brown");
  base.display();
  Rwall.display();
  Lwall.display();
  bridge.show();
  
  for (var stone of stones)
 { 
   stone.display();
}
  
}
