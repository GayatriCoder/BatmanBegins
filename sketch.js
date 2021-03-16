const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var raindrops;
var thunder1,thunder2,thunder3,thunder4;
var walkingMan;
var world;

function preload(){

thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");

walkingMan = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");

    
}

function setup(){

    createCanvas(300,600);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
   
    
}

function draw(){
    
}   

