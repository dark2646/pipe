const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var ball;
var blower;
var blowerMouth;


function setup() {
  createCanvas(500,500);





}

function draw() {
  background(255,255,255);  
  drawSprites();
  show() 
}

function createButton(){

  button=createButton("click to blow")
  button.position(width / 2,height-100);
  button.class("blowButton")
  button.mousePressed(blow);

}

function blow()