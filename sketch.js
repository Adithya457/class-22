const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var Bodies1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var options = {
        restitution:1
    }
    Bodies1 = Bodies.circle(210,210,20,options);
    World.add(world,Bodies1);

    //console.log(ground);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(Bodies1.position.x,Bodies1.position.y,20,20);

}