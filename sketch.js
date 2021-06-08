const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var bgimg
var mia
var plane
var roger
var rogerImage


function preload(){
bgimg = loadImage("realbg.jpg")
snowfallimg = loadImage("snow4.webp")

}

function setup() { 
  createCanvas(800,400);
 
  engine = Engine.create();
   world = engine.world;

  
  
  


  mia = new Mia(600,200,50)
  plane = new Plane(200,height,1600,20)
 
}

function draw() {
  background(bgimg);  
  Engine.update(engine);
 
  plane.display()
  mia.display()
  drawSprites()
}